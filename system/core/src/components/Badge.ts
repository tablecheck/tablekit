import { css } from '../utils';

export const element = 'span';
export const className = 'badge';

export const fullStyles = css`
  width: max-content;
  font: var(--label);
  display: grid;
  grid-auto-flow: column;
  gap: var(--spacing-l1);
  align-items: center;
  padding: 6px var(--spacing-l2);
  border-radius: var(--border-radius-small);
  color: var(--neutral-text);
  background-color: var(--neutral-surface);

  &[data-size='x-small'] {
    padding: 2px 6px;
    font-size: 12px;
    line-height: 16px;
  }
  &[data-size='small'] {
    padding: 4px 6px;
    font-size: 12px;
    line-height: 16px;
  }
  &[data-size='large'] {
    padding: 10px 10px;
    gap: 6px;
  }
  &[data-size='x-large'] {
    padding: 14px 10px;
    gap: 6px;
  }
`;

export interface Props {
  'data-variant'?: BadgeVariant;
  'data-size'?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
}

const variants = [
  'success',
  'warning',
  'info',
  'error',
  'neutral',
  'purple',
  'orange',
  'disabled'
] as const;

export type BadgeVariant = (typeof variants)[number];

export const variantStyles = variants.reduce(
  (result, key) => ({
    ...result,
    [key]:
      key === 'disabled'
        ? css`
            color: var(--text-disabled);
            background-color: var(--surface-disabled);
          `
        : css`
            color: var(--${key}-text);
            background-color: var(--${key}-surface);
          `
  }),
  {} as Record<BadgeVariant, string>
);
