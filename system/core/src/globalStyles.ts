import { css } from '@emotion/react';

import { constants } from './themeVariables/constants';
import { theme as themeStyles } from './themeVariables/theme';
import { font } from './utils/font';
import { ltrSupport } from './utils/ltrSupport';
import { resetCss } from './utils/resetCss';
import { typography } from './utils/typography';

export const globalStyles = css`
  ${resetCss};
  ${font};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
  ${constants}
`;
