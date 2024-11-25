import { css } from '../utils';

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

export const fullStyles = css`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: var(--spacing-l2);
  color: var(--text);
  border-radius: var(--border-radius-small);

  & > svg:first-child {
    margin-top: 2px;
  }
  & > :not(svg):first-child:last-child {
    grid-column: 1 / 3;
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
    border: 1px solid var(--error-border);
    color: var(--error-text);
  }

  &[data-variant='warning'] {
    background: var(--warning-surface);
    border: 1px solid var(--warning-border);
    color: var(--warning-text);
  }

  &[data-variant='info'] {
    background: var(--info-surface);
    border: 1px solid var(--info-border);
    color: var(--info-text);
  }
`;
