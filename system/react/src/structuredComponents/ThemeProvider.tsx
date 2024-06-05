import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css
} from '@emotion/react';
import {
  constants,
  font,
  ltrSupport,
  resetCss,
  theme as themeStyles,
  typography,
  keyframes
} from '@tablecheck/tablekit-core';
import * as React from 'react';

const globalStyles = css`
  ${resetCss};
  ${font};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
  ${constants};
  ${keyframes};
`;

declare module '@emotion/react' {
  export interface Theme {
    isRtl: boolean;
    isDark: boolean;
  }
}

function useIsDark(theme: 'light' | 'dark' | 'system') {
  const [isDark, setIsDark] = React.useState(() => {
    if (theme === 'system') {
      return (
        window.matchMedia?.('(prefers-color-scheme:dark)').matches || false
      );
    }
    return theme === 'dark';
  });
  React.useEffect(() => {
    if (theme !== 'system') return;
    const watcher = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };
    watcher.addEventListener('change', listener);
    return () => {
      watcher.removeEventListener('change', listener);
    };
  }, [theme, setIsDark]);
  return isDark;
}

export function ThemeProvider({
  isRtl = false,
  lang,
  country,
  theme = 'system',
  children,
  useLocalCssVariables
}: {
  isRtl?: boolean;
  lang?: string;
  country?: string;
  theme?: 'light' | 'dark' | 'system';
  children: React.ReactNode;
  useLocalCssVariables?: boolean;
}): JSX.Element {
  React.useEffect(() => {
    if (useLocalCssVariables) return;
    const node = document.documentElement;
    if (lang) {
      node.setAttribute('lang', lang);
    }
    if (country) {
      node.dataset.country = country;
    }
    node.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    node.dataset.theme = theme;
  }, [isRtl, lang, theme, country, useLocalCssVariables]);
  const wrapperProps = useLocalCssVariables
    ? {
        lang,
        'data-country': country,
        dir: isRtl ? 'rtl' : 'ltr',
        'data-theme': theme
      }
    : {};
  const isDark = useIsDark(theme);
  return (
    <EmotionThemeProvider
      theme={(parentTheme) => ({
        ...(parentTheme || {}),
        isRtl,
        isDark
      })}
    >
      <Global styles={globalStyles} />
      {useLocalCssVariables ? (
        <div {...wrapperProps}>{children}</div>
      ) : (
        children
      )}
    </EmotionThemeProvider>
  );
}
