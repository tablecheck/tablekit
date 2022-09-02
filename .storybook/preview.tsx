// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { styled, themes } from '@storybook/theming';
import { LocaleCode } from '@tablecheck/locales';
import * as React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useDirection } from 'storybook-rtl-addon';

// eslint-disable-next-line import/no-relative-packages
import { ThemeProvider } from '../system/react/src/components/ThemeProvider';

const commonTheme = {
  brandTitle: 'Tablekit',
  brandUrl: 'https://tablekit.tablecheck.com',
  fontBase: 'IBM Plex Sans',
  inputBorderRadius: 4
};

const lightTheme = {
  primary: '#5C11A6'
};

const darkTheme = {
  primary: '#A988EC'
};

// More options here:
// https://storybook.js.org/docs/react/configure/features-and-behavior
// https://storybook.js.org/docs/react/configure/theming
// https://github.com/hipstersmoothie/storybook-dark-mode
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  panelPosition: 'right',
  darkMode: {
    dark: {
      ...themes.dark,
      textColor: 'white',
      textInverseColor: 'rgba(255,255,255,0.9)',
      colorPrimary: darkTheme.primary,
      colorSecondary: darkTheme.primary,
      barSelectedColor: darkTheme.primary,
      brandTitle: commonTheme.brandTitle,
      brandUrl: commonTheme.brandUrl,
      fontBase: commonTheme.fontBase,
      inputBorderRadius: commonTheme.inputBorderRadius,
      brandImage:
        'https://cdn3.tablecheck.com/common/images/logos/tc/v1.0.0/logo-white.svg'
    },
    light: {
      ...themes.normal,
      colorPrimary: lightTheme.primary,
      colorSecondary: lightTheme.primary,
      barSelectedColor: lightTheme.primary,
      brandTitle: commonTheme.brandTitle,
      brandUrl: commonTheme.brandUrl,
      fontBase: commonTheme.fontBase,
      inputBorderRadius: commonTheme.inputBorderRadius,
      brandImage:
        'https://cdn3.tablecheck.com/common/images/logos/tc/v1.0.0/logo.svg'
    }
  }
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--variants), 1fr);
  grid-gap: var(--spacing-l7) var(--spacing-l4);
  padding: var(--spacing-l4);
  border: 1px dashed var(--primary);
  border-radius: var(--border-radius-small);
  align-items: flex-start;
  justify-items: flex-start;
`;

const Selectors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: var(--spacing-l3);
  margin-bottom: var(--spacing-l4);
  align-items: center;
`;

const Code = styled.pre`
  display: inline-block;
  padding: 4px 6px;
  border: 1px solid var(--info);
  border-radius: var(--border-radius-small);
  background: var(--info-surface);
  color: var(--info-text);
`;

// use a special cache so we can check :focus :active etc easily in stories
const emotionCache = createCache({
  key: 'key',
  stylisPlugins: [
    (_, __, selectors) => {
      for (const selector of selectors) {
        if (
          selector.value.match(/:(active|hover|focus|focus-visible)(:|$)/gi)
        ) {
          selector.props = (
            Array.isArray(selector.props) ? selector.props : [selector.props]
          ).reduce((result, prop) => {
            if (prop.match(/:(active|hover|focus|focus-visible)(:|$)/gi)) {
              return result.concat([
                prop,
                prop
                  .replace(
                    /:(active|hover|focus|focus-visible)(:|$)/gi,
                    '[data-pseudo="$1"]$2'
                  )
                  .replace('"focus-visible"', 'focus')
              ]);
            }
            return result.concat([prop]);
          }, [] as string[]);
        }
      }
    }
  ]
});

export const decorators = [
  (story: () => JSX.Element, context): JSX.Element => {
    const isDark = useDarkMode();
    const direction = useDirection(context);
    const { classlessSelector, classySelector } = context.parameters;
    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider
          theme={isDark ? 'dark' : 'light'}
          lang={direction === 'rtl' ? LocaleCode.Arabic : LocaleCode.English}
          isRtl={direction === 'rtl'}
        >
          {classlessSelector || classySelector ? (
            <Selectors>
              {classlessSelector ? (
                <>
                  <b>Classless Selector:</b>
                  <Code>{classlessSelector}</Code>
                </>
              ) : null}
              {classySelector ? (
                <>
                  <b>Classy Selector:</b>
                  <Code>{classySelector}</Code>
                </>
              ) : null}
            </Selectors>
          ) : null}
          <Grid
            style={{ '--variants': context.parameters.variants || 1 } as any}
          >
            {story()}
          </Grid>
        </ThemeProvider>
      </CacheProvider>
    );
  }
];
