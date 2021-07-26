import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import { hexToRgba } from '@tablecheck/tablekit-utils';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

import { Color } from './types';

export interface ColorTheme {
  main: PackageThemeValue;
  active?: PackageThemeValue;
  activeTransparent?: PackageThemeValue;
  hover?: PackageThemeValue;
  hoverTransparent?: PackageThemeValue;
  focus?: PackageThemeValue;
  focusTransparent?: PackageThemeValue;
}

type PackageTheme = {
  [key in Color]: ColorTheme;
};

export const buttonThemeNamespace = PackageNamespace.Button;

declare module '@emotion/react' {
  export interface Theme {
    [buttonThemeNamespace]: PackageTheme;
  }
}

export const buttonClassicTheme: PackageTheme = {
  [Color.Primary]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    hover: ({ theme }: ThemeOnlyProps) => theme.colors.primaryHover,
    active: ({ theme }: ThemeOnlyProps) => theme.colors.primary2,
    hoverTransparent: ({ theme }: ThemeOnlyProps) =>
      hexToRgba(theme.colors.primary2, 0.1),
    activeTransparent: ({ theme }: ThemeOnlyProps) =>
      hexToRgba(theme.colors.primary2, 0.2)
  },

  [Color.Success]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.success,
    hover: COLORS.GREEN.L4,
    active: COLORS.GREEN.L6,
    hoverTransparent: hexToRgba(COLORS.GREEN.L4, 0.1),
    activeTransparent: hexToRgba(COLORS.GREEN.L4, 0.2)
  },
  [Color.Warning]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.warning,
    hover: COLORS.YELLOW.L5,
    active: COLORS.YELLOW.L7,
    hoverTransparent: hexToRgba(COLORS.YELLOW.L5, 0.1),
    activeTransparent: hexToRgba(COLORS.YELLOW.L5, 0.2)
  },
  [Color.Danger]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
    hover: COLORS.RED.L4,
    active: COLORS.RED.L6,
    hoverTransparent: hexToRgba(COLORS.RED.L4, 0.1),
    activeTransparent: hexToRgba(COLORS.RED.L4, 0.2)
  },
  [Color.Ghost]: {
    main: COLORS.GRAY.L7,
    hover: COLORS.GRAY.L5,
    active: COLORS.GRAY.L6,
    hoverTransparent: COLORS.GRAY_TRANSLUCENT.L3,
    activeTransparent: COLORS.GRAY_TRANSLUCENT.L4
  }
};

export const buttonDarkTheme: PackageTheme = {
  ...buttonClassicTheme,
  [Color.Ghost]: {
    main: COLORS.WHITE_TRANSLUCENT.L7,
    active: COLORS.WHITE_TRANSLUCENT.L4,
    hover: COLORS.WHITE_TRANSLUCENT.L4
  }
};
