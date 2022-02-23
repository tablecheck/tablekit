import { css, SerializedStyles } from '@emotion/react';
import { BORDER_RADIUS, FieldHeight } from '@tablecheck/tablekit-theme';
import { variant } from '@tablecheck/tablekit-utils';
import { InputGroupProps } from 'InputGroup';

import { InputShape, InputSize } from './types';

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

export const getContainerShape = variant<
  InputSize,
  SerializedStyles,
  Pick<InputGroupProps, 'size' | 'shape'>
>({
  prop: 'size',
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

export const getContainerSize = variant<
  InputSize,
  SerializedStyles,
  Pick<InputGroupProps, 'size'>
>({
  prop: 'size',
  default: InputSize.Regular,
  variants: {
    [InputSize.Large]: () => css`
      height: ${FieldHeight.Large};
    `,
    [InputSize.Regular]: () => css`
      height: ${FieldHeight.Regular};
    `,
    [InputSize.Regular2]: () => css`
      height: ${FieldHeight.Regular2};
    `,
    [InputSize.Small]: () => css`
      height: ${FieldHeight.Small};
    `
  }
});
