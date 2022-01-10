import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';

export const phoneInputThemeNamespace = PackageNamespace.PhoneInput;

type PackageTheme = Record<never, never>;

declare module '@emotion/react' {
  export interface Theme {
    [phoneInputThemeNamespace]: PackageTheme;
  }
}

export const phoneInputClassicTheme: PackageTheme = {};

export const phoneInputDarkTheme: PackageTheme = phoneInputClassicTheme;
