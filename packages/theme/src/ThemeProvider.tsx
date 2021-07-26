import {
  Global,
  Theme,
  ThemeProvider as EmotionThemeProvider
} from '@emotion/react';
import styled from '@emotion/styled';
import { ordered as locales } from '@tablecheck/locales';
import { ReactNode, useMemo } from 'react';

import { Spacing } from './Theme';
import * as COLORS from './colors';
import { getFont, getFontFamily } from './fontSettings';
import { FontWeight } from './fonts/weights';
import { CLASSIC_COLORS, DARK_COLORS } from './palettes';
import { resetCss } from './resetCss';
import type { ThemeColors } from './types';

/**
 * IMPORTANT: Any changes to the exports of this file need to be mirrored inside
 * the root ThemeProvider.d.ts
 */

type PropsType = {
  children: ReactNode;

  /** Optional Country to resolve typography and fonts */
  country?: string;

  /** all font weights passed in here will be pre-loaded */
  fontWeights?: FontWeight[];

  /** Optional flag to indicate the theme has dark colors */
  isDark?: boolean;

  /** Optional Locale to resolve typography and fonts */
  locale?: string;

  /** Function used to render the head nodes correctly,
   * required if `useLocalStyles` is false
   * usually `(nodes) => <Helmet>{nodes}</Helmet>` */
  renderHeadNodes?: (nodes: ReactNode[]) => ReactNode;

  /** Optional Theme value to pass through to emotion-theming's ThemeProvider */
  theme?: Partial<Theme>;

  /** If true the font and typography styles will be restricted to this component */
  useLocalStyles?: boolean;
};

const themeColorKeys = Object.keys(CLASSIC_COLORS) as (keyof ThemeColors)[];

function validateTheme(themeArg?: Partial<Theme>) {
  if (!themeArg || !themeArg.colors) return;
  const theme = themeArg as Theme;
  const unsetColorKeys = themeColorKeys.reduce<(keyof ThemeColors)[]>(
    (unsetKeys, key: keyof ThemeColors) => {
      if (!theme.colors[key]) {
        unsetKeys.push(key);
      }
      return unsetKeys;
    },
    []
  );
  if (unsetColorKeys.length) {
    throw new Error(
      `ThemeProvider is missing the following values; ${unsetColorKeys
        .map((key) => `colors.${key}`)
        .join(
          ','
        )}. Please extend CLASSIC_COLORS or DARK_COLORS with your custom theme.`
    );
  }
}

const VersionTag = styled.div`
  display: none;
  position: fixed;
  bottom: ${Spacing.L1};
  left: ${Spacing.L1};
  padding: ${Spacing.L2};
  box-shadow: 0px 0px 4px ${COLORS.YELLOW.L5};
  border: 1px solid ${COLORS.YELLOW.L5};
  border-radius: ${Spacing.L1};
  background: ${COLORS.BLUE.L5};
  color: white;
  z-index: 99999;
`;

const Local = styled.div<{ fontFamily: string }>`
  ${({ fontFamily }) => fontFamily};
`;

export const ThemeProvider = ({
  country,
  locale,
  children,
  theme = {},
  useLocalStyles = false,
  isDark = false,
  fontWeights,
  renderHeadNodes = (nodes) => <>{nodes}</>
}: PropsType): JSX.Element => {
  const [fontHeadNodes, fontFace] = useMemo(
    () => getFont(locale, country, fontWeights),
    [country, fontWeights, locale]
  );
  const [constructedTheme, globalStyles, resolvedFontFamily] = useMemo(() => {
    validateTheme(theme);
    const fontFamily = `font-family: ${getFontFamily(locale, country)};`;
    let isRtl = false;
    if (locale) {
      const matchedLocale = locales.find(({ code }) => code === locale);
      isRtl = matchedLocale ? matchedLocale.dir === 'rtl' : false;
    }
    return [
      {
        colors: isDark ? DARK_COLORS : CLASSIC_COLORS,
        ...theme,
        fontFamily,
        isRtl,
        isDark
      } as Theme,
      resetCss(fontFamily, theme.colors, fontWeights),
      fontFamily
    ];
  }, [country, fontWeights, isDark, locale, theme]);
  if (useLocalStyles) {
    return (
      <EmotionThemeProvider theme={constructedTheme}>
        <Global styles={fontFace} />
        <Local fontFamily={resolvedFontFamily}>{children}</Local>
      </EmotionThemeProvider>
    );
  }
  return (
    <EmotionThemeProvider theme={constructedTheme}>
      {renderHeadNodes(fontHeadNodes)}
      <Global styles={fontFace} />
      <Global styles={globalStyles} />
      {children}
      {process.env.NODE_ENV !== 'test' && CONFIG.appVersion ? (
        <VersionTag id="tablecheck-version-tag">
          App Version: {CONFIG.appVersion}
        </VersionTag>
      ) : null}
    </EmotionThemeProvider>
  );
};
