import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { variant, MediaQuery, VariantProps } from '@tablecheck/tablekit-utils';

import { SpinnerSize } from '../types';

const SPINNER_SIZE = {
  REGULAR: Spacing.L4,
  LARGE: Spacing.L5
};

type SizeProps = VariantProps<{ size?: MediaQuery<SpinnerSize> }>;

export const SpinnerContainer = styled.span<SizeProps>`
  display: inline-flex;
  ${variant<SpinnerSize, SerializedStyles, SizeProps>({
    prop: 'size',
    default: SpinnerSize.Regular,
    variants: {
      [SpinnerSize.Large]: css`
        height: ${SPINNER_SIZE.LARGE};
        width: ${SPINNER_SIZE.LARGE};
      `,
      [SpinnerSize.Regular]: css`
        height: ${SPINNER_SIZE.REGULAR};
        width: ${SPINNER_SIZE.REGULAR};
      `
    }
  })};
  border-radius: 10px;
`;

export const SpinnerOuter = styled.span<SizeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${variant<SpinnerSize, SerializedStyles, SizeProps>({
    prop: 'size',
    default: SpinnerSize.Regular,
    variants: {
      [SpinnerSize.Large]: css`
        line-height: ${SPINNER_SIZE.LARGE};
      `,
      [SpinnerSize.Regular]: css`
        line-height: ${SPINNER_SIZE.REGULAR};
      `
    }
  })};
`;
