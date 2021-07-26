import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { ComponentType, ReactNode } from 'react';

import { getLoadingStyle } from './commonStyles';

type PropsType = {
  children: ReactNode;
  followsIcon?: boolean;
  hasIconAfter?: boolean;
  hasIconBefore: boolean;
  isLoading: boolean;
  isVertical?: boolean;
};

function getMargin({ hasIconAfter, hasIconBefore, isVertical }: PropsType) {
  const topMargin = isVertical ? Spacing.L3 : 0;
  const leftMargin = hasIconBefore && !isVertical ? Spacing.L2 : 0;
  const rightMargin = hasIconAfter ? Spacing.L2 : 0;
  return `${topMargin} ${rightMargin} 0 ${leftMargin}`;
}

export const ButtonContent: ComponentType<PropsType> = styled.span`
  margin: ${getMargin};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  ${getLoadingStyle};
`;
