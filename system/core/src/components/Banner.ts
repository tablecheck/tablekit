import { css } from '../utils';

export const className = 'banner';

export const fullStyles = css`
  padding: var(--spacing-l4);
  background-color: var(--neutral-surface);
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

const variants = ['success', 'warning', 'info', 'neutral'] as const;

export type BannerVariant = (typeof variants)[number];

export const variantStyles = variants.reduce(
  (result, key) => ({
    ...result,
    [key]: css`
      background-color: var(--${key}-surface);
    `
  }),
  {} as Record<BannerVariant, string>
);
