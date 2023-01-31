import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { styled, themes } from '@storybook/theming';
import { LocaleCode } from '@tablecheck/locales';
import * as React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

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
  layout: 'fullscreen',
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

// use a special cache so we can check :focus :active etc easily in stories
const emotionCache = createCache({
  key: 'key',
  stylisPlugins: [
    (_, __, selectors) => {
      for (const selector of selectors) {
        if (
          selector.value.match(
            /:(active|hover|focus|focus-visible)(:|$|\.|,)/gi
          )
        ) {
          selector.props = (
            Array.isArray(selector.props) ? selector.props : [selector.props]
          ).reduce((result, prop) => {
            if (prop.match(/:(active|hover|focus|focus-visible)(:|$|\.|,)/gi)) {
              return result.concat([
                prop,
                prop
                  .replace(
                    /:(active|hover|focus|focus-visible)(:|$|\.|,)/gi,
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

const StoryWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  align-items: stretch;
  min-width: 100vw;
  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--surface);
    padding: var(--spacing-l7) var(--spacing-l4);
  }
`;

const ThemeInner = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  justify-items: flex-start;
  align-self: flex-end;
  color: var(--text);
  & :nth-child(n) {
    justify-self: flex-end;
  }
  & :nth-child(2n) {
    justify-self: flex-start;
  }
`;

const Code = styled.pre`
  display: inline-block;
  padding: 4px 6px;
  border: 1px solid var(--info);
  border-radius: var(--border-radius-small);
  background: var(--info-surface);
  color: var(--info-text);
`;

declare global {
  interface Window {
    firstStorybookGridRef?: HTMLDivElement;
  }
}

function handleGridRef(ref: HTMLDivElement) {
  if (!window.firstStorybookGridRef) window.firstStorybookGridRef = ref;
  else {
    const width1 = ref.getBoundingClientRect().width;
    const width2 = window.firstStorybookGridRef.getBoundingClientRect().width;
    const width = `${Math.max(width1, width2)}px`;
    ref.style.setProperty('min-width', width);
    window.firstStorybookGridRef.style.setProperty('min-width', width);
    window.firstStorybookGridRef = undefined;
  }
}

export const decorators = [
  (story: () => JSX.Element, context): JSX.Element => {
    const isDark = useDarkMode();
    const direction = getDirection();
    const { classlessSelector, classySelector, packageName } =
      context.parameters;
    const gridStyles = {
      '--variants': context.parameters.variants?.length || 1
    };
    const storyHeader =
      context.parameters.variants?.length > 1 &&
      context.parameters.variants.every(
        (variant: any) => typeof variant === 'string'
      )
        ? context.parameters.variants.map((variant: string) => (
            <b>{variant.charAt(0).toUpperCase() + variant.slice(1)}</b>
          ))
        : null;
    const selectors = [
      { value: classlessSelector, name: 'Classless Selector' },
      { value: classySelector, name: 'Classy Selector' },
      { value: packageName, name: 'Package Name' }
    ]
      .filter(({ value }) => !!value)
      .map(({ value, ...rest }) => ({
        ...rest,
        value: Array.isArray(value) ? value.join(', ') : value
      }));
    return (
      <CacheProvider value={emotionCache}>
        <StoryWrapper>
          <ThemeProvider
            useLocalCssVariables
            theme={isDark ? 'dark' : 'light'}
            lang={direction === 'rtl' ? LocaleCode.Arabic : LocaleCode.English}
            isRtl={direction === 'rtl'}
          >
            <ThemeInner>
              {selectors.length ? (
                <Selectors>
                  {selectors.map(({ name, value }) => (
                    <>
                      <b>{name}:</b>
                      <Code>{value}</Code>
                    </>
                  ))}
                </Selectors>
              ) : null}
              <Grid ref={handleGridRef} style={gridStyles as any}>
                {storyHeader}
                {story()}
              </Grid>
            </ThemeInner>
          </ThemeProvider>
          <ThemeProvider
            useLocalCssVariables
            theme={isDark ? 'light' : 'dark'}
            lang={direction === 'rtl' ? LocaleCode.Arabic : LocaleCode.English}
            isRtl={direction === 'rtl'}
          >
            <ThemeInner>
              <Grid ref={handleGridRef} style={gridStyles as any}>
                {storyHeader}
                {story()}
              </Grid>
            </ThemeInner>
          </ThemeProvider>
        </StoryWrapper>
      </CacheProvider>
    );
  }
];
