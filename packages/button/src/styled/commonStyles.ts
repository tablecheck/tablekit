import { css, SerializedStyles } from '@emotion/react';
import { BORDER_RADIUS, FieldHeight } from '@tablecheck/tablekit-theme';

import { ButtonShape, ButtonSize, DerivedButtonProps } from '../types';
import { isVerticalButton } from '../utils/getButtonProps';

export const transition = css`
  transition: all 120ms ease-in-out;
`;

export const styledComponentOptions = {
  shouldForwardProp: (prop: string): boolean =>
    [
      'fit',
      'isOnlyChild',
      'isInteractive',
      'iconBefore',
      'iconAfter',
      'isLoading',
      'isDisabled'
    ].indexOf(prop) === -1
};

export function getLoadingStyle({
  isLoading
}: {
  isLoading: boolean;
}): SerializedStyles {
  return css`
    transition: opacity 0.3s;
    ${isLoading ? 'opacity: 0;' : undefined}
  `;
}

export const getBorderRadius = (
  fieldHeight: FieldHeight | string,
  shape: ButtonShape = ButtonShape.Rounded
): string | number => {
  switch (shape) {
    case ButtonShape.Circular:
      return fieldHeight;
    case ButtonShape.Sharp:
      return 0;
    default:
      return `${BORDER_RADIUS}px`;
  }
};

export const getOutlineRadius = (
  fieldHeight: FieldHeight | string,
  shape: ButtonShape = ButtonShape.Rounded
): string | number => {
  switch (shape) {
    case ButtonShape.Circular:
      return fieldHeight;
    case ButtonShape.Sharp:
      return 0;
    default:
      return `${BORDER_RADIUS + 2}px`;
  }
};

export const getButtonHeight = (props: DerivedButtonProps): string => {
  const { size, isOnlyChild } = props;
  const isVertical = isVerticalButton(props);
  if (isVertical && !isOnlyChild) return 'auto';
  switch (size) {
    case ButtonSize.Small:
      return FieldHeight.Small;
    case ButtonSize.Regular2:
      return FieldHeight.Regular2;
    case ButtonSize.Large:
      return FieldHeight.Large;
    default:
      return FieldHeight.Regular;
  }
};
