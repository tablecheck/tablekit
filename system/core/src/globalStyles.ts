import { constants } from './themeVariables/constants';
import { theme as themeStyles } from './themeVariables/theme';
import { css } from './utils';
import { font } from './utils/font';
import { keyframes } from './utils/keyframes';
import { ltrSupport } from './utils/ltrSupport';
import { resetCss } from './utils/resetCss';
import { typography } from './utils/typography';

export const globalStyles = css`
  ${resetCss};
  ${font};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
  ${constants};
  ${keyframes};
`;
