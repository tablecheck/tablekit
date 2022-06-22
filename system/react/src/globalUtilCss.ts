import { css } from '@emotion/react';

import * as tablekitTheme from './theme';
import { tooltipGlobalStyles } from './tooltip';
import { typography } from './typography';

const globalUtils = css`
  [dir='ltr'],
  :root {
    --ltr-space: 1px;
    --rtl-space: 0px;
  }
  [dir='rtl'] {
    --ltr-space: 0px;
    --rtl-space: 1px;
  }
`;

export function buildCssVars(
  isDark: boolean,
  selector?: string
): ReturnType<typeof css> {
  return css`
    ${selector ? `${selector} {` : ''}
    color-scheme: ${isDark ? 'dark' : 'light'};
    ${isDark ? tablekitTheme.darkColors : tablekitTheme.lightColors};
    ${tablekitTheme.sentimentColors};
    ${tablekitTheme.utilityColors};
    ${tablekitTheme.effectStyles};
    ${typography};
    ${selector ? `}` : ''}
    ${globalUtils};
    ${tooltipGlobalStyles};
  `;
}
