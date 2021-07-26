import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

import { TagAppearance } from './types';

export const tagThemeNamespace = PackageNamespace.Tag;

export interface AppearanceTheme {
  textColor?: PackageThemeValue;
  backgroundColor?: PackageThemeValue;
  hoverBackgroundColor?: PackageThemeValue;
  selectedBackgroundColor?: PackageThemeValue;
  selectedTextColor?: PackageThemeValue;
  hoverSelectedBackgroundColor?: PackageThemeValue;
}

export type PackageTheme = {
  common?: {
    borderColor?: PackageThemeValue;
  };
} & { [key in TagAppearance]: AppearanceTheme };

declare module '@emotion/react' {
  export interface Theme {
    [tagThemeNamespace]: PackageTheme;
  }
}

export const tagClassicTheme: PackageTheme = {
  common: {
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
  },
  [TagAppearance.Outline]: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: 'transparent',
    hoverBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    selectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary,
    selectedTextColor: 'white',
    hoverSelectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary2
  },
  [TagAppearance.Solid]: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: COLORS.GRAY.L3,
    hoverBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    selectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary,
    selectedTextColor: 'white',
    hoverSelectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary2
  }
};

export const tagDarkTheme: PackageTheme = {
  common: {
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border
  },
  [TagAppearance.Outline]: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: 'transparent',
    hoverBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    selectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary,
    selectedTextColor: 'white',
    hoverSelectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary2
  },
  [TagAppearance.Solid]: {
    textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    backgroundColor: COLORS.WHITE_TRANSLUCENT.L4,
    hoverBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverNeutralBackground,
    selectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary,
    selectedTextColor: 'white',
    hoverSelectedBackgroundColor: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primary2
  }
};
