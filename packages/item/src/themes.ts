import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const itemThemeNamespace = PackageNamespace.Item;

interface PackageTheme {
  default: {
    background: PackageThemeValue;
    textColor: PackageThemeValue;
    hoverBackground: PackageThemeValue;
    hoverTextColor: PackageThemeValue;
    beforeAfterColor: PackageThemeValue;
  };
  selected: {
    background: PackageThemeValue;
    textColor: PackageThemeValue;
    borderColor: PackageThemeValue;
    beforeAfterColor: PackageThemeValue;
  };
  disabled: {
    textColor: PackageThemeValue;
    beforeAfterColor: PackageThemeValue;
  };
}

declare module '@emotion/react' {
  export interface Theme {
    [itemThemeNamespace]: PackageTheme;
  }
}

export const itemClassicTheme: PackageTheme = {
  default: {
    background: 'transparent',
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    hoverBackground: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    hoverTextColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    beforeAfterColor: ({ theme }: ThemeOnlyProps) => theme.colors.iconFill
  },
  selected: {
    background: ({ theme }: ThemeOnlyProps) => theme.colors.selectedBackground,
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    beforeAfterColor: ({ theme }: ThemeOnlyProps) => theme.colors.iconFill
  },
  disabled: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle,
    beforeAfterColor: ({ theme }: ThemeOnlyProps) => theme.colors.iconFill
  }
};

export const itemDarkTheme: PackageTheme = itemClassicTheme;
