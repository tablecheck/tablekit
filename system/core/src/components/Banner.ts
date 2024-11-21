import { css } from '../utils';

export const className = 'banner';

export const fullStyles = css`
  padding: var(--spacing-l4);
  background-color: var(--neutral-surface);
  border: 1px solid var(--neutral-border);
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-areas: 'icon title close' 'icon content content' 'icon actions actions';
  border-radius: var(--border-radius-small);

  .banner-icon {
    grid-area: icon;
    padding-right: var(--spacing-l4);
  }

  .banner-title {
    grid-area: title;
  }

  .banner-close {
    grid-area: close;
    cursor: pointer;
  }

  .banner-content {
    grid-area: content;
    padding-top: var(--spacing-l2);
  }

  .banner-actions {
    grid-area: actions;
    display: flex;
    gap: var(--spacing-l4);
    padding-top: var(--spacing-l2);
  }
`;

export interface Props {
  'data-variant'?: BannerVariant;
}

const variants = [
  'tertiary',
  'ghost',
  'success',
  'warning',
  'info',
  'neutral'
] as const;

export type BannerVariant = (typeof variants)[number];

function getVariantStyles(key: BannerVariant): string {
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
  {} as Record<BannerVariant, string>
);
