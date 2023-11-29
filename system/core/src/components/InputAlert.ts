import { css } from '@emotion/react';

export const element = 'span';
export const className = 'input-alert';

const variants = ['info', 'error', 'warning', 'bare', 'disabled'] as const;

export type InputAlertVariant = (typeof variants)[number];

export interface Props {
  /**
   * This prop should be used with `aria-describedby` on the input field
   */
  id: string;
  'data-variant': InputAlertVariant;
}

export const baseStyles = css`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: var(--spacing-l2);
  margin-top: var(--spacing-l2);
  color: var(--text);
  border-radius: var(--border-radius-small);

  & > svg:first-child {
    margin-top: 2px;
  }

  &[data-variant='error'],
  &[data-variant='warning'],
  &[data-variant='info'] {
    border-radius: var(--border-radius-small);
    padding: var(--spacing-l2) var(--spacing-l3);
  }

  &[data-variant='disabled'] {
    color: var(--text-disabled);
  }

  &[data-variant='error'] {
    background: var(--error-surface);
    color: var(--error-text);
  }

  &[data-variant='warning'] {
    background: var(--warning-surface);
    color: var(--warning-text);
  }

  &[data-variant='info'] {
    background: var(--info-surface);
    color: var(--info-text);
  }
`;
