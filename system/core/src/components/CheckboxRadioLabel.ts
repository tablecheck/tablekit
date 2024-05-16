import { css } from '../utils';

export const element = 'label';
export const selectors = ['label.checkbox', 'label.radio'];

export interface Props {
  htmlFor?: string;
  'data-variant'?: 'disabled';
}

export const fullStyles = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-l2);
  cursor: pointer;
  font: var(--body-1);
  color: var(--text);
  &[data-variant='disabled'],
  &:has(:disabled) {
    color: var(--text-disabled);
  }
`;
