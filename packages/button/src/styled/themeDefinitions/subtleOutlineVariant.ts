import { css, SerializedStyles } from '@emotion/react';

import { outlineVariant } from './outlineVariant';
import { VariantProps } from './shared';

export const subtleOutlineVariant = (
  props: VariantProps
): SerializedStyles => css`
  ${outlineVariant(props)};
  &,
  &:focus {
    border-width: 1px;
    border-color: ${props.theme.colors.border};
  }
`;
