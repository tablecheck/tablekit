import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const topnavThemeNamespace = PackageNamespace.Topnav;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  textColor: PackageThemeValue;
  borderColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [topnavThemeNamespace]: PackageTheme;
  }
}

export const topnavClassicTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  borderColor: COLORS.GRAY.L3
};

export const topnavDarkTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
};
