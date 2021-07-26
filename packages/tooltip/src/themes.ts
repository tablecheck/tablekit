import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type { PackageThemeValue } from '@tablecheck/tablekit-utils';

export const tooltipThemeNamespace = PackageNamespace.Tooltip;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  textColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [tooltipThemeNamespace]: PackageTheme;
  }
}

export const tooltipClassicTheme: PackageTheme = {
  backgroundColor: COLORS.GRAY.L9,
  textColor: 'white'
};

export const tooltipDarkTheme: PackageTheme = tooltipClassicTheme;
