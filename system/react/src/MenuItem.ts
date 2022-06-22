import styled, { CSSObject } from '@emotion/styled';

import { BORDER_RADIUS_SMALL, Spacing } from './constants';

export const baseSelector = '.menu-item';
export const baseElement = 'span';

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const stateStylesObjects: Record<
  'focus' | 'selected' | 'active' | 'hover',
  CSSObject
> = {
  active: {
    color: 'var(--text)',
    background: 'var(--surface-active)'
  },
  focus: {
    color: 'var(--text)',
    background: 'var(--surface-hover)'
  },
  selected: {
    color: 'var(--text)',
    background: 'var(--surface-active)'
  },
  hover: {
    color: 'var(--text)',
    background: 'var(--surface-hover)'
  }
};

export const baseStylesObject: CSSObject = {
  font: 'var(--body-1)',
  color: 'var(--text)',
  padding: Spacing.L3,
  borderRadius: BORDER_RADIUS_SMALL,
  display: 'grid',
  gridGap: Spacing.L2,
  gridAutoFlow: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  textDecoration: 'none !important',
  outline: 'none',
  '&:is(button, :any-link)': {
    cursor: 'pointer'
  }
};

// eslint-disable-next-line @emotion/syntax-preference
export const MenuItem = styled(baseElement)<{ 'data-selected'?: boolean }>({
  ...baseStylesObject,
  '&:is(button, :any-link):active': stateStylesObjects.active,
  '&:is(button, :any-link):focus': stateStylesObjects.focus,
  '&:is(button, :any-link):hover': stateStylesObjects.hover,
  '&[data-selected=true]': stateStylesObjects.selected
});
