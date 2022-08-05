import { css, keyframes } from '@emotion/react';
import { BORDER_RADIUS_SMALL, ZIndex } from 'utils/constants';

/**
 * Adapted from https://github.com/picocss/pico/blob/master/scss/utilities/_tooltip.scss
 */

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

export const tooltip = css`
  [data-tooltip] {
    --tooltip-background-color: var(--surface, #000);
    --tooltip-text-color: var(--text, #fff);
    position: relative;
    &:before {
      display: block;
      z-index: ${ZIndex.Tooltip};
      position: absolute;
      bottom: 100%;
      left: 50%;
      padding: 6px 8px;
      overflow: hidden;
      transform: translate(-50%, -0.25rem);
      border-radius: ${BORDER_RADIUS_SMALL}px;
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
  }
`;
