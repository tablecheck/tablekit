import { css } from '../utils';

export const element = 'div';
export const className = 'alert';

const variants = [
  'tertiary',
  'ghost',
  'success',
  'info',
  'error',
  'warning',
  'neutral'
] as const;

export type AlertVariant = (typeof variants)[number];

export interface Props {
  'data-variant': AlertVariant;
  'data-layout':
    | 'icon-title-close'
    | 'title-close'
    | 'icon-title'
    | 'title'
    | 'icon-close'
    | 'close'
    | 'icon'
    | 'text-only';
}

export const fullStyles = css`
  display: grid;
  gap: var(--spacing-l1) var(--spacing-l2);
  color: var(--neutral-text);
  background: var(--neutral-surface);
  border: 1px solid var(--neutral-border);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-l2) var(--spacing-l3);
  align-items: flex-start;
  width: 345px;

  & .alert-icon {
    margin-top: 2px;
  }

  &[data-layout='icon-title-close'] {
    grid: 'icon title close' min-content '. description .' 1fr / min-content 1fr min-content;
  }
  &[data-layout='icon-title'] {
    grid: 'icon title' min-content '. description' 1fr / min-content 1fr min-content;
  }
  &[data-layout='title-close'] {
    grid: 'title close' min-content 'description .' 1fr / 1fr min-content;
  }
  &[data-layout='title'] {
    grid: 'title' min-content 'description' 1fr / 1fr;
  }
  &[data-layout='icon-close'] {
    grid: 'icon description close' 1fr / min-content 1fr min-content;
  }
  &[data-layout='icon'] {
    grid: 'icon description' 1fr / min-content 1fr min-content;
  }
  &[data-layout='close'] {
    grid: 'description close' 1fr / 1fr min-content;
  }
  &[data-layout='text-only'] {
    grid: 'description' 1fr / 1fr;
  }

  &[data-variant='tertiary'] {
    color: var(--text);
    background: var(--surface);
    border-color: var(--border);
  }
  &[data-variant='ghost'] {
    color: var(--text);
    background: transparent;
    border-color: var(--border);
  }
  &[data-variant='error'] {
    color: var(--error-text);
    background: var(--error-surface);
    border-color: var(--error-border);
  }
  &[data-variant='warning'] {
    color: var(--warning-text);
    background: var(--warning-surface);
    border-color: var(--warning-border);
  }
  &[data-variant='success'] {
    color: var(--success-text);
    background: var(--success-surface);
    border-color: var(--success-border);
  }
  &[data-variant='info'] {
    color: var(--info-text);
    background: var(--info-surface);
    border-color: var(--info-border);
  }
`;
