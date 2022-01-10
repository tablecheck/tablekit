import { useTheme } from '@emotion/react';
import { InputSize } from '@tablecheck/tablekit-input';
import {
  CLASSIC_COLORS,
  FieldHeight,
  BORDER_RADIUS
} from '@tablecheck/tablekit-theme';
import { getThemeValue } from '@tablecheck/tablekit-utils';
import { ComponentType, cloneElement } from 'react';
import ReactSelect, {
  components as reactSelectComponents,
  mergeStyles,
  OptionTypeBase,
  GroupTypeBase,
  SelectComponentsConfig,
  Theme as ReactSelectTheme,
  Props as ReactSelectProps,
  ControlProps,
  ValueType,
  ActionMeta
} from 'react-select';
import * as animatedComponents from 'react-select/animated';

import { baseStyles } from './baseStyles';
import * as defaultComponents from './components';
import { IconContainer } from './styled';
import { selectThemeNamespace, selectClassicTheme } from './themes';
import { SelectProps } from './types';

const buildCachedComponents = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  components: SelectComponentsConfig<OptionType, IsMulti, GroupType> = {}
) => ({
  ...animatedComponents,
  ...defaultComponents,
  ...components
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-interface
interface SelectState<OptionType extends OptionTypeBase> {}

export function createSelect<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>,
  WrappedComponentType extends ComponentType<
    ReactSelectProps<OptionType, IsMulti, GroupType>
  > = ComponentType<ReactSelectProps<OptionType, IsMulti, GroupType>>
  // eslint-disable-next-line @typescript-eslint/naming-convention
>(WrappedComponent: WrappedComponentType): typeof ReactSelect {
  const Select = (
    props: SelectProps<OptionType, IsMulti, GroupType>
  ): JSX.Element => {
    const {
      options,
      placeholder,
      iconBefore,
      isDisabled,
      components,
      isInvalid,
      isWarning,
      isSuccess,
      size = InputSize.Regular,
      styles,
      onChange,
      shouldNotChangeDropdownIcon
    } = props;
    const tablekitTheme = useTheme();

    const builtComponents = buildCachedComponents<
      OptionType,
      IsMulti,
      GroupType
    >(components);
    if (!shouldNotChangeDropdownIcon && !isDisabled && isInvalid) {
      builtComponents.DropdownIndicator = builtComponents.ErrorIndicator;
    } else if (!shouldNotChangeDropdownIcon && !isDisabled && isWarning) {
      builtComponents.DropdownIndicator = builtComponents.WarningIndicator;
    } else if (!shouldNotChangeDropdownIcon && !isDisabled && isSuccess) {
      builtComponents.DropdownIndicator = builtComponents.SuccessIndicator;
    }

    if (iconBefore) {
      const { Control } = reactSelectComponents;

      builtComponents.Control = ({
        children,
        ...innerProps
      }: ControlProps<OptionType, IsMulti, GroupType>) => (
        // cant use reactSelectComponents.Control directly here as it will refer to the local
        // components instead of reactSelectComponents in build
        <Control {...innerProps}>
          <IconContainer size={size}>
            {cloneElement(iconBefore, { size })}
          </IconContainer>
          {children}
        </Control>
      );
    }

    const handleChange = (
      value: ValueType<OptionType, IsMulti>,
      actionMeta: ActionMeta<OptionType>
    ) => {
      if (onChange) {
        onChange(value, {
          ...actionMeta,
          name: props.name
        });
      }
    };

    // Used to merge our theme with the ReactSelect theme
    const getTheme = (reactSelectTheme: ReactSelectTheme) => {
      const safeTheme = {
        theme: {
          ...tablekitTheme,
          colors: tablekitTheme.colors || CLASSIC_COLORS
        }
      };
      return {
        ...reactSelectTheme,
        ...tablekitTheme,
        borderRadius: BORDER_RADIUS,
        spacing: {
          ...(reactSelectTheme.spacing || {}),
          controlHeight: FieldHeight.Small
        },
        colors: {
          ...safeTheme.theme.colors,
          ...tablekitTheme.colors,
          danger: tablekitTheme.colors.danger,
          dangerLight: tablekitTheme.colors.danger,
          neutral0: getThemeValue(
            `${selectThemeNamespace}.common.backgroundColor`,
            selectClassicTheme?.common?.backgroundColor
          )(safeTheme),
          primary: tablekitTheme.colors.primary,
          primary75: tablekitTheme.colors.primary,
          primary50: getThemeValue(
            `${selectThemeNamespace}.option.active.backgroundColor`,
            selectClassicTheme?.option?.active?.backgroundColor
          )(safeTheme),
          primary25: tablekitTheme.colors.primary2
        }
      };
    };

    const tablekitStyles = baseStyles<OptionType, IsMulti, GroupType>(
      tablekitTheme,
      isInvalid,
      isWarning,
      isSuccess
    );

    return (
      // TODO weird mismatch going on here in builtComponents
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <WrappedComponent
        {...props}
        options={options}
        placeholder={placeholder}
        isDisabled={isDisabled}
        theme={getTheme}
        components={builtComponents}
        onChange={handleChange}
        styles={
          styles
            ? mergeStyles<OptionType, IsMulti, GroupType>(
                tablekitStyles,
                styles
              )
            : tablekitStyles
        }
      />
    );
  };
  return Select as unknown as typeof ReactSelect;
}
