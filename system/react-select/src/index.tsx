// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { ChevronDown, Close } from '@carbon/icons-react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { menu, menuList, menuItem } from '@tablecheck/tablekit-core';
import {
  Spinner,
  Checkbox,
  getConfigDefault,
  getCarbonIconSize
} from '@tablecheck/tablekit-react';
import * as React from 'react';
import {
  SelectComponentsConfig,
  components as reactSelectComponents,
  GroupBase,
  StylesConfig,
  ClearIndicatorProps
} from 'react-select';

import {
  getBorderColor,
  getBorderRadius,
  BorderRadii,
  BorderSide
} from './border';

// this shouldn't be necessary as it's done inside the tablekit-react package which should merge when imported
// but inside the lerna monorepo the merging doesn't happen and throws typescript errors. Most likely due to how
// node_modules is linking files
declare module '@emotion/react' {
  interface Theme {
    isRtl: boolean;
    isDark: boolean;
  }
}

const VALUE_GRID_GAP = 4;

const menuStylesObject = menu.fullStylesObject;
const {
  fullStylesObject: menuItemStylesObject,
  stateStylesObjects: menuItemStateStylesObjects
} = menuItem;
const { fullStylesObject: menuListStylesObject } = menuList;

export interface Options {
  isInvalid?: boolean | undefined;
  dataTestId: string;
  borderSides?: undefined | BorderSide[];
  isMulti?: boolean;
  borderRadii?: BorderRadii;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  isCompact?: boolean;
  isClearable?: boolean;
  hideSelectedOptions?: boolean;
  useVerticalMultiValues?: boolean;
  /**
   * This is used for storybook only
   * @deprecated
   */
  isInternalFocused?: boolean;
}

function getVerticalPadding(size: NonNullable<Options['size']>) {
  switch (size) {
    case 'small':
      return 3;
    case 'large':
      return 8;
    default:
      return 4;
  }
}

function getMinHeight(size: NonNullable<Options['size']>) {
  switch (size) {
    case 'small':
      return 36;
    case 'large':
      return 48;
    default:
      return 40;
  }
}

function getVerticalValueContainerStyles({
  isMulti,
  isFocused,
  useVerticalMultiValues
}: {
  isFocused: boolean;
  isMulti: boolean;
  useVerticalMultiValues: boolean;
}) {
  if (!isMulti || !useVerticalMultiValues) return {};
  if (isFocused) return {};
  return {
    '[data-testid="Value Container"]': {
      marginBottom: -1 * VALUE_GRID_GAP
    },
    '[data-testid="Value Container"] > div:last-child, [data-testid="Value Container"] > input:last-child':
      { height: 0 }
  };
}

function getControlBorderColor({
  isFocused,
  isDisabled,
  isInvalid
}: Partial<{
  isFocused: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
}>): string {
  if (isDisabled) return 'var(--border)';
  if (isInvalid) return 'var(--error)';
  if (isFocused) return 'var(--focus)';
  return 'var(--border)';
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--tk-react-select-icon-wrapper-height);
  svg {
    color: currentColor;
  }
`;

export function useReactSelectConfig<
  OptionType,
  IsMulti extends boolean = false
>({
  isInvalid,
  dataTestId,
  borderSides,
  isMulti = false,
  useVerticalMultiValues = false,
  borderRadii = BorderRadii.All,
  icon: unsafeIcon,
  size = getConfigDefault('controlSize'),
  isCompact,
  isClearable,
  isInternalFocused,
  hideSelectedOptions = true
}: Options): {
  components: SelectComponentsConfig<
    OptionType,
    IsMulti,
    GroupBase<OptionType>
  >;
  styles: StylesConfig<OptionType, IsMulti>;
} {
  const theme = useTheme();
  const cachedIcon = React.useRef<React.ReactNode>();
  if (!cachedIcon.current) cachedIcon.current = unsafeIcon;
  if (
    cachedIcon.current !== unsafeIcon &&
    process.env.NODE_ENV !== 'production'
  )
    console.warn(
      `useReactSelectConfig ([data-testid="${dataTestId}"]) was passed a different icon between renders. Ensure that the icon prop is created outside of the component render.`
    );
  const icon = cachedIcon.current;
  const components = React.useMemo<
    SelectComponentsConfig<OptionType, IsMulti, GroupBase<OptionType>>
  >(() => {
    const selectComponents: SelectComponentsConfig<
      OptionType,
      IsMulti,
      GroupBase<OptionType>
    > = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Control: ({ innerProps, children, ...props }) => (
        <reactSelectComponents.Control
          {...props}
          innerProps={
            {
              ...innerProps,
              'data-testid': 'Select Control',
              'data-validation': isInvalid ? 'invalid' : 'valid'
            } as typeof innerProps
          }
        >
          <div className="tk-select-positioner">
            {icon ? <IconWrapper>{icon}</IconWrapper> : null}
            {children}
          </div>
        </reactSelectComponents.Control>
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ValueContainer: ({ innerProps, children, ...props }) => (
        <reactSelectComponents.ValueContainer
          {...props}
          innerProps={
            {
              ...innerProps,
              'data-testid': 'Value Container'
            } as typeof innerProps
          }
        >
          {children}
        </reactSelectComponents.ValueContainer>
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      SelectContainer: (props) => {
        const { children, className, getStyles, innerProps, isDisabled } =
          props;
        return (
          <div
            css={css(getStyles('container', props))}
            className={className}
            {...innerProps}
            data-testid={dataTestId}
            aria-disabled={isDisabled}
          >
            <div
              css={css`
                position: relative;
              `}
            >
              {children}
            </div>
          </div>
        );
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      IndicatorSeparator: () => null,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      DropdownIndicator: ({ getValue }) => {
        if (!isMulti && isClearable && getValue().length) return null;
        return (
          <IconWrapper>
            <ChevronDown size={getConfigDefault('iconSize')} />
          </IconWrapper>
        );
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ClearIndicator: (
        props: ClearIndicatorProps<OptionType, IsMulti, GroupBase<OptionType>>
      ) => {
        const {
          innerProps: { ref, ...restInnerProps }
        } = props;
        if (isMulti) return null;
        return (
          <IconWrapper {...restInnerProps} ref={ref} data-testid="Clear">
            <Close size={getConfigDefault('iconSize')} />
          </IconWrapper>
        );
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MultiValueRemove: (props) => (
        <reactSelectComponents.MultiValueRemove {...props}>
          <Close size={getCarbonIconSize('small')} />
        </reactSelectComponents.MultiValueRemove>
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MultiValue: ({ innerProps, removeProps, ...props }) => (
        <reactSelectComponents.MultiValue
          {...{
            ...props,
            removeProps,
            innerProps: {
              ...innerProps,
              // this allows us to remove a multi value element by clicking anywhere
              // on the tag rather than just the small 'x' button
              onClick: removeProps.onClick
            }
          }}
        />
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      LoadingIndicator: () => <Spinner aria-busy color="var(--text-subtle)" />,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      GroupHeading: (props) => {
        const { children } = props;

        return (
          <reactSelectComponents.GroupHeading {...props}>
            {children}
          </reactSelectComponents.GroupHeading>
        );
      }
    };

    if (!hideSelectedOptions) {
      selectComponents.Option = function Option(props) {
        const { isSelected, children } = props;
        return (
          <reactSelectComponents.Option {...props}>
            <Checkbox checked={isSelected} readOnly />
            {children}
          </reactSelectComponents.Option>
        );
      };
    }

    return selectComponents;
  }, [hideSelectedOptions, isInvalid, icon, dataTestId, isMulti, isClearable]);
  const stylesObject = React.useMemo<StylesConfig<OptionType, IsMulti>>(
    () => ({
      container: (styles, { isDisabled, isRtl }) => ({
        ...styles,
        display: 'grid !important',
        justifyContent: 'stretch',
        height: 'auto',
        width: 'auto',
        minWidth: isCompact ? 'auto' : 180,
        '--is-disabled': isDisabled,
        '--is-rtl': isRtl,
        pointerEvents: isDisabled ? 'none' : 'auto'
      }),
      control: (styles, { isFocused, isDisabled }) => {
        const isLargeBorder =
          !isDisabled && (isFocused || isInternalFocused || isInvalid);
        const borderColor = getControlBorderColor({
          isFocused: isInternalFocused || isFocused,
          isDisabled,
          isInvalid
        });
        const borderColorProps = getBorderColor(
          !!theme.isRtl,
          !(isFocused || isInternalFocused) && !isInvalid && borderSides
            ? borderSides
            : [
                BorderSide.Right,
                BorderSide.Bottom,
                BorderSide.Top,
                BorderSide.Left
              ],
          borderColor
        );
        const boxShadow = isLargeBorder ? `0 0 0 1px ${borderColor}` : '';
        const multiValueVariables = isDisabled
          ? {
              '--tk-select-multi-value': 'var(--surface-disabled)',
              '--tk-select-multi-value-hover': 'var(--surface-disabled)',
              '--tk-select-multi-value-active': 'var(--surface-disabled)'
            }
          : {
              '--tk-select-multi-value': 'var(--surface)',
              '--tk-select-multi-value-hover': 'var(--surface-hover)',
              '--tk-select-multi-value-active': 'var(--surface-active)'
            };

        return {
          ...styles,
          ...borderColorProps,
          ...multiValueVariables,
          ...getVerticalValueContainerStyles({
            isMulti,
            isFocused: isInternalFocused || isFocused,
            useVerticalMultiValues
          }),
          '--tk-react-select-icon-wrapper-height': `${32}px`,
          borderRadius: getBorderRadius(!!theme.isRtl, borderRadii),
          borderWidth: 1,
          padding: `${getVerticalPadding(size) - 1}px 11px`,
          minHeight: getMinHeight(size),
          display: 'flex',
          alignItems: 'center',
          backgroundColor: isDisabled
            ? 'var(--surface-disabled)'
            : 'var(--surface)',
          color: isDisabled ? 'var(--text-disabled)' : 'var(--text)',
          boxShadow,
          '& > .tk-select-positioner': {
            display: 'grid',
            gridTemplateAreas: icon
              ? '"icon input indicators"'
              : '"input indicators"',
            gridTemplateColumns: icon
              ? 'min-content 1fr min-content'
              : '1fr min-content',
            minHeight: 'var(--tk-react-select-icon-wrapper-height)',
            gap: 'var(--spacing-l2)',
            alignItems: isMulti ? 'flex-start' : 'center',
            width: '100%'
          },
          outline: 'none',
          transitionProperty: 'border-color, box-shadow',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
          ':focus': {
            borderColor: getControlBorderColor({ isFocused: true, isInvalid })
          },
          ':hover':
            isDisabled || isFocused || isInternalFocused
              ? borderColorProps
              : {
                  boxShadow,
                  ...borderColorProps,
                  borderColor: getControlBorderColor({
                    isFocused: false,
                    isInvalid
                  }),
                  cursor: 'pointer',
                  'div:last-child svg': {
                    color: 'var(--text-subtle)'
                  }
                }
        };
      },
      valueContainer: (containerStyles) => {
        const verticalStyles: React.CSSProperties =
          isMulti && useVerticalMultiValues
            ? { flexDirection: 'column', alignItems: 'flex-start' }
            : {};

        return {
          ...containerStyles,
          ...verticalStyles,
          padding: 0,
          gap: VALUE_GRID_GAP,
          gridArea: 'input',
          minHeight: 'var(--tk-react-select-icon-wrapper-height)'
        };
      },
      indicatorsContainer: (containerStyles) => ({
        ...containerStyles,
        gridArea: 'indicators',
        height: 'var(--tk-react-select-icon-wrapper-height)'
      }),
      input: (styles) => ({
        ...styles,
        margin: 0,
        padding: 0,
        color: 'var(--text)'
      }),
      placeholder: (styles) => ({
        ...styles,
        font: 'var(--body-1)',
        color: 'var(--text-placeholder)',
        alignSelf: 'center'
      }),
      menu: (styles) => ({
        ...styles,
        ...menuStylesObject
      }),
      menuList: (styles, { maxHeight }) => ({
        ...styles,
        ...menuListStylesObject,
        maxHeight: `${maxHeight}px !important`
      }),
      option: (styles, { isFocused, isSelected }) => {
        let stateStyles = {};
        if (isSelected) {
          stateStyles = hideSelectedOptions
            ? menuItemStateStylesObjects.selected
            : { color: 'var(--text)', background: 'var(--surface)' };
        } else if (isFocused || isInternalFocused) {
          stateStyles = menuItemStateStylesObjects.focus;
        }
        return {
          ...styles,
          ...menuItemStylesObject,
          ...stateStyles,
          cursor: 'pointer',
          ':active': isSelected ? {} : menuItemStateStylesObjects.active,
          ':hover > input[type="checkbox"]': {
            borderColor: 'var(--text)'
          }
        };
      },
      singleValue: (styles) => ({
        ...styles,
        font: 'var(--body-1)',
        margin: 0,
        color: 'currentcolor'
      }),
      multiValueLabel: (styles) => ({
        ...styles,
        font: 'var(--small)',
        padding: 0,
        paddingLeft: 0,
        margin: 0,
        color: 'currentcolor'
      }),
      multiValueRemove: (styles) => ({
        ...styles,
        borderRadius: 0,
        margin: 0,
        padding: 0,
        ':hover': {
          background: 'transparent',
          color: 'var(--text)'
        }
      }),
      multiValue: (styles) => ({
        ...styles,
        border: `1px solid var(--border)`,
        padding: '6px',
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'max-content min-content',
        gridGap: VALUE_GRID_GAP,
        alignItems: 'center',
        borderRadius: 'var(--border-radius-small)',
        background: 'var(--tk-select-multi-value)',
        cursor: 'pointer',
        ':hover': {
          background: 'var(--tk-select-multi-value-hover)'
        },
        ':active': {
          background: 'var(--tk-select-multi-value-active)'
        }
      }),
      group: (styles) => ({
        ...styles,
        ':not(:last-child)': {
          borderBottom: '1px solid var(--border)'
        }
      }),
      groupHeading: (styles) => ({
        ...styles,
        color: 'var(--text)',
        font: 'var(--small)',
        textTransform: 'unset',
        marginBottom: '4px'
      })
    }),
    [
      isCompact,
      isInternalFocused,
      isInvalid,
      theme.isRtl,
      borderSides,
      isMulti,
      useVerticalMultiValues,
      borderRadii,
      size,
      icon,
      hideSelectedOptions
    ]
  );
  return {
    components,
    styles: stylesObject
  };
}
