import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css
} from '@emotion/react';
import * as React from 'react';

import { ltrSupport } from '../themeVariables/ltrSupport';
import { theme as themeStyles } from '../themeVariables/theme';
import { typography } from '../themeVariables/typography';
import { resetCss } from '../utils/resetCss';

const globalStyles = css`
  // TODO add font-face from fontSettings
  ${resetCss};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
`;

export function ThemeProvider({
  isRtl,
  lang,
  theme = 'light',
  children
}: {
  isRtl?: boolean;
  lang?: string;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}): JSX.Element {
  React.useEffect(() => {
    if (lang) {
      document.documentElement.setAttribute('lang', lang);
    }
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.dataset.theme = theme;
  }, [isRtl, lang, theme]);
  return (
    <EmotionThemeProvider
      theme={(parentTheme) => ({
        ...(parentTheme || {}),
        isRtl,
        isDark: theme === 'dark'
      })}
    >
      <Global styles={globalStyles} />
      {children}
    </EmotionThemeProvider>
  );
}
