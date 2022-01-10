import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';

export const inputButtonThemeNamespace = PackageNamespace.InputButton;

export type PackageTheme = Record<never, never>;

declare module '@emotion/react' {
  export interface Theme {
    [inputButtonThemeNamespace]: PackageTheme;
  }
}

export const inputButtonClassicTheme: PackageTheme = {};

export const inputButtonDarkTheme: PackageTheme = {};
