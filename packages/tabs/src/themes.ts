import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const tabsThemeNamespace = PackageNamespace.Tabs;

interface PackageTheme {
  borderBottomColor: PackageThemeValue;
  itemBackgroundColor: PackageThemeValue;
  textColor: PackageThemeValue;
  selectedBackground: PackageThemeValue;
  selectedBackgroundHover: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [tabsThemeNamespace]: PackageTheme;
  }
}

export const tabsClassicTheme: PackageTheme = {
  borderBottomColor: COLORS.GRAY.L3,
  itemBackgroundColor: COLORS.GRAY_TRANSLUCENT.L1,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  selectedBackground: ({ theme }: ThemeOnlyProps) =>
    theme.colors.selectedBackground,
  selectedBackgroundHover: ({ theme }: ThemeOnlyProps) =>
    theme.colors.hoverPrimaryBackground
};

export const tabsDarkTheme: PackageTheme = {
  borderBottomColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  itemBackgroundColor: ({ theme }: ThemeOnlyProps) =>
    theme.colors.hoverNeutralBackground,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  selectedBackground: ({ theme }: ThemeOnlyProps) =>
    theme.colors.selectedBackground,
  selectedBackgroundHover: ({ theme }: ThemeOnlyProps) =>
    theme.colors.hoverPrimaryBackground
};
