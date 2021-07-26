import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const inlineDialogThemeNamespace = PackageNamespace.InlineDialog;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  textColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [inlineDialogThemeNamespace]: PackageTheme;
  }
}

export const inlineDialogClassicTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
};

export const inlineDialogDarkTheme: PackageTheme = inlineDialogClassicTheme;
