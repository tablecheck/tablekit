import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldHeight, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, ifRtl, variant } from '@tablecheck/tablekit-utils';
import { ReactNode } from 'react';

import {
  inputClassicTheme,
  inputThemeNamespace,
  INPUT_WIDTHS
} from '../themes';
import {
  InputProps,
  InputSize,
  InputFieldProps,
  IconElementProps
} from '../types';

import { getContext, getContainerShape, getPadding } from './utils';

export const InputContainer = styled.div<{
  shouldFitContainer: InputProps['shouldFitContainer'];
  width: NonNullable<InputProps['width']>;
}>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: ${({ shouldFitContainer, width }) =>
    shouldFitContainer ? '100%' : INPUT_WIDTHS[width]};
`;

export const InputWrapper = styled.div<{ fieldSize: InputProps['size'] }>`
  position: relative;
  ${getContainerShape};
  width: 100%;
`;

export const InputField = styled.input<InputFieldProps>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  outline: none;
  transition: box-shadow 200ms ease-in-out;

  &,
  &::placeholder {
    ${variant({
      prop: 'fieldSize',
      default: InputSize.Regular,
      variants: {
        [InputSize.Large]: css(Typography.Body1),
        [InputSize.Regular]: css(Typography.Body2)
      }
    })};
    line-height: initial;
  }

  &::placeholder {
    color: ${getThemeValue(
      `${inputThemeNamespace}.input.default.placeholderColor`,
      inputClassicTheme?.input?.default?.placeholderColor
    )};
  }

  ${getPadding};
  ${getContainerShape};
  ${getContext};

  &[type='search'] {
    -webkit-appearance: textfield;
  }

  &[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  @-moz-document url-prefix() {
    &::placeholder {
      line-height: revert;
    }
  }
`;

const IconElement = styled.div<IconElementProps>`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  pointer-events: none;
  color: ${(props) =>
    props.isDisabled
      ? getThemeValue(
          `${inputThemeNamespace}.input.disabled.iconColor`,
          inputClassicTheme?.input?.disabled?.iconColor
        )(props)
      : getThemeValue(
          `${inputThemeNamespace}.input.default.iconColor`,
          inputClassicTheme?.input?.default?.iconColor
        )(props)};
  ${variant({
    prop: 'elementSize',
    default: InputSize.Regular,
    variants: {
      [InputSize.Large]: css`
        height: ${FieldHeight.Large};
        width: ${FieldHeight.Large};
        padding: 0 18px;
      `,
      [InputSize.Regular]: css`
        height: ${FieldHeight.Regular};
        width: ${FieldHeight.Regular};
        padding: 0 ${Spacing.L3};
      `,
      [InputSize.Regular2]: css`
        height: ${FieldHeight.Regular2};
        width: ${FieldHeight.Regular2};
        padding: 0 ${Spacing.L3};
      `,
      [InputSize.Small]: css`
        height: ${FieldHeight.Small};
        width: ${FieldHeight.Small};
        padding: 0 10px;
      `
    }
  })}
`;

export const InputAppendElement = styled(IconElement)<IconElementProps>`
  ${ifRtl('left', 'right')}: 0;
`;

export const InputPrependElement = styled(IconElement)<IconElementProps>`
  ${ifRtl('right', 'left')}: 0;
`;

export const InputMessage = styled.div<{ children: ReactNode }>`
  ${Typography.Body2};
  min-height: ${Typography.Body2.lineHeight};
  color: ${getThemeValue(
    `${inputThemeNamespace}.error.textColor`,
    inputClassicTheme?.error?.textColor
  )};
  margin-top: ${Spacing.L2};
  width: 100%;
`;
