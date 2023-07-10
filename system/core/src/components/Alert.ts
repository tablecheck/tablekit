import { css } from '@emotion/react';

export const element = 'div';
export const className = 'input-alert';

const variants = ['success', 'info', 'error', 'warning', 'neutral'] as const;

export type AlertVariant = (typeof variants)[number];

export interface Props {
  /**
   * This prop should be used with `aria-describedby` on the input field
   */
  id: string;
  'data-variant': AlertVariant;
  'data-layout':
    | 'icon-title-close'
    | 'title-close'
    | 'title'
    | 'icon-close'
    | 'close'
    | 'text-only';
}

export const baseStyles = css`
  display: grid;
  grid-gap: var(--spacing-l1) var(--spacing-l2);
  color: var(--neutral-text);
  background: var(--neutral-surface);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-l2) var(--spacing-l3);
  align-items: flex-start;
  width: 345px;

  & .input-alert-icon {
    margin-top: 2px;
  }

  &[data-layout='icon-title-close'] {
    grid: 'icon title close' 1fr '. description .' 1fr / min-content 1fr min-content;
  }
  &[data-layout='title-close'] {
    grid: 'title close' 1fr 'description .' 1fr / 1fr min-content;
  }
  &[data-layout='title'] {
    grid: 'title' 1fr 'description' 1fr / 1fr;
  }
  &[data-layout='icon-close'] {
    grid: 'icon description close' 1fr / min-content 1fr min-content;
  }
  &[data-layout='close'] {
    grid: 'description close' 1fr / 1fr min-content;
  }
  &[data-layout='text-only'] {
    grid: 'description' 1fr / 1fr;
  }

  &[data-variant='error'] {
    color: var(--error-text);
    background: var(--error-surface);
  }
  &[data-variant='warning'] {
    color: var(--warning-text);
    background: var(--warning-surface);
  }
  &[data-variant='success'] {
    color: var(--success-text);
    background: var(--success-surface);
  }
  &[data-variant='info'] {
    color: var(--info-text);
    background: var(--info-surface);
  }
`;
