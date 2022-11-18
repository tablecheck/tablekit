/* eslint max-lines: ["error", 500] */
import { ChevronDown, Close } from '@carbon/icons-react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  menuStylesObject,
  menuItemStylesObject,
  menuItemStateStylesObjects,
  menuListStylesObject,
  Spinner,
  BorderRadii,
  BorderSide,
  getBorderColor,
  getBorderRadius,
  Checkbox
} from '@tablecheck/tablekit-react';
import * as React from 'react';
import {
  SelectComponentsConfig,
  components as reactSelectComponents,
  GroupBase,
  StylesConfig,
  ClearIndicatorProps
} from 'react-select';

declare module '@emotion/react' {
  export interface Theme {
    isRtl?: boolean;
  }
}

export interface Options {
  isInvalid?: boolean | undefined;
  dataTestId: string;
  borderSides?: undefined | BorderSide[];
  isMulti?: boolean;
  borderRadii?: BorderRadii;
  icon?: React.ReactNode;
  isCompact?: boolean;
  isClearable?: boolean;
  hideSelectedOptions?: boolean;
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
  if (isDisabled) return 'var(--border-transparent)';
  if (isInvalid) return 'var(--error)';
  if (isFocused) return 'var(--border-active)';
  return 'var(--border-transparent)';
}

// this is the calculated internal minimum height without the padding
// we use it to make sure the icons and the chevron are positioned correctly
const INPUT_INTERNAL_HEIGHT = 26;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${INPUT_INTERNAL_HEIGHT}px;
`;

const IndicatorWrapper = styled.div`
  height: 20px;
  svg {
    color: var(--text);
  }
`;

export function useReactSelectConfig<
  OptionType,
  IsMulti extends boolean = false
>({
  isInvalid,
  dataTestId,
  borderSides,
  isMulti,
  borderRadii = BorderRadii.All,
  icon: unsafeIcon,
  isCompact,
  isClearable,
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
          {icon ? <IconWrapper>{icon}</IconWrapper> : null}
          {children}
        </reactSelectComponents.Control>
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      SelectContainer: (props) => {
        const {
          children,
          className,
          cx,
          getStyles,
          innerProps,
          isDisabled: isComponentDisabled,
          isRtl
        } = props;
        return (
          <div
            css={css(getStyles('container', props))}
            className={cx(
              {
                '--is-disabled': isComponentDisabled,
                '--is-rtl': isRtl
              },
              className
            )}
            {...innerProps}
            data-testid={dataTestId}
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
        if (isClearable && getValue().length) return null;
        return (
          <IndicatorWrapper>
            <ChevronDown size={20} />
          </IndicatorWrapper>
        );
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ClearIndicator: (
        props: ClearIndicatorProps<OptionType, IsMulti, GroupBase<OptionType>>
      ) => {
        const {
          innerProps: { ref, ...restInnerProps }
        } = props;
        return (
          <IndicatorWrapper {...restInnerProps} ref={ref} data-testid="Clear">
            <Close size={20} />
          </IndicatorWrapper>
        );
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MultiValueRemove: (props) => (
        <reactSelectComponents.MultiValueRemove {...props}>
          <Close size={16} />
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
      LoadingIndicator: () => <Spinner color="var(--text-subtle)" />,
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
      selectComponents.Option = function (props) {
        const { isSelected, label } = props;
        return (
          <reactSelectComponents.Option {...props}>
            <Checkbox checked={isSelected} readOnly />
            <span>{label}</span>
          </reactSelectComponents.Option>
        );
      };
    }

    return selectComponents;
  }, [dataTestId, isInvalid, icon, isClearable, hideSelectedOptions]);
  const stylesObject = React.useMemo<StylesConfig<OptionType, IsMulti>>(
    () => ({
      container: (styles) => ({
        ...styles,
        display: 'grid !important',
        justifyContent: 'stretch',
        pointerEvents: 'auto',
        height: 'auto',
        width: 'auto',
        minWidth: isCompact ? 'auto' : 180
      }),
      control: (styles, { isFocused, isDisabled }) => {
        const isLargeBorder = !isDisabled && (isFocused || isInvalid);
        const borderColor = getControlBorderColor({
          isFocused,
          isDisabled,
          isInvalid
        });
        const borderColorProps = getBorderColor(
          !!theme.isRtl,
          !isFocused && !isInvalid && borderSides
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
        const verticalPadding = (isCompact ? 7 : 11) - (isMulti ? 1 : 0);
        const multiValueVariables = isDisabled
          ? {
              '--select-multi-value': 'var(--surface-disabled)',
              '--select-multi-value-hover': 'var(--surface-disabled)',
              '--select-multi-value-active': 'var(--surface-disabled)'
            }
          : {
              '--select-multi-value': 'var(--surface)',
              '--select-multi-value-hover': 'var(--surface-hover)',
              '--select-multi-value-active': 'var(--surface-active)'
            };
        return {
          ...styles,
          ...borderColorProps,
          ...multiValueVariables,
          borderRadius: getBorderRadius(!!theme.isRtl, borderRadii),
          borderWidth: 1,
          padding: `${verticalPadding}px 15px`,
          backgroundColor: isDisabled
            ? 'var(--surface-disabled)'
            : 'var(--surface)',
          color: 'var(--text)',
          boxShadow,
          display: 'grid',
          gridTemplateAreas: icon
            ? '"icon input indicators"'
            : '"input indicators"',
          gridTemplateColumns: icon
            ? 'min-content 1fr min-content'
            : '1fr min-content',
          gridGap: 'var(--spacing-l2)',
          alignItems: 'flex-start',
          outline: 'none',
          transitionProperty: 'border-color, box-shadow',
          transitionDuration: '200ms',
          transitionTimingFunction: 'ease-in-out',
          ':hover': isDisabled
            ? {}
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
      valueContainer: (containerStyles) => ({
        ...containerStyles,
        padding: 0,
        gap: 8,
        gridArea: 'input'
      }),
      indicatorsContainer: (containerStyles) => ({
        ...containerStyles,
        gridArea: 'indicators',
        height: INPUT_INTERNAL_HEIGHT
      }),
      input: (styles) => ({ ...styles, margin: 0, padding: 0 }),
      placeholder: (styles) => ({
        ...styles,
        font: 'var(--body-1)',
        color: 'var(--text-placeholder)'
      }),
      menu: (styles) => ({
        ...styles,
        ...menuStylesObject
      }),
      menuList: (styles) => ({
        ...styles,
        ...menuListStylesObject
      }),
      option: (styles, { isFocused, isSelected }) => {
        let stateStyles = {};
        if (isSelected) {
          stateStyles = hideSelectedOptions
            ? menuItemStateStylesObjects.selected
            : { color: 'var(--text)', background: 'var(--surface)' };
        } else if (isFocused) {
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
        border: `1px solid var(--border-transparent)`,
        padding: '3px 5px',
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'max-content min-content',
        gridGap: 4,
        alignItems: 'center',
        borderRadius: 4,
        background: 'var(--select-multi-value)',
        cursor: 'pointer',
        ':hover': {
          background: 'var(--select-multi-value-hover)'
        },
        ':active': {
          background: 'var(--select-multi-value-active)'
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
      borderRadii,
      borderSides,
      icon,
      isCompact,
      isInvalid,
      isMulti,
      theme.isRtl,
      hideSelectedOptions
    ]
  );
  return {
    components,
    styles: stylesObject
  };
}
