import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

import { Appearance } from './types';

export const alertThemeNamespace = PackageNamespace.Alert;

type PackageTheme = {
  [key in Appearance]: {
    iconColor: PackageThemeValue;
    fillColor: PackageThemeValue;
    borderColor: PackageThemeValue;
  };
} & {
  backgroundColor: PackageThemeValue;
  boxShadowColor: PackageThemeValue;
  closeButton: {
    color: PackageThemeValue;
  };
  textColor: PackageThemeValue;
};

declare module '@emotion/react' {
  export interface Theme {
    [alertThemeNamespace]: PackageTheme;
  }
}

export const alertClassicTheme: PackageTheme = {
  [Appearance.Primary]: {
    iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.iconFill,
    fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
  },
  [Appearance.Success]: {
    iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.success,
    fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.success,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.success
  },
  [Appearance.Warning]: {
    iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.warning,
    fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.warning,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.warning
  },
  [Appearance.Danger]: {
    iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
    fillColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
    borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger
  },
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  boxShadowColor: COLORS.GRAY_TRANSLUCENT.L1,
  closeButton: {
    color: ({ theme }: ThemeOnlyProps) => theme.colors.iconFill
  },
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text
};

export const alertDarkTheme: PackageTheme = alertClassicTheme;
