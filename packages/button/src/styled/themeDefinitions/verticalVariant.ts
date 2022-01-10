import { css, SerializedStyles } from '@emotion/react';
import { Spacing, COLORS } from '@tablecheck/tablekit-theme';

import { CircleWrapper } from '../CircleWrapper';

import { resolveColor, VariantProps } from './shared';

export const verticalVariant = (props: VariantProps): SerializedStyles => css`
  padding: ${Spacing.L3};
  min-width: unset;

  &,
  &:focus {
    color: ${resolveColor('main', props)};
    background: none;
    border-color: transparent;
  }

  &:hover,
  &:hover:focus {
    ${CircleWrapper} {
      background: ${resolveColor('hoverTransparent', props)};
    }
  }

  &:active,
  &:active:focus {
    ${CircleWrapper} {
      background: ${resolveColor('activeTransparent', props)};
      box-shadow: 0 0 4px 0 ${COLORS.GRAY_TRANSLUCENT.L2};
    }
  }
`;
