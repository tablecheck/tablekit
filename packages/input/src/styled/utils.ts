import { css, SerializedStyles } from '@emotion/react';
import {
  FieldHeight,
  Spacing,
  BORDER_RADIUS
} from '@tablecheck/tablekit-theme';
import { getThemeValue, ifRtl, variant } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import { inputClassicTheme, inputThemeNamespace } from '../themes';
import {
  Appearance,
  InputProps,
  InputShape,
  InputFieldProps,
  InputSize
} from '../types';

export const getBorderRadius = (
  fieldHeight: FieldHeight,
  shape: InputShape = InputShape.Rounded
): string | number => {
  switch (shape) {
    case InputShape.Circular:
      return fieldHeight;
    case InputShape.Sharp:
      return 0;
    default:
      return `${BORDER_RADIUS}px`;
  }
};

export function getContext(
  props: Pick<InputProps, 'appearance'> & ThemeOnlyProps
): SerializedStyles {
  const { appearance } = props;
  if (appearance === Appearance.Disabled) {
    const borderColor = getThemeValue(
      `${inputThemeNamespace}.input.disabled.borderColor`,
      inputClassicTheme?.input?.disabled?.borderColor
    )(props);
    const textColor = getThemeValue(
      `${inputThemeNamespace}.input.disabled.textColor`,
      inputClassicTheme?.input?.disabled?.textColor
    )(props);
    return css`
      box-shadow: inset 0px 0px 0px 1px ${borderColor};
      color: ${textColor};
      opacity: 0.5;
      cursor: not-allowed;
    `;
  }

  let borderColor;
  switch (appearance) {
    case Appearance.Invalid:
      borderColor = props.theme.colors.danger;
      break;
    case Appearance.Success:
      borderColor = props.theme.colors.success;
      break;
    case Appearance.Warning:
      borderColor = props.theme.colors.warning;
      break;
    default:
      borderColor = getThemeValue(
        `${inputThemeNamespace}.input.default.borderColor`,
        inputClassicTheme?.input?.default?.borderColor
      )(props);
  }

  const textColor = getThemeValue(
    `${inputThemeNamespace}.input.default.textColor`,
    inputClassicTheme?.input?.default?.textColor
  )(props);

  const backgroundColor = getThemeValue(
    `${inputThemeNamespace}.input.default.backgroundColor`,
    inputClassicTheme?.input?.default?.backgroundColor
  )(props);

  return css`
    background-color: ${backgroundColor};
    color: ${textColor};
    box-shadow: inset 0px 0px 0px 1px ${borderColor};

    &:hover {
      box-shadow: inset 0px 0px 0px 2px
        ${(({ theme }) => theme.colors.primary2)(props)};
    }

    &:focus {
      box-shadow: inset 0px 0px 0px 2px
        ${(({ theme }) => theme.colors.secondary)(props)};
      outline: none;
    }
  `;
}

export const getContainerShape = variant<
  InputSize,
  SerializedStyles,
  Pick<InputFieldProps, 'fieldSize' | 'shape'>
>({
  prop: 'fieldSize',
  default: InputSize.Regular,
  variants: {
    [InputSize.Large]: ({ shape }) => css`
      height: ${FieldHeight.Large};
      border-radius: ${getBorderRadius(FieldHeight.Large, shape)};
    `,
    [InputSize.Regular]: ({ shape }) => css`
      height: ${FieldHeight.Regular};
      border-radius: ${getBorderRadius(FieldHeight.Regular, shape)};
    `,
    [InputSize.Regular2]: ({ shape }) => css`
      height: ${FieldHeight.Regular2};
      border-radius: ${getBorderRadius(FieldHeight.Regular2, shape)};
    `,
    [InputSize.Small]: ({ shape }) => css`
      height: ${FieldHeight.Small};
      border-radius: ${getBorderRadius(FieldHeight.Small, shape)};
    `
  }
});

export const getPadding = variant<InputSize, SerializedStyles, InputFieldProps>(
  {
    prop: 'fieldSize',
    default: InputSize.Regular,
    variants: {
      [InputSize.Large]: ({ hasIconAfter, hasIconBefore, ...props }) => css`
        padding-right: ${hasIconAfter ? FieldHeight.Large : '18px'};
        padding-left: ${hasIconBefore ? FieldHeight.Large : '18px'};
        background-position: right ${FieldHeight.Large} top 50% !important;

        &:hover,
        &:focus {
          padding-right: ${hasIconAfter ? FieldHeight.Large : '18px'};
          padding-left: ${hasIconBefore ? FieldHeight.Large : '18px'};
          background-position: right ${FieldHeight.Large} top 50% !important;
        }

        & ~ span {
          left: auto !important;
          right: auto !important;
          ${ifRtl('left', 'right')(props)}: ${hasIconAfter
            ? FieldHeight.Large
            : '18px'} !important;
        }
      `,
      [InputSize.Regular]: ({ hasIconAfter, hasIconBefore, ...props }) => css`
        padding-right: ${hasIconAfter ? FieldHeight.Regular : Spacing.L3};
        padding-left: ${hasIconBefore ? FieldHeight.Regular : Spacing.L3};
        background-position: right ${FieldHeight.Regular} top 50% !important;

        &:hover,
        &:focus {
          padding-right: ${hasIconAfter ? FieldHeight.Regular : Spacing.L3};
          padding-left: ${hasIconBefore ? FieldHeight.Regular : Spacing.L3};
          background-position: right ${FieldHeight.Regular} top 50% !important;
        }

        & ~ span {
          left: auto !important;
          right: auto !important;
          ${ifRtl('left', 'right')(props)}: ${hasIconAfter
            ? FieldHeight.Regular
            : Spacing.L3} !important;
        }
      `,
      [InputSize.Regular2]: ({ hasIconAfter, hasIconBefore, ...props }) => css`
        padding-right: ${hasIconAfter ? FieldHeight.Regular2 : Spacing.L3};
        padding-left: ${hasIconBefore ? FieldHeight.Regular2 : Spacing.L3};
        background-position: right ${FieldHeight.Regular2} top 50% !important;

        &:hover,
        &:focus {
          padding-right: ${hasIconAfter ? FieldHeight.Regular2 : Spacing.L3};
          padding-left: ${hasIconBefore ? FieldHeight.Regular2 : Spacing.L3};
          background-position: right ${FieldHeight.Regular2} top 50% !important;
        }

        & ~ span {
          left: auto !important;
          right: auto !important;
          ${ifRtl('left', 'right')(props)}: ${hasIconAfter
            ? FieldHeight.Regular2
            : Spacing.L3} !important;
        }
      `,
      [InputSize.Small]: ({ hasIconAfter, hasIconBefore, ...props }) => css`
        padding-right: ${hasIconAfter ? FieldHeight.Small : '10px'};
        padding-left: ${hasIconBefore ? FieldHeight.Small : '10px'};
        background-position: right ${FieldHeight.Small} top 50% !important;

        &:hover,
        &:focus {
          padding-right: ${hasIconAfter ? FieldHeight.Small : '10px'};
          padding-left: ${hasIconBefore ? FieldHeight.Small : '10px'};
          background-position: right ${FieldHeight.Small} top 50% !important;
        }

        & ~ span {
          left: auto !important;
          right: auto !important;
          ${ifRtl('left', 'right')(props)}: ${hasIconAfter
            ? FieldHeight.Small
            : '10px'} !important;
        }
      `
    }
  }
);
