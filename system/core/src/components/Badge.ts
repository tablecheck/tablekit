import { css } from '../utils';

export const element = 'span';
export const className = 'badge';

export const fullStyles = css`
  width: max-content;
  font: var(--label);
  display: inline-grid;
  grid-auto-flow: column;
  gap: var(--spacing-l1);
  align-items: center;
  padding: 6px var(--spacing-l2);
  border-radius: var(--border-radius-small);
  color: var(--neutral-text);
  background-color: var(--neutral-surface);
  border: 1px solid var(--neutral-border);

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
  'tertiary',
  'ghost',
  'success',
  'info',
  'error',
  'warning',
  'neutral',
  'purple',
  'orange',
  'disabled'
] as const;

export type BadgeVariant = (typeof variants)[number];

function getVariantStyles(key: BadgeVariant): string {
  if (key === 'disabled')
    return css`
      color: var(--text-disabled);
      background-color: var(--surface-disabled);
      border-color: transparent;
    `;
  if (key === 'tertiary')
    return css`
      color: var(--text);
      background-color: var(--surface);
      border-color: var(--border);
    `;
  if (key === 'ghost')
    return css`
      color: var(--text);
      background-color: transparent;
      border-color: var(--border);
    `;
  return css`
    color: var(--${key}-text);
    background-color: var(--${key}-surface);
    border-color: var(--${key}-border);
  `;
}

export const variantStyles = variants.reduce(
  (result, key) => ({
    ...result,
    [key]: getVariantStyles(key)
  }),
  {} as Record<BadgeVariant, string>
);
