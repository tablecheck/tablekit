import { css, SerializedStyles } from '@emotion/react';
import { Spacing } from '@tablecheck/tablekit-theme';

import { VariantProps } from './shared';

export const disabledVerticalVariant = (
  props: VariantProps
): SerializedStyles => css`
  padding: ${Spacing.L3};
  min-width: unset;
  background: transparent;
  color: ${props.theme.colors.textSubtle};
`;
