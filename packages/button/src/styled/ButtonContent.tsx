import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { ifRtl } from '@tablecheck/tablekit-utils';
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

// function getMargin({ hasIconAfter, hasIconBefore, isVertical }: PropsType) {
//   const topMargin = isVertical ? Spacing.L3 : 0;
//   const leftMargin = hasIconBefore && !isVertical ? Spacing.L2 : 0;
//   const rightMargin = hasIconAfter ? Spacing.L2 : 0;
//   return `${topMargin} ${rightMargin} 0 ${leftMargin}`;
// }

export const ButtonContent: ComponentType<PropsType> = styled.span`
  ${({ hasIconAfter, hasIconBefore, isVertical, ...props }) => {
    const topMargin = isVertical ? Spacing.L3 : 0;
    const beforeMargin = hasIconBefore && !isVertical ? Spacing.L2 : 0;
    const afterMargin = hasIconAfter ? Spacing.L2 : 0;

    const leftMargin = ifRtl(afterMargin, beforeMargin)(props);
    const rightMargin = ifRtl(beforeMargin, afterMargin)(props);

    return `margin: ${topMargin} ${rightMargin} 0 ${leftMargin};`;
  }}

  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  ${getLoadingStyle};
`;
