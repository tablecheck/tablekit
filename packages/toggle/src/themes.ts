import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const toggleThemeNamespace = PackageNamespace.Toggle;

interface CheckedTheme {
  backgroundColor: PackageThemeValue;
  backgroundColorHover: PackageThemeValue;
  backgroundColorDisabled: PackageThemeValue;
}

interface PackageTheme {
  textColor: PackageThemeValue;
  backgroundColorDisabled: PackageThemeValue;
  unchecked: CheckedTheme;
  checked: CheckedTheme;
}

declare module '@emotion/react' {
  export interface Theme {
    [toggleThemeNamespace]: PackageTheme;
  }
}

export const toggleClassicTheme: PackageTheme = {
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  backgroundColorDisabled: 'transparent',
  checked: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    backgroundColorHover: COLORS.PURPLE.L7,
    backgroundColorDisabled: ({ theme }: ThemeOnlyProps) =>
      theme.colors.disabledBackground
  },
  unchecked: {
    backgroundColor: COLORS.GRAY_TRANSLUCENT.L3,
    backgroundColorHover: COLORS.GRAY_TRANSLUCENT.L4,
    backgroundColorDisabled: ({ theme }: ThemeOnlyProps) =>
      theme.colors.disabledBackground
  }
};

export const toggleDarkTheme: PackageTheme = {
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  backgroundColorDisabled: ({ theme }: ThemeOnlyProps) =>
    theme.colors.surfaceLow,
  checked: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    backgroundColorHover: COLORS.PURPLE_TRANSLUCENT.L8,
    backgroundColorDisabled: ({ theme }: ThemeOnlyProps) =>
      theme.colors.surfaceLow
  },
  unchecked: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surfaceHigh,
    backgroundColorHover: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    backgroundColorDisabled: ({ theme }: ThemeOnlyProps) =>
      theme.colors.surfaceLow
  }
};
