import { css } from '@emotion/react';

/**
 * Global focus style
 */

export const focus = css`
  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus, hsla(219, 78.5%, 52.5%, 1));
  }
`;
