import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export interface PackageTheme {
  fillColor?: PackageThemeValue;
}

export const spinnerThemeNamespace = PackageNamespace.Spinner;

declare module '@emotion/react' {
  export interface Theme {
    [spinnerThemeNamespace]: PackageTheme;
  }
}

export const spinnerClassicTheme: PackageTheme = {
  fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary2
};

export const spinnerDarkTheme: PackageTheme = spinnerClassicTheme;
