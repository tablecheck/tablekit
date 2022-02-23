import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';

export const inputGroupThemeNamespace = PackageNamespace.InputGroup;

type PackageTheme = Record<never, never>;

declare module '@emotion/react' {
  export interface Theme {
    [inputGroupThemeNamespace]: PackageTheme;
  }
}

export const inputGroupClassicTheme: PackageTheme = {};

export const inputGroupDarkTheme: PackageTheme = {};
