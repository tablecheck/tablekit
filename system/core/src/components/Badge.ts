import { css, SerializedStyles } from '@emotion/react';

export const element = 'span';
export const className = 'badge';

export const baseStyles = css`
  width: max-content;
  font: var(--label);
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-l1);
  align-items: center;
  padding: 6px var(--spacing-l2);
  border-radius: var(--border-radius-small);
  color: var(--neutral-text);
  background-color: var(--neutral-surface);

  &[data-size='small'] {
    padding: 4px 6px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export interface Props {
  'data-variant'?: BadgeVariant;
  'data-size'?: 'small';
}

const variants = [
  'success',
  'warning',
  'info',
  'error',
  'neutral',
  'purple',
  'orange'
] as const;

export type BadgeVariant = (typeof variants)[number];

export const variantStyles = variants.reduce(
  (result, key) => ({
    ...result,
    [key]: css`
      color: var(--${key}-text);
      background-color: var(--${key}-surface);
    `
  }),
  {} as Record<BadgeVariant, SerializedStyles>
);
