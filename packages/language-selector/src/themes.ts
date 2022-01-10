import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';

export const languageSelectorThemeNamespace = PackageNamespace.LanguageSelector;

type PackageTheme = Record<never, never>;

declare module '@emotion/react' {
  export interface Theme {
    [languageSelectorThemeNamespace]: PackageTheme;
  }
}

export const languageSelectorClassicTheme: PackageTheme = {};

export const languageSelectorDarkTheme: PackageTheme =
  languageSelectorClassicTheme;
