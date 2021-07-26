import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldHeight, Size, Spacing } from '@tablecheck/tablekit-theme';
import {
  getThemeValue,
  margin,
  mediaQuery,
  variant
} from '@tablecheck/tablekit-utils';

import { itemClassicTheme, itemThemeNamespace } from '../themes';
import {
  ItemBorderPosition,
  ItemContainerProps,
  ItemInteractionState
} from '../types';

export const borderWidth = '2px';
export const focusOutlineRadius = '6px';

// needs to be here to prevent circular dependencies
const BeforeAfterBase = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  // All color must be in below interactionStates to correctly style
  // NavLinks using useInteractionStateAsClass
`;

export const ElementBefore = styled(BeforeAfterBase)<
  Pick<ItemContainerProps<'span'>, 'hasOnlyIcon' | 'size'>
>`
  ${({ hasOnlyIcon, theme }) =>
    hasOnlyIcon ? '' : margin({ right: Spacing.L2 })({ theme })}
`;

export const ElementAfter = styled(BeforeAfterBase)<
  Pick<ItemContainerProps<'span'>, 'hasOnlyIcon' | 'size'>
>`
  ${({ hasOnlyIcon, theme }) =>
    hasOnlyIcon ? '' : margin({ left: Spacing.L2 })({ theme })}
`;

export const interactionStates = variant<
  ItemInteractionState,
  SerializedStyles,
  ItemContainerProps<'span'>
>({
  prop: 'interactionState',
  key: `${itemThemeNamespace}.interactionStates`,
  default: ItemInteractionState.Default,
  variants: {
    default: (props) => css`
      display: flex;
      background-color: ${getThemeValue(
        `${itemThemeNamespace}.default.background`,
        itemClassicTheme.default.background
      )(props)};
      color: ${getThemeValue(
        `${itemThemeNamespace}.default.textColor`,
        itemClassicTheme.default.textColor
      )(props)};
      & ${ElementBefore}, & ${ElementAfter} {
        color: ${getThemeValue(
          `${itemThemeNamespace}.default.beforeAfterColor`,
          itemClassicTheme.default.beforeAfterColor
        )(props)};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${props.theme.colors.focusOutline} inset;
        border-radius: ${focusOutlineRadius};
      }
      &:hover {
        background-color: ${getThemeValue(
          `${itemThemeNamespace}.default.hoverBackground`,
          itemClassicTheme.default.hoverBackground
        )(props)};
        color: ${getThemeValue(
          `${itemThemeNamespace}.default.hoverTextColor`,
          itemClassicTheme.default.hoverTextColor
        )(props)};
        & ${ElementBefore}, & ${ElementAfter} {
          color: ${getThemeValue(
            `${itemThemeNamespace}.default.beforeAfterColor`,
            itemClassicTheme.default.beforeAfterColor
          )(props)};
        }
      }
    `,
    hidden: css`
      display: none;
    `,
    selected: (upperProps) => css`
      display: flex;
      background-color: ${getThemeValue(
        `${itemThemeNamespace}.selected.background`,
        itemClassicTheme.selected.background
      )(upperProps)};
      color: ${getThemeValue(
        `${itemThemeNamespace}.selected.textColor`,
        itemClassicTheme.selected.textColor
      )(upperProps)};
      & ${ElementBefore}, & ${ElementAfter} {
        color: ${getThemeValue(
          `${itemThemeNamespace}.selected.beforeAfterColor`,
          itemClassicTheme.selected.beforeAfterColor
        )(upperProps)};
      }
      &:focus {
        box-shadow: 0 0 0 2px ${upperProps.theme.colors.focusOutline} inset;
        border-radius: ${focusOutlineRadius};
      }

      ${variant<
        ItemBorderPosition,
        SerializedStyles,
        ItemContainerProps<'span'>
      >({
        prop: 'borderPosition',
        default: ItemBorderPosition.Left,
        variants: {
          left: (props) => css`
            box-shadow: inset ${borderWidth} 0px
              ${getThemeValue(
                `${itemThemeNamespace}.selected.borderColor`,
                itemClassicTheme.selected.borderColor
              )(props)};
          `,
          right: (props) => css`
            box-shadow: inset -${borderWidth} 0px ${getThemeValue(`${itemThemeNamespace}.selected.borderColor`, itemClassicTheme.selected.borderColor)(props)};
          `,
          top: (props) => css`
            box-shadow: inset 0px ${borderWidth}
              ${getThemeValue(
                `${itemThemeNamespace}.selected.borderColor`,
                itemClassicTheme.selected.borderColor
              )(props)};
          `,
          bottom: (props) => css`
            box-shadow: inset 0px -${borderWidth} ${getThemeValue(`${itemThemeNamespace}.selected.borderColor`, itemClassicTheme.selected.borderColor)(props)};
          `
        }
      })(upperProps)};
    `,
    disabled: (props) => css`
      display: flex;
      opacity: 0.5;
      color: ${getThemeValue(
        `${itemThemeNamespace}.disabled.textColor`,
        itemClassicTheme.disabled.textColor
      )(props)};
      & ${ElementBefore}, & ${ElementAfter} {
        color: ${getThemeValue(
          `${itemThemeNamespace}.disabled.beforeAfterColor`,
          itemClassicTheme.disabled.beforeAfterColor
        )(props)};
      }
      cursor: not-allowed;
      &:hover {
        color: ${getThemeValue(
          `${itemThemeNamespace}.disabled.textColor`,
          itemClassicTheme.disabled.textColor
        )(props)};
        & ${ElementBefore}, & ${ElementAfter} {
          color: ${getThemeValue(
            `${itemThemeNamespace}.disabled.beforeAfterColor`,
            itemClassicTheme.disabled.beforeAfterColor
          )(props)};
        }
      }
    `
  }
});

export const getSizeStyle = variant<
  Size.Regular | Size.Large,
  SerializedStyles,
  ItemContainerProps<'span'>
>({
  prop: 'size',
  default: Size.Regular,
  variants: {
    [Size.Regular]: (props) => css`
      height: ${mediaQuery<
        ItemContainerProps<'span'>['height'],
        ItemContainerProps<'span'>
      >(
        'height',
        (value) => value || FieldHeight.Regular
      )(props)};
      min-height: ${FieldHeight.Regular};
      padding: 0 ${Spacing.L3};
    `,
    [Size.Large]: (props) => css`
      height: ${mediaQuery<
        ItemContainerProps<'span'>['height'],
        ItemContainerProps<'span'>
      >(
        'height',
        (value) => value || FieldHeight.Large
      )(props)};
      min-height: ${FieldHeight.Large};
      padding: 0 ${Spacing.L4};
    `
  }
});
