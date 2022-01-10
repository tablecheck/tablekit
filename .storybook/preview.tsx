import { themes } from '@storybook/theming';
import * as React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import { ThemeProvider, CLASSIC_COLORS, DARK_COLORS } from '../packages/theme';

import './decorators';
import { DocsContainer } from './DocContainer';

const commonTheme = {
  brandTitle: 'Tablekit',
  brandUrl: 'https://tablebkit.tablecheck.com',
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
  docs: {
    container: DocsContainer
  },
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

export const decorators = [
  (story: () => JSX.Element): JSX.Element => {
    const isDark = useDarkMode();
    const theme = {
      isDark,
      colors: isDark
        ? DARK_COLORS
        : {
            ...CLASSIC_COLORS,
            canvas: 'white'
          }
    };
    return (
      <ThemeProvider theme={theme} isDark={isDark}>
        {story()}
      </ThemeProvider>
    );
  }
];
