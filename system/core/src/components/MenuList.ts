import { css, CSSObject } from '../utils';

export const element = 'menu';
export const selectors = ['menu'];
export const className = 'menu-list';

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const fullStylesObject: CSSObject = {
  '&:not([data-noscroll])': {
    maxHeight: 300,
    overflowY: 'auto'
  },
  padding: 'var(--spacing-l1)',
  display: 'grid',
  gridAutoFlow: 'row',
  gridGap: 'var(--spacing-l1)',
  listStyle: 'none',
  alignItems: 'stretch',
  borderColor: 'var(--border-transparent)',
  borderRadius: 'var(--border-radius-small)',
  borderStyle: 'solid',
  borderWidth: '1px',
  '& > li': {
    display: 'flex',
    justifyContent: 'stretch'
  }
};

export interface Props {
  'data-noscroll'?: boolean;
}
export const fullStyles = css(fullStylesObject);
