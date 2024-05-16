import { css, CSSObject } from '../utils';

export const className = 'menu';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const fullStylesObject: CSSObject = {
  backgroundColor: 'var(--surface)',
  boxShadow: 'var(--elevation-small)',
  borderRadius: 'var(--border-radius-small)',
  padding: 0,
  zIndex: 'var(--zindex-layer)'
};

export const fullStyles = css(fullStylesObject);
