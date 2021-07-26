import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { Typography } from '@tablecheck/tablekit-typography';
import { mediaQuery, VariantProps } from '@tablecheck/tablekit-utils';

import { ItemContainerProps, ItemProps } from '../types';
import { interactionStates, getSizeStyle } from '../utils/theme';

export { ElementBefore, ElementAfter } from '../utils/theme';

const ItemBaseContainer = styled.span<VariantProps<ItemContainerProps<'span'>>>`
  box-sizing: border-box;
  ${getSizeStyle};
  ${Typography.Body2};
  width: ${mediaQuery('width', (value) => value || '100%')};
  ${({ shouldCenterAlignment, hasOnlyIcon }) =>
    shouldCenterAlignment || hasOnlyIcon ? 'justify-content: center' : ''};
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
    text-decoration: none;
  }
  ${interactionStates}
  ${({ customStyles }) => customStyles}
`;

export const ItemBaseHtml = styled(ItemBaseContainer, {
  shouldForwardProp: (prop: keyof ItemProps<'span'>) =>
    isPropValid(prop) &&
    [
      'shouldCenterAlignment',
      'interactionState',
      'useVariantAsClass',
      'size',
      'borderPosition',
      'isDisabled',
      'isSelected',
      'isHidden',
      'hasOnlyIcon'
    ].indexOf(prop.toString()) === -1
})<ItemContainerProps<'span'>>``;

export const ItemBaseComponent = styled(ItemBaseContainer, {
  shouldForwardProp: (prop: keyof ItemProps<'span'>) =>
    [
      'as',
      'shouldCenterAlignment',
      'interactionState',
      'useVariantAsClass',
      'size',
      'borderPosition',
      'isDisabled',
      'isSelected',
      'isHidden',
      'hasOnlyIcon'
    ].indexOf(prop.toString()) === -1
})<ItemContainerProps<'span'>>``;

export const ItemContent = styled.span<{
  shouldCenterAlignment: boolean;
}>`
  width: ${({ shouldCenterAlignment }) =>
    shouldCenterAlignment ? 'auto' : '100%'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
