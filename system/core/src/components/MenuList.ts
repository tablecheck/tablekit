import { css, CSSObject } from '@emotion/react';

export const element = 'menu';
export const selectors = ['menu'];
export const className = 'menu-list';

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const baseStylesObject: CSSObject = {
  '&:not([data-noscroll])': {
    maxHeight: 300,
    overflowY: 'auto'
  },
  padding: 0,
  display: 'grid',
  gridAutoFlow: 'row',
  gridGap: 'var(--spacing-l1)',
  listStyle: 'none',
  alignItems: 'stretch',
  '& > li': {
    display: 'flex',
    justifyContent: 'stretch'
  }
};

export interface Props {
  'data-noscroll'?: boolean;
}
export const baseStyles = css(baseStylesObject);
