import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css
} from '@emotion/react';
import * as React from 'react';
import { ltrSupport } from 'themeVariables/ltrSupport';
import { theme as themeStyles } from 'themeVariables/theme';
import { typography } from 'themeVariables/typography';
import { resetCss } from 'utils/resetCss';

const globalStyles = css`
  // TODO add font-face from fontSettings
  ${resetCss};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
`;

export function ThemeProvider({
  isRtl,
  theme = 'light',
  children
}: {
  isRtl?: boolean;
  theme?: 'light' | 'dark';
  children: React.ReactNode;
}): JSX.Element {
  return (
    <EmotionThemeProvider
      theme={(parentTheme) => ({
        ...(parentTheme || {}),
        isRtl,
        isDark: theme === 'dark'
      })}
    >
      <Global styles={globalStyles} />
      <div data-theme={theme} dir={isRtl ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </EmotionThemeProvider>
  );
}
