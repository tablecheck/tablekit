import { css } from '@emotion/react';

export const element = 'label';
export const selectors = ['label.checkbox', 'label.radio'];

const variants = ['disabled'] as const;

export type CheckboxRadioLabelVariant = (typeof variants)[number];

export interface Props {
  htmlFor?: string;
  'data-variant'?: CheckboxRadioLabelVariant;
}

export const baseStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-l2);
  cursor: pointer;
  font: var(--body-1);

  &[data-variant='disabled'], &:has(input:disabled) { {
    color: var(--text-disabled);
    cursor: not-allowed;
  }
`;
