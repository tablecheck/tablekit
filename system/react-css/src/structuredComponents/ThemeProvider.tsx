import * as React from 'react';

const ThemeContext = React.createContext({
  isRtl: false,
  isDark: false
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTablekitTheme() {
  return React.useContext(ThemeContext);
}

function useIsDark(theme: 'light' | 'dark' | 'system'): boolean {
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
    <ThemeContext.Provider
      value={React.useMemo(
        () => ({
          isRtl,
          isDark
        }),
        [isDark, isRtl]
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
