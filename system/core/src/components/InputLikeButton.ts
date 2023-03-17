import { css } from '@emotion/react';

import { baseStyles as inputBaseStyles } from './Input';

export type { Props } from './Input';
export type { Props as DefaultedProps } from './Input';

export const element = 'button';
export const selectors = ['button.input', 'a.input'];

export const defaultProps = {
  role: 'button'
};

export const baseStyles = css`
  ${inputBaseStyles};
  display: flex;
  gap: var(--spacing-l2);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > *:not(svg) {
    flex: 1;
    text-align: left;
  }

  &[data-pseudo='hover'],
  &:hover {
    background: var(--surface-hover);
  }
  &[data-pseudo='active'],
  &:active {
    background: var(--surface-active);
  }
`;
