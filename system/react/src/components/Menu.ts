import styled, { CSSObject } from '@emotion/styled';

export const classySelector = '.menu';

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

export const Menu = styled.div(baseStylesObject);
