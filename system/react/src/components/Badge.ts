import { css } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

export const classySelector = '.badge';

export const baseStyles = css`
  width: max-content;
  font: var(--label);
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-l1);
  align-items: center;
  padding: 6px var(--spacing-l2);
  border-radius: var(--border-radius-small);

  &[data-size='small'] {
    padding: 4px 6px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export interface Props {
  'data-variant'?: (typeof variants)[number];
  'data-size'?: 'small';
}

export const BadgeBase = styled.span<Props>`
  ${baseStyles}
  color: var(--neutral-text);
  background-color: var(--neutral-surface);
`;

/**
 * @deprecated This is intented for internal use only, changes here have no effect
 */
export const variants = [
  'success',
  'warning',
  'info',
  'error',
  'neutral',
  'purple',
  'orange'
] as const;

export type BadgeVariant = (typeof variants)[number];

function generateVariant(variant: BadgeVariant) {
  return css`
    &[data-variant='${variant}'] {
      color: var(--${variant}-text);
      background-color: var(--${variant}-surface);
    }
  `;
}

export const VariantBadges = variants.reduce(
  (result, key) => ({
    ...result,
    [`${key.substring(0, 1).toUpperCase()}${key
      .substring(1)
      .toLowerCase()}`]: styled.span<Pick<Props, 'data-size'>>`
      ${baseStyles}
      ${generateVariant(key)}
    `
  }),
  {} as Record<
    Capitalize<BadgeVariant>,
    StyledComponent<Pick<Props, 'data-size'>>
  >
);

export const Badge = styled(BadgeBase)`
  ${variants.map((variant) => generateVariant(variant))}
`;
