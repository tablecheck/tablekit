/* eslint max-lines: ["error", 400] */
import { ChevronDown20, Close16 } from '@carbon/icons-react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Spinner } from '@tablecheck/tablekit-spinner';
import { Spacing } from '@tablecheck/tablekit-theme';
import * as React from 'react';
import {
  SelectComponentsConfig,
  components as reactSelectComponents,
  GroupBase,
  StylesConfig
} from 'react-select';

import {
  BorderRadii,
  BorderSide,
  getBorderColor,
  getBorderRadius
} from 'utils/css/border';

import { baseStylesObject as menuStylesObject } from './Menu';
import {
  baseStylesObject as menuItemStylesObject,
  stateStylesObjects as menuItemStateStylesObjects
} from './MenuItem';
import { baseStylesObject as menuListStylesObject } from './MenuList';

export interface Options {
  isInvalid?: boolean | undefined;
  dataTestId: string;
  borderSides?: undefined | BorderSide[];
  isMulti?: boolean;
  borderRadii?: BorderRadii;
  icon?: React.ReactNode;
  isCompact?: boolean;
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
  isCompact
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
  if (cachedIcon.current !== unsafeIcon && CONFIG.useDevTools)
    console.warn(
      `useReactSelectConfig ([data-testid="${dataTestId}"]) was passed a different icon between renders. Ensure that the icon prop is created outside of the component render.`
    );
  const icon = cachedIcon.current;
  const components = React.useMemo<
    SelectComponentsConfig<OptionType, IsMulti, GroupBase<OptionType>>
  >(
    () => ({
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
      DropdownIndicator: () => <ChevronDown20 />,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MultiValueRemove: (props) => (
        <reactSelectComponents.MultiValueRemove {...props}>
          <Close16 />
        </reactSelectComponents.MultiValueRemove>
      ), // eslint-disable-next-line @typescript-eslint/naming-convention
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
      LoadingIndicator: () => <Spinner color="var(--text-subtle)" />
    }),
    [dataTestId, isInvalid, icon]
  );
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
          theme.isRtl,
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
          borderRadius: getBorderRadius(theme.isRtl, borderRadii),
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
          gridGap: Spacing.L2,
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
                  isFocused: true,
                  isInvalid
                })
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
          stateStyles = menuItemStateStylesObjects.selected;
        } else if (isFocused) {
          stateStyles = menuItemStateStylesObjects.focus;
        }
        return {
          ...styles,
          ...menuItemStylesObject,
          ...stateStyles,
          cursor: 'pointer',
          ':active': isSelected ? {} : menuItemStateStylesObjects.active
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
      })
    }),
    [borderRadii, borderSides, icon, isCompact, isInvalid, isMulti, theme.isRtl]
  );
  return {
    components,
    styles: stylesObject
  };
}
