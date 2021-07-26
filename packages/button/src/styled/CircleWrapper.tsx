import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldHeight } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { variant } from '@tablecheck/tablekit-utils';

import { ButtonShape, ButtonSize, DerivedButtonProps } from '../types';

import { getBorderRadius } from './commonStyles';
import { resolveColor, borderWidth } from './themeDefinitions/shared';

const size = variant<ButtonSize, SerializedStyles, DerivedButtonProps>({
  prop: 'size',
  default: ButtonSize.Regular,
  variants: {
    [ButtonSize.Regular]: css`
      ${Typography.Heading4};
      width: ${FieldHeight.Regular};
      height: ${FieldHeight.Regular};
      border-radius: ${getBorderRadius(
        FieldHeight.Regular,
        ButtonShape.Circular
      )};
    `,
    [ButtonSize.Regular2]: css`
      ${Typography.Heading4};
      width: ${FieldHeight.Regular2};
      height: ${FieldHeight.Regular2};
      border-radius: ${getBorderRadius(
        FieldHeight.Regular2,
        ButtonShape.Circular
      )};
    `,
    [ButtonSize.Small]: css`
      ${Typography.Heading4};
      width: ${FieldHeight.Small};
      height: ${FieldHeight.Small};
      border-radius: ${getBorderRadius(
        FieldHeight.Small,
        ButtonShape.Circular
      )};
    `,
    [ButtonSize.Large]: css`
      ${Typography.Heading3};
      width: ${FieldHeight.Large};
      height: ${FieldHeight.Large};
      border-radius: ${getBorderRadius(
        FieldHeight.Large,
        ButtonShape.Circular
      )};
    `
  }
});

const getAppearanceCss = (
  props: DerivedButtonProps & { theme: Theme }
): SerializedStyles => {
  if (props.disabled) {
    return css`
      background: ${props.theme.colors.disabledBackground};
      color: ${props.theme.colors.textSubtle};
    `;
  }
  return css`
    color: ${resolveColor('main', props)};
    border-color: ${resolveColor('main', props)};
    background: transparent;
  `;
};

export const CircleWrapper = styled('span')`
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  border-color: transparent;
  border-width: ${borderWidth}px;
  border-style: solid;
  width: auto;
  height: auto;
  align-self: center;
  display: inline-flex;
  box-sizing: border-box;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  user-select: none;
  ${({ isLoading }) => (isLoading ? 'opacity: 0;' : undefined)}
  ${size};
  ${getAppearanceCss};
`;
