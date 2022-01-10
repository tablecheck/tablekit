import styled from '@emotion/styled';
import { DEPTH, ZIndex } from '@tablecheck/tablekit-theme';
import { getThemeValue, mediaQuery } from '@tablecheck/tablekit-utils';

import { panelClassicTheme, panelThemeNamespace } from '../themes';
import { PanelContainerProps, PanelPosition } from '../types';

const slideIn = '0.3s cubic-bezier(0.77, 0.2, 0.05, 1)';

export const StaticContainer = styled('div', {
  shouldForwardProp: (prop: keyof PanelContainerProps) =>
    ['height', 'isOpen', 'position', 'width'].indexOf(prop) === -1
})<PanelContainerProps>`
  display: flex;
  flex-direction: column;
  position: fixed !important;
  transition: transform ${slideIn};
  ${({ position }) => `${position}: 0;`};
  ${({ isOpen, position }) => {
    if (position === PanelPosition.Top || position === PanelPosition.Bottom) {
      return `
      left: 0;
      transform: ${
        isOpen
          ? 'translateY(0)'
          : `translateY(${position === PanelPosition.Top ? '-' : ''}110%)`
      }`;
    }
    return `
    top: 0;
    transform: ${
      isOpen
        ? 'translateX(0)'
        : `translateX(${position === PanelPosition.Left ? '-' : ''}110%)`
    }`;
  }};
  ${mediaQuery('width', (value) => `width: ${value || '100%'}`)};
  ${mediaQuery('height', (value) => `height: ${value || '100%'}`)};
  ${DEPTH.FIXED};
  background-color: ${getThemeValue(
    `${panelThemeNamespace}.backgroundColor`,
    panelClassicTheme.backgroundColor
  )};
  z-index: ${ZIndex.Sidenav};
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1);
`;

StaticContainer.displayName = 'StaticPanelContainer';
