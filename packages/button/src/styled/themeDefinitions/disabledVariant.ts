import { css, SerializedStyles } from '@emotion/react';

import { VariantProps } from './shared';

export const disabledVariant = (props: VariantProps): SerializedStyles => css`
  background: ${props.theme.colors.disabledBackground};
  color: ${props.theme.colors.textDisabled};
`;
