import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const modalThemeNamespace = PackageNamespace.ModalDialog;

interface PackageTheme {
  body: {
    textColor: PackageThemeValue;
    backgroundColor: PackageThemeValue;
  };
  keylineColor: PackageThemeValue;
  keylineHeight: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [modalThemeNamespace]: PackageTheme;
  }
}

export const modalClassicTheme: PackageTheme = {
  body: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface
  },
  keylineColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  keylineHeight: '2px'
};

export const modalDarkTheme: PackageTheme = {
  body: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface
  },
  keylineColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  keylineHeight: '2px'
};
