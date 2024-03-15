import { css } from '@emotion/react';

export const element = 'label';
export const selectors = ['label.checkbox', 'label.radio'];

export interface Props {
  htmlFor?: string;
}

export const baseStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-l2);
  cursor: pointer;
  font: var(--body-1);
`;
