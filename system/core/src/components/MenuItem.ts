import { css, CSSObject } from '../utils';

export const element = 'button';
export const className = 'menu-item';
const variants = ['success', 'info', 'error', 'warning'] as const;

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */

/**
 *
 * @alias menuItemStateStylesObjects
 */
export const stateStylesObjects: Record<
  'focus' | 'selected' | 'active' | 'hover',
  CSSObject
> = {
  active: {
    background: 'var(--surface-active)'
  },
  focus: {
    background: 'var(--surface-hover)'
  },
  selected: {
    background: 'var(--surface-active)'
  },
  hover: {
    background: 'var(--surface-hover)'
  }
};

export const fullStylesObject: CSSObject = {
  font: 'var(--body-1)',
  '&, &:any-link, &:hover': {
    color: 'var(--text)'
  },
  padding: 'var(--spacing-l2)',
  borderRadius: 'var(--border-radius-small)',
  display: 'grid',
  gridGap: 'var(--spacing-l2)',
  gridAutoFlow: 'column',
  alignItems: 'center',
  flex: '1 1 100%',
  justifyContent: 'flex-start',
  textDecoration: 'none !important',
  outline: 'none',
  '&:is(button, :any-link), &:matches(button, :any-link)': {
    cursor: 'pointer'
  },
  '&[data-variant="success"]': {
    color: 'var(--success)'
  },
  '&[data-variant="info"]': {
    color: 'var(--info)'
  },
  '&[data-variant="error"]': {
    color: 'var(--error)'
  },
  '&[data-variant="warning"]': {
    color: 'var(--warning)'
  }
};

export interface Props {
  'data-selected'?: boolean;
  'data-variant'?: (typeof variants)[number];
}

// eslint-disable-next-line @emotion/syntax-preference
export const fullStyles = css({
  ...fullStylesObject,
  '&:matches(button, :any-link):matches(:active, [data-pseudo="active"])':
    stateStylesObjects.active,
  '&:is(button, :any-link):is(:active, [data-pseudo="active"])':
    stateStylesObjects.active,
  '&:matches(button, :any-link):matches(:focus, [data-pseudo="focus"])':
    stateStylesObjects.focus,
  '&:is(button, :any-link):is(:focus, [data-pseudo="focus"])':
    stateStylesObjects.focus,
  '&:matches(button, :any-link):matches(:hover, [data-pseudo="hover"])':
    stateStylesObjects.hover,
  '&:is(button, :any-link):is(:hover, [data-pseudo="hover"])':
    stateStylesObjects.hover,
  '&[data-selected=true]': stateStylesObjects.selected
});
