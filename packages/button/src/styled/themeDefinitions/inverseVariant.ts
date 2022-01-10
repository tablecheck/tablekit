import { css, SerializedStyles } from '@emotion/react';

import { resolveColor, VariantProps } from './shared';

export const inverseVariant = (props: VariantProps): SerializedStyles => css`
  &:before {
    opacity: 1;
  }
  &,
  &:focus {
    background: white;
    color: ${resolveColor('main', props)};
    &:before {
      opacity: 1;
    }
  }

  &:hover,
  &:hover:focus {
    &:before {
      background: ${resolveColor('hoverTransparent', props)};
    }
  }

  &:active,
  &:active:focus {
    &:before {
      background: ${resolveColor('activeTransparent', props)};
    }
  }
`;
