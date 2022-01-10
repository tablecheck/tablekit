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
  secondary?: PackageThemeValue;
  text?: PackageThemeValue;
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
    secondary: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    hover: ({ theme }: ThemeOnlyProps) => theme.colors.primaryHover,
    text: ({ theme }: ThemeOnlyProps) => theme.colors.invertedText,
    active: ({ theme }: ThemeOnlyProps) => theme.colors.primary,
    hoverTransparent: ({ theme }: ThemeOnlyProps) =>
      theme.colors.hoverPrimaryBackground,
    activeTransparent: ({ theme }: ThemeOnlyProps) =>
      theme.colors.primarySelected
  },

  [Color.Success]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.success,
    text: 'white',
    hover: COLORS.GREEN.L4,
    active: COLORS.GREEN.L6,
    hoverTransparent: hexToRgba(COLORS.GREEN.L4, 0.1),
    activeTransparent: hexToRgba(COLORS.GREEN.L4, 0.2)
  },
  [Color.Warning]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.warning,
    text: 'white',
    hover: COLORS.YELLOW.L5,
    active: COLORS.YELLOW.L7,
    hoverTransparent: hexToRgba(COLORS.YELLOW.L5, 0.1),
    activeTransparent: hexToRgba(COLORS.YELLOW.L5, 0.2)
  },
  [Color.Danger]: {
    main: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
    text: 'white',
    hover: COLORS.RED.L4,
    active: COLORS.RED.L6,
    hoverTransparent: hexToRgba(COLORS.RED.L4, 0.1),
    activeTransparent: hexToRgba(COLORS.RED.L4, 0.2)
  },
  [Color.Ghost]: {
    main: COLORS.GRAY.L7,
    text: 'black',
    hover: COLORS.GRAY.L5,
    active: COLORS.GRAY.L6,
    hoverTransparent: COLORS.GRAY_TRANSLUCENT.L3,
    activeTransparent: COLORS.GRAY_TRANSLUCENT.L4
  }
};

export const buttonDarkTheme: PackageTheme = {
  ...buttonClassicTheme,
  [Color.Primary]: {
    ...buttonClassicTheme[Color.Primary],
    secondary: ({ theme }: ThemeOnlyProps) => theme.colors.primary2,
    text: 'white'
  },
  [Color.Ghost]: {
    main: COLORS.WHITE_TRANSLUCENT.L7,
    text: 'white',
    active: COLORS.WHITE_TRANSLUCENT.L4,
    hover: COLORS.WHITE_TRANSLUCENT.L4
  }
};
