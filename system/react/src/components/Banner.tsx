import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const classySelector = '.banner';

const baseStyles = css`
  padding: var(--spacing-l4);
  background-color: var(--neutral-surface);
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-areas: 'icon title close' 'icon content content' 'icon actions actions';

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

  &[data-variant='success'] {
    background-color: var(--success-surface);
  }

  &[data-variant='info'] {
    background-color: var(--info-surface);
  }

  &[data-variant='warning'] {
    background-color: var(--warning-surface);
  }
`;

export const Banner = styled.div<{
  'data-variant'?: 'success' | 'info' | 'warning' | 'neutral';
}>`
  ${baseStyles}
`;
