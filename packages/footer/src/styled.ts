import styled from '@emotion/styled';
import { Spacing, COLORS } from '@tablecheck/tablekit-theme';
import {
  Typography,
  Link as StyledLink
} from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import { footerThemeNamespace, footerClassicTheme } from './themes';
import { StyleProps } from './types';

export const DEFAULT_MAX_WIDTH = '1600px';
export const DEFAULT_MOBILE_BREAKPOINT = '768px';

export const FooterContainer = styled.div<StyleProps>`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth};
  background: ${getThemeValue(
    `${footerThemeNamespace}.background`,
    footerClassicTheme.background
  )};
  width: 100%;
  margin: 0 auto;
  color: ${getThemeValue(
    `${footerThemeNamespace}.textColor`,
    footerClassicTheme.textColor
  )};
  padding: 64px ${Spacing.L4} 64px;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    padding: 64px ${Spacing.L8} 96px;
  }
`;

export const ColumnItem = styled(StyledLink)<
  ThemeOnlyProps & {
    mobileBreakpoint: string;
  }
>`
  text-align: left;
  outline: none;
  cursor: pointer;
  white-space: nowrap;

  color: ${COLORS.GRAY.L1};
  &:visited {
    color: ${COLORS.GRAY.L3};
  }
  &:hover,
  &:active {
    color: ${COLORS.GRAY.L4};
  }

  ${Typography.Body1};
  padding: ${Spacing.L2} 0;
  margin-bottom: 0;
  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    ${Typography.Body1};
    padding: 0;
    margin-bottom: ${Spacing.L2};
  }
`;
