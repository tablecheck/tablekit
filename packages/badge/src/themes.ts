import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const badgeThemeNamespace = PackageNamespace.Badge;

interface PackageTheme {
  outline: {
    textColor: PackageThemeValue;
    borderColor: PackageThemeValue;
  };
  solid: {
    textColor: PackageThemeValue;
    backgroundColor: PackageThemeValue;
  };
}

declare module '@emotion/react' {
  export interface Theme {
    [badgeThemeNamespace]: PackageTheme;
  }
}

export const badgeClassicTheme: PackageTheme = {
  outline: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
  },
  solid: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surfaceLow,
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
  }
};

export const badgeDarkTheme: PackageTheme = badgeClassicTheme;

export const badgeRedTheme: PackageTheme = {
  solid: {
    textColor: 'white',
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger
  },
  outline: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger
  }
};
