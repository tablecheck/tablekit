import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// This file is a replacement for https://github.com/dvtng/react-loading-skeleton

export const baseSelector = '.skeleton';

const loadingAnimation = keyframes`
  to {
    background-position: -200% 0;
  }
`;

export const Skeleton = styled.span<{
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}>`
  --animation-duration: 1.5s;
  --animation-direction: normal;
  --pseudo-element-display: block; /* Enable animation */

  background-color: var(--surface-hover);
  color: transparent;
  &:empty {
    min-height: 1rem;
    width: 100%;
  }
  height: 100%;
  border-radius: var(--border-radius-large);
  &[data-style='input'] {
    border-radius: var(--border-radius-small);
  }
  display: inline-flex;
  line-height: 1.2rem;

  position: relative;
  overflow: hidden;
  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */

  &::after {
    content: ' ';
    display: var(--pseudo-element-display);
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
      var(--grey-100);
    background-attachment: fixed;

    animation-name: ${loadingAnimation};
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
