import styled from '@emotion/styled';
import { DEPTH, ZIndex } from '@tablecheck/tablekit-theme';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { topnavThemeNamespace, topnavDarkTheme } from './themes';

export const headerHeight = 52;

type Props = {
  height: number | undefined;
};

export const NavBarWrapper = styled.div<Props>`
  position: relative;
  z-index: ${ZIndex.Topnav};
  background-color: ${getThemeValue(
    `${topnavThemeNamespace}.backgroundColor`,
    topnavDarkTheme.backgroundColor
  )};
  color: ${getThemeValue(
    `${topnavThemeNamespace}.textColor`,
    topnavDarkTheme.textColor
  )};
  min-height: ${({ height }) => `${height || headerHeight}px`};
  width: 100%;
  box-shadow: ${DEPTH.OVERLAY.boxShadow};
  display: flex;
  justify-content: space-between;
`;

export const InlineContainer = styled.div<Props>`
  height: ${({ height }) => `${height || headerHeight}px`};
  flex: 1 1 auto;
`;
