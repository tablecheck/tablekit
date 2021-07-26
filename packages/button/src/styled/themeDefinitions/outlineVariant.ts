import { css, SerializedStyles } from '@emotion/react';
import { COLORS } from '@tablecheck/tablekit-theme';

import { resolveColor, VariantProps } from './shared';

export const outlineVariant = (props: VariantProps): SerializedStyles => css`
  &,
  &:focus {
    color: ${resolveColor('main', props)};
    border-color: ${resolveColor('main', props)};
    background: transparent;
  }

  &:hover,
  &:hover:focus {
    background: ${resolveColor('hoverTransparent', props)};
  }

  &:active,
  &:active:focus {
    background: ${resolveColor('activeTransparent', props)};
    box-shadow: 0 0 4px 0 ${COLORS.GRAY_TRANSLUCENT.L2};
  }
`;
