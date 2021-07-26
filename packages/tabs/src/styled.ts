import styled from '@emotion/styled';
import { Spacing, FieldHeight } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { ifRtl, getThemeValue } from '@tablecheck/tablekit-utils';

import { tabsThemeNamespace, tabsClassicTheme } from './themes';
import { TabsAlignment, TabsProps } from './types';

const BORDER_SIZE = '4px';

export const IS_CLICKED_ATTR = 'isClicked';
export const IS_CLICKED_SELECTOR = '[data-is-clicked="true"]';

const TRANSITION_SPEED = '120ms';
const TRANSITION_SETTINGS = `${TRANSITION_SPEED} ease-in-out`;

export const TabsWrapper = styled.div`
  position: relative;
`;

export const TabsNavigation = styled.div<{
  align: TabsProps['align'];
}>`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  ${Typography.Body2};
  text-align: ${({ align }) => {
    if (align === TabsAlignment.Center) return TabsAlignment.Center;
    return align === TabsAlignment.Left
      ? ifRtl(TabsAlignment.Right, TabsAlignment.Left)
      : ifRtl(TabsAlignment.Left, TabsAlignment.Right);
  }};

  &:after {
    content: '';
    position: relative;
    display: block;
    border-bottom: 1px solid
      ${getThemeValue(
        `${tabsThemeNamespace}.borderBottomColor`,
        tabsClassicTheme.borderBottomColor
      )};
  }
`;

export const TabItem = styled.button<{
  isActive: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${FieldHeight.Regular};
  padding: 0 ${Spacing.L4};
  position: relative;
  outline: none;
  cursor: pointer;
  background-color: ${({ isActive, ...props }) =>
    isActive
      ? `${getThemeValue(
          `${tabsThemeNamespace}.selectedBackground`,
          tabsClassicTheme.selectedBackground
        )(props)}`
      : 'transparent'};
  ${({ disabled }) => disabled && 'pointer-events: none; opacity: 0.5'};
  color: ${getThemeValue(
    `${tabsThemeNamespace}.textColor`,
    tabsClassicTheme.textColor
  )};

  &:hover {
    background-color: ${({ isActive, ...props }) =>
      isActive
        ? `${getThemeValue(
            `${tabsThemeNamespace}.selectedBackgroundHover`,
            tabsClassicTheme.selectedBackgroundHover
          )(props)}`
        : `${getThemeValue(
            `${tabsThemeNamespace}.itemBackgroundColor`,
            tabsClassicTheme.itemBackgroundColor
          )(props)}`};
  }

  // focus display
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    transition: box-shadow ${TRANSITION_SETTINGS};
    box-shadow: 0 0 0 2px transparent;
  }

  &:focus::before {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.secondary2};
  }

  &${IS_CLICKED_SELECTOR}::before {
    display: none !important;
  }
`;

export const NavLine = styled.span`
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${BORDER_SIZE};
  width: 100%;
  background: linear-gradient(
    140deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primary2}
  );
  border-radius: 2px;
  z-index: 1;
`;
