import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type { PackageThemeValue } from '@tablecheck/tablekit-utils';

export const footerThemeNamespace = PackageNamespace.Footer;

interface PackageTheme {
  background: PackageThemeValue;
  textColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [footerThemeNamespace]: PackageTheme;
  }
}

export const footerClassicTheme: PackageTheme = {
  background: COLORS.GRAY.L9,
  textColor: COLORS.GRAY.L1
};

export const footerDarkTheme: PackageTheme = footerClassicTheme;
