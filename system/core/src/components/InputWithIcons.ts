import { css } from '@emotion/react';

import { sharedInputStyles } from './Input';

export type { Props } from './Input';

export const className = 'input-with-icons';

export const baseStyles = css`
  ${sharedInputStyles}
  display: grid;
  grid-template-columns: 8px 16px auto 16px 8px;
  grid-gap: var(--spacing-l2);
  align-items: center;
  cursor: text;
  padding: 0;

  & > :not(input):not(select) {
    z-index: 1;
  }

  & > :not(input):not(select):not(button):not(a) {
    pointer-events: none;
  }
  & > :nth-child(1):not(input):not(select) {
    grid-area: 1/2;
  }
  & > :nth-child(3):not(input):not(select),
  & > :nth-child(2):not(input):not(select) {
    grid-area: 1/4;
  }

  & > input,
  & > select {
    color: currentColor;
    &,
    &[data-pseudo='focus'],
    &:focus {
      outline: none;
    }
    width: var(--width);
    border: none;
    background: transparent;
    grid-area: 1/1/1/6;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
    // the 24 below is 16px width icon + 8px gap
    &:first-child:not(:last-child) {
      padding-left: calc(16px + (24 * var(--rtl-space)));
      padding-right: calc(16px + (24 * var(--ltr-space)));
    }
    &:not(:first-child):last-child {
      padding-left: calc(16px + (24 * var(--ltr-space)));
      padding-right: calc(16px + (24 * var(--rtl-space)));
    }
    &:not(:first-child):not(:last-child) {
      padding: 12px calc(16px + 24px);
    }
  }
`;
