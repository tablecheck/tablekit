import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const radioThemeNamespace = PackageNamespace.Radio;

interface PackageTheme {
  default: {
    backgroundColor: PackageThemeValue;
    textColor: PackageThemeValue;
    borderColor: PackageThemeValue;
  };
  disabled: {
    backgroundColor: PackageThemeValue;
    textColor: PackageThemeValue;
  };
}

declare module '@emotion/react' {
  export interface Theme {
    [radioThemeNamespace]: PackageTheme;
  }
}

export const radioClassicTheme: PackageTheme = {
  default: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
  },
  disabled: {
    backgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.disabledBackground,
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle
  }
};

export const radioDarkTheme: PackageTheme = radioClassicTheme;
