import { css, keyframes } from '@emotion/react';

/**
 * Adapted from https://github.com/picocss/pico/blob/master/scss/utilities/_tooltip.scss
 */

export const element = 'span';
export const selectors = ['[data-tooltip]'];

export interface Props {
  'data-tooltip': string;
}

const slide = keyframes`
  from {
    transform: translate(-50%, .75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -.25rem);
    opacity: 1;
  }
`;

export const baseStyles = css`
  --tooltip-background-color: var(--surface, #000);
  --tooltip-text-color: var(--text, #fff);
  position: relative;
  &:before {
    display: block;
    z-index: var(--zindex-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    padding: 6px 8px;
    overflow: hidden;
    transform: translate(-50%, -0.25rem);
    border-radius: var(--border-radius-small);
    background: var(--tooltip-background-color);
    content: attr(data-tooltip);
    color: var(--tooltip-text-color);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    font: var(--body-2);
  }
  &::before {
    box-shadow: var(--elevation-medium);
    border: 1px solid var(--border);
  }

  // Display
  &[data-pseudo='focus'],
  &[data-pseudo='hover'],
  &:focus,
  &:hover {
    &::before {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) {
    &:focus,
    &:hover {
      &::before {
        animation-duration: 0.2s;
        animation-name: ${slide};
      }
    }
  }
`;
