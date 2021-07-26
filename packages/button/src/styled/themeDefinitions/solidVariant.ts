import { css, SerializedStyles } from '@emotion/react';

import { resolveColor, VariantProps } from './shared';

export const solidVariant = (props: VariantProps): SerializedStyles => css`
  &,
  &:focus {
    color: white;
    background: ${resolveColor('main', props)};
  }

  &:hover,
  &:hover:focus {
    background: ${resolveColor('hover', props)};
  }

  &:active,
  &:active:focus {
    background: ${resolveColor('active', props)};
  }
`;
