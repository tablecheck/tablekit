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
  typography
} from '@tablecheck/tablekit-core';
import * as React from 'react';

const globalStyles = css`
  ${resetCss};
  ${font};
  ${ltrSupport};
  ${themeStyles};
  ${typography};
  ${constants}
`;

export function ThemeProvider({
  isRtl = false,
  lang,
  country,
  theme = 'light',
  children,
  useLocalCssVariables
}: {
  isRtl?: boolean;
  lang?: string;
  country?: string;
  theme?: 'light' | 'dark';
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
  return (
    <EmotionThemeProvider
      theme={(parentTheme) => ({
        ...(parentTheme || {}),
        isRtl,
        isDark: theme === 'dark'
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
