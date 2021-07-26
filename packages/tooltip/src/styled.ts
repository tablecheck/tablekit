import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BORDER_RADIUS, ZIndex, Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { tooltipThemeNamespace, tooltipClassicTheme } from './themes';
import { TooltipContainerProps } from './types';

const truncate = (p: TooltipContainerProps) =>
  p.shouldTruncate
    ? css`
        max-width: 420px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
    : '';

export const TooltipPrimitive = styled.div`
  z-index: ${ZIndex.Tooltip};
  pointer-events: none;
  position: fixed;
`;

export const Tooltip = styled(TooltipPrimitive)<TooltipContainerProps>`
  background-color: ${getThemeValue(
    `${tooltipThemeNamespace}.backgroundColor`,
    tooltipClassicTheme.backgroundColor
  )};
  color: ${getThemeValue(
    `${tooltipThemeNamespace}.textColor`,
    tooltipClassicTheme.textColor
  )};
  border-radius: ${BORDER_RADIUS}px;
  box-sizing: border-box;
  ${Typography.Body2};
  left: 0;
  line-height: 16px;
  max-width: 240px;
  padding: ${Spacing.L1} ${Spacing.L2};
  top: 0;
  /* Edge does not support overflow-wrap */
  word-wrap: break-word;
  overflow-wrap: break-word;
  ${truncate};
`;

export const Container = styled.div`
  position: relative;
`;
