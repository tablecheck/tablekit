import styled, { CSSObject } from '@emotion/styled';

import { Spacing } from './constants';

export const baseSelector = '.menu';
export const baseElement = 'menu';

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
  gridGap: Spacing.L1,
  listStyle: 'none',
  alignItems: 'stretch',
  '& > li': {
    display: 'flex',
    justifyContent: 'stretch'
  },
  '& > li > *': {
    flex: '1 1 100%',
    justifyContent: 'flex-start'
  }
};

export const MenuList = styled(baseElement)<{ 'data-noscroll'?: boolean }>(
  baseStylesObject
);
