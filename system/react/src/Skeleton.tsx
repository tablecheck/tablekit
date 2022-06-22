import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// This file is a replacement for https://github.com/dvtng/react-loading-skeleton

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

function pixelParam(
  param: string | number | undefined,
  fallback: string
): string {
  if (typeof param === 'string') return param;
  if (typeof param === 'number') return `${param}px`;
  return fallback;
}

export const Skeleton = styled.span<{
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}>`
  --animation-duration: 1.5s;
  --animation-direction: normal;
  --pseudo-element-display: block; /* Enable animation */

  background-color: ${({ theme }) => theme.colors.surfaceLow};
  color: transparent;
  &:empty {
    min-height: 1rem;
    width: ${({ width }) => pixelParam(width, '100%')};
  }
  height: ${({ height }) => pixelParam(height, '100%')};
  border-radius: ${({ borderRadius }) => pixelParam(borderRadius, '8px')};
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
    ${({ theme }) =>
      theme.isDark
        ? css`
            background-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0),
              ${theme.colors.surfaceHigh},
              rgba(0, 0, 0, 0)
            );
          `
        : css`
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0),
              ${theme.colors.surfaceHigh},
              rgba(255, 255, 255, 0)
            );
          `};
    transform: translateX(-100%);

    animation-name: ${loadingAnimation};
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;
