import * as React from 'react';

const ThemeContext = React.createContext({
  isRtl: false,
  isDark: false
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTablekitTheme() {
  return React.useContext(ThemeContext);
}

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
    <ThemeContext.Provider
      value={React.useMemo(
        () => ({
          isRtl,
          isDark: theme === 'dark'
        }),
        [isRtl, theme]
      )}
    >
      {useLocalCssVariables ? (
        <div {...wrapperProps}>{children}</div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
}
