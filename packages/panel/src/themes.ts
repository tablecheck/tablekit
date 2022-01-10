import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  ThemeOnlyProps,
  PackageThemeValue
} from '@tablecheck/tablekit-utils';

export const baseDefaultWidth = 360;
export const defaultMaxWidth = 1000;
export const baseDefaultHeight = 360;
export const defaultMaxHeight = '100vh';

export const panelThemeNamespace = PackageNamespace.Panel;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  borderColor: PackageThemeValue;
  borderColorHover: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [panelThemeNamespace]: PackageTheme;
  }
}

export const panelClassicTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  borderColorHover: ({ theme }: ThemeOnlyProps) => theme.colors.primary
};

export const panelDarkTheme: PackageTheme = panelClassicTheme;
