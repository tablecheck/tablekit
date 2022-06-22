import { css, keyframes, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import {
  FontWeight,
  Spacing,
  BORDER_RADIUS_LARGE,
  BORDER_RADIUS_SMALL
} from './constants';

/**
 * This is the normal element used for this styles.
 * If provided the CSS selector should also be `button {...`.
 * Alteratively `baseSelector` can be provided which should be either an attribute or class
 */
export const baseElement = 'button';
export const baseSelector = '.btn';

export const baseStyles = css`
  position: relative;
  display: grid;
  padding: 12px 20px;
  grid-gap: ${Spacing.L2};
  grid-auto-flow: column;
  cursor: pointer;

  font-weight: ${FontWeight.Medium};
  font-size: 16px;
  line-height: 24px;
  border-radius: ${BORDER_RADIUS_SMALL}px;

  align-items: center;
  text-align: center;

  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: ${BORDER_RADIUS_LARGE}px;
      border: 2px solid var(--focus, hsla(219, 78.5%, 52.5%, 1));
    }
  }
`;

export const ButtonBase = styled(baseElement)<{
  /**
   * @deprecated The tooltip styling clashes with the busy styling, apply the tooltip on a wrapper component
   */
  'data-tooltip'?: never;
}>`
  ${baseStyles}
`;

const rotateAnimation = keyframes`
  to {
     transform: rotate(1turn);
  }
`;

/**
 * @deprecated This is intented for internal use only, changes here have no effect
 */
export const variants = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'bare'
] as const;

export type ButtonVariant = typeof variants[number];

const variantStyles: Record<ButtonVariant, SerializedStyles> = {
  primary: css`
    --color: white;
    --background-color: var(--primary);
    &:hover {
      --background-color: var(--primary-hover);
    }
    &:active {
      --background-color: var(--primary-active);
    }
  `,
  secondary: css`
    --color: var(--text-contrast);
    --background-color: var(--secondary);
    &:hover {
      --background-color: var(--secondary-hover);
    }
    &:active {
      --background-color: var(--secondary-active);
    }
  `,
  tertiary: css`
    --color: var(--text);
    border: 2px solid var(--secondary);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  ghost: css`
    --color: var(--text);
    border: 1px solid var(--border-transparent);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  bare: css`
    --color: var(--text);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `
};

const coreStyles = css`
  &:disabled {
    &,
    &:hover,
    &:active {
      cursor: not-allowed;
      pointer-events: none;
      --background-color: var(--surface-disabled);
      border-color: var(--surface-disabled);
      --color: var(--text-disabled);
    }
  }
  color: var(--color);
  background-color: var(--background-color);
  --loading-transition: 300ms ease-in-out;
  transition: color var(--loading-transition),
    background-color var(--loading-transition),
    border-color var(--loading-transition);
  &:before {
    content: '';
    display: block;
    position: absolute;
    --size: 20px;
    top: calc(50% - var(--size) / 2);
    left: calc(50% - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    pointer-events: initial;
    opacity: 0;
    background-color: var(--color);
    -webkit-mask-image: url('data:image/svg+xml; utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53682 17.3559C7.08196 17.0665 5.74559 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50032 3.0709 7.12987C3.63856 5.75943 4.59985 4.58809 5.83322 3.76398C7.06659 2.93987 8.51664 2.5 10 2.5V4.375C8.88748 4.375 7.79994 4.7049 6.87492 5.32298C5.94989 5.94107 5.22892 6.81957 4.80318 7.84741C4.37743 8.87524 4.26604 10.0062 4.48308 11.0974C4.70012 12.1885 5.23585 13.1908 6.02252 13.9775C6.80919 14.7641 7.81147 15.2999 8.90262 15.5169C9.99376 15.734 11.1248 15.6226 12.1526 15.1968C13.1804 14.7711 14.0589 14.0501 14.677 13.1251C15.2951 12.2001 15.625 11.1125 15.625 10H17.5Z" fill="currentColor"/></svg>');
    mask-image: url('data:image/svg+xml; utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53682 17.3559C7.08196 17.0665 5.74559 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50032 3.0709 7.12987C3.63856 5.75943 4.59985 4.58809 5.83322 3.76398C7.06659 2.93987 8.51664 2.5 10 2.5V4.375C8.88748 4.375 7.79994 4.7049 6.87492 5.32298C5.94989 5.94107 5.22892 6.81957 4.80318 7.84741C4.37743 8.87524 4.26604 10.0062 4.48308 11.0974C4.70012 12.1885 5.23585 13.1908 6.02252 13.9775C6.80919 14.7641 7.81147 15.2999 8.90262 15.5169C9.99376 15.734 11.1248 15.6226 12.1526 15.1968C13.1804 14.7711 14.0589 14.0501 14.677 13.1251C15.2951 12.2001 15.625 11.1125 15.625 10H17.5Z" fill="currentColor"/></svg>');
    transition: opacity var(--loading-transition);
    transition-delay: 0ms;
    animation: ${rotateAnimation} 800ms infinite linear;
    z-index: 2;
  }
  &[aria-busy='true'] {
    pointer-events: none;
    color: transparent;
    cursor: progress;
  }
  &[aria-busy='true']:before {
    opacity: 1;
    pointer-events: none;
    transition-duration: 150ms;
    transition-delay: 200ms;
  }
`;

export const VariantButtons = variants.reduce(
  (result, key) => ({
    ...result,
    [`${key.substring(0, 1).toUpperCase()}${key
      .substring(1)
      .toLowerCase()}`]: styled(ButtonBase)`
      ${variantStyles[key]}
      ${coreStyles}
    `
  }),
  {} as Record<
    Capitalize<ButtonVariant>,
    StyledComponent<{
      'aria-busy'?: boolean;
    }> &
      typeof ButtonBase
  >
);

export const Button = styled(ButtonBase)<{
  'data-variant'?: ButtonVariant;
  'aria-busy'?: boolean;
}>`
  &:not([data-variant]) {
    ${variantStyles.primary}
  }
  ${variants.map(
    (key) =>
      css`
        &[data-variant='${key}'] {
          ${variantStyles[key]}
        }
      `
  )}
  ${coreStyles}
`;
