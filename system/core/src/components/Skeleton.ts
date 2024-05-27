import { css } from '../utils';

// This file is a replacement for https://github.com/dvtng/react-loading-skeleton

export const className = 'skeleton';

export const keyframes = css`
  @keyframes tk-skeleton {
    to {
      background-position: -200% 0;
    }
  }
`;

export interface Props {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

export interface SkeletonCSSProperties {
  '--animation-delay': string;
  '--skeleton-width': string;
  '--skeleton-height': string;
  '--skeleton-border-radius': string;
}

export const fullStyles = css`
  --animation-duration: 2s;
  --animation-direction: normal;

  background-color: var(--surface-low);
  color: transparent;
  &:empty {
    min-height: 1rem;
    width: var(--skeleton-width);
  }
  height: var(--skeleton-height);
  border-radius: var(--skeleton-border-radius);
  display: inline-flex;
  line-height: 1.2rem;

  position: relative;
  overflow: hidden;
  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */

  &:after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
          -75deg,
          transparent 30%,
          var(--surface-active) 40%,
          transparent 50%
        )
        0 0 / 200% 100%,
      var(--surface-raised);
    background-attachment: fixed;
    animation-name: tk-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-delay: var(--animation-delay);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
