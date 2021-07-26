import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { getThemeValue, variant } from '@tablecheck/tablekit-utils';
import { Resizable } from 're-resizable';
import { ComponentType } from 'react';

import { panelClassicTheme, panelThemeNamespace } from '../themes';
import { PanelPosition, ResizablePanelContainerProps } from '../types';

import { StaticContainer } from './StaticPanel';

export const ResizablePanelContainer = styled(
  StaticContainer.withComponent<ComponentType>(Resizable)
)<ResizablePanelContainerProps>`
  > .resizer > div {
    transition: border-color 0.2s ease 0.1s;

    ${variant<PanelPosition, SerializedStyles, ResizablePanelContainerProps>({
      prop: 'position',
      variants: {
        [PanelPosition.Left]: css`
          border-right: 2px solid transparent;
          right: 0 !important;
        `,
        [PanelPosition.Right]: css`
          border-left: 2px solid transparent;
          left: 0 !important;
        `,
        [PanelPosition.Bottom]: css`
          border-top: 2px solid transparent;
          top: 0 !important;
        `
      }
    })}
    ::after {
      transition: border-color 0.2s ease 0.1s;
      display: block;
      width: 3px;
      height: 20px;
      content: '';
      border-left: 2px solid;
      border-right: 2px solid;
      border-color: ${getThemeValue(
        `${panelThemeNamespace}.borderColor`,
        panelClassicTheme.borderColor
      )};
      position: absolute;
      ${variant<PanelPosition, SerializedStyles, ResizablePanelContainerProps>({
        prop: 'position',
        variants: {
          [PanelPosition.Left]: css`
            top: 50%;
            transform: translateY(-50%);
            right: 5px;
          `,
          [PanelPosition.Right]: css`
            top: 50%;
            transform: translateY(-50%);
            left: 5px;
          `,
          [PanelPosition.Bottom]: css`
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
          `
        }
      })}
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -10px;
      right: -10px;
    }

    :hover,
    :active {
      ${({ position }) =>
        position === PanelPosition.Left
          ? 'border-right: 2px solid;'
          : 'border-left: 2px solid;'}
      border-color: ${getThemeValue(
        `${panelThemeNamespace}.borderColorHover`,
        panelClassicTheme.borderColorHover
      )};

      &::after {
        border-color: ${getThemeValue(
          `${panelThemeNamespace}.borderColorHover`,
          panelClassicTheme.borderColorHover
        )};
      }
    }
  }
`;
