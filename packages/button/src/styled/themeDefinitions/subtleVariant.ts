import { css, SerializedStyles } from '@emotion/react';

import { resolveColor, VariantProps } from './shared';

export const subtleVariant = (props: VariantProps): SerializedStyles => css`
  &,
  &:focus {
    color: ${resolveColor('secondary', props)};
    background: none;
    border-color: transparent;
  }

  &:hover,
  &:hover:focus {
    background: ${resolveColor('hoverTransparent', props)};
  }

  &:active,
  &:active:focus {
    background: ${resolveColor('activeTransparent', props)};
  }
`;
