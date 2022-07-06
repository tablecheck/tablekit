import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { BORDER_RADIUS_LARGE, BORDER_RADIUS_SMALL } from 'utils/constants';

// This file is a replacement for https://github.com/dvtng/react-loading-skeleton

export const baseSelector = '.skeleton';

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
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
  border-radius: ${BORDER_RADIUS_LARGE};
  &[data-style='input'] {
    border-radius: ${BORDER_RADIUS_SMALL};
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
    background-repeat: no-repeat;
    background-image: linear-gradient(
      90deg,
      var(--surface),
      var(--surface-hover),
      var(--surface)
    );
    transform: translateX(-100%);

    animation-name: ${loadingAnimation};
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;
