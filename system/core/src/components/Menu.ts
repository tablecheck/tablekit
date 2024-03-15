import { css, CSSObject } from '@emotion/react';

export const className = 'menu';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const baseStylesObject: CSSObject = {
  backgroundColor: 'var(--surface)',
  boxShadow: 'var(--elevation-small)',
  borderRadius: 'var(--border-radius-small)',
  padding: 'var(--spacing-l1)',
  zIndex: 'var(--zindex-layer)'
};

export const baseStyles = css(baseStylesObject);
