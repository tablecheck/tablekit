import styled, { CSSObject } from '@emotion/styled';

import { BORDER_RADIUS_SMALL, Spacing } from 'utils/constants';

export const baseSelector = '.menu';
export const baseElement = 'div';

/**
 * We export the objects as well for compatibilty with 3rd party libs like react-select
 */
export const baseStylesObject: CSSObject = {
  backgroundColor: 'var(--surface)',
  boxShadow: 'var(--elevation-small)',
  borderRadius: BORDER_RADIUS_SMALL,
  padding: Spacing.L1
};

export const Menu = styled(baseElement)(baseStylesObject);
