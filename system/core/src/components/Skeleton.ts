import { css, themedCss } from '../utils';

// This file is a replacement for https://github.com/dvtng/react-loading-skeleton

export const className = 'skeleton';

export interface Props {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
}

export interface SkeletonCSSProperties {
  '--tk-skeleton-width': string;
  '--tk-skeleton-height': string;
  '--tk-skeleton-border-radius': string;
}

export const fullStyles = css`
  ${themedCss({
    dark: css`
      --tk-skeleton-background: var(--grey-800);
    `,
    light: css`
      --tk-skeleton-background: var(--grey-300);
    `,
    selector: '&'
  })}

  color: transparent !important;
  &:empty {
    min-height: 1rem;
    width: var(--tk-skeleton-width);
  }
  height: var(--tk-skeleton-height);
  border-radius: var(--tk-skeleton-border-radius, var(--border-radius-micro));
  display: inline-flex;
  line-height: 1.2rem;

  background: var(--tk-skeleton-background);
`;
