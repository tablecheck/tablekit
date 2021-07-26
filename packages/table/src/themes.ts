import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const tableThemeNamespace = PackageNamespace.Table;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  borderColor: PackageThemeValue;
  headerBorderColor: PackageThemeValue;
  hoverRowColor: PackageThemeValue;
  textColor: PackageThemeValue;
  stripedRowColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [tableThemeNamespace]: PackageTheme;
  }
}

export const tableClassicTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  headerBorderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  hoverRowColor: ({ theme }: ThemeOnlyProps) =>
    theme.colors.hoverNeutralBackground,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  stripedRowColor: ({ theme }: ThemeOnlyProps) => theme.colors.surfaceLow
};

export const tableDarkTheme: PackageTheme = tableClassicTheme;
