import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

import { Appearance } from './types';

export const bannerThemeNamespace = PackageNamespace.Banner;

type PackageTheme = {
  [key in Appearance]: {
    backgroundColor: PackageThemeValue;
    fillColor: PackageThemeValue;
    textColor: PackageThemeValue;
  };
};

declare module '@emotion/react' {
  export interface Theme {
    [bannerThemeNamespace]: PackageTheme;
  }
}

export const bannerClassicTheme: PackageTheme = {
  [Appearance.Primary]: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    fillColor: 'white',
    textColor: 'white'
  },
  [Appearance.Success]: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.success,
    fillColor: COLORS.GRAY_TRANSLUCENT.L7,
    textColor: COLORS.GRAY_TRANSLUCENT.L7
  },
  [Appearance.Warning]: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.warning,
    fillColor: COLORS.GRAY_TRANSLUCENT.L7,
    textColor: COLORS.GRAY_TRANSLUCENT.L7
  },
  [Appearance.Danger]: {
    backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
    fillColor: 'white',
    textColor: 'white'
  }
};

export const bannerDarkTheme = bannerClassicTheme;
