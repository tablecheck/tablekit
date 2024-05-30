import { css } from '../utils';

export const element = 'div';
export const className = 'form-banner';

const variants = [
  'success',
  'info',
  'error',
  'warning',
  'neutral',
  'purple',
  'orange'
] as const;

export type FormBannerVariant = (typeof variants)[number];

export interface Props {
  'data-variant': FormBannerVariant;
}

export const fullStyles = css`
  display: flex;
  gap: var(--spacing-l2);
  color: var(--neutral-text);
  background: var(--neutral-surface);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-l4) var(--spacing-l3);
  align-items: flex-start;
  width: 100%;

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
  &[data-variant='purple'] {
    color: var(--purple-text);
    background: var(--purple-surface);
  }
  &[data-variant='orange'] {
    color: var(--orange-text);
    background: var(--orange-surface);
  }
`;
