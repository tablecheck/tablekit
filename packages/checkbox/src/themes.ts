import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { COLORS } from '@tablecheck/tablekit-theme';
import { hexToRgba } from '@tablecheck/tablekit-utils';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const checkboxThemeNamespace = PackageNamespace.Checkbox;

interface PackageTheme {
  backgroundColorBox: PackageThemeValue;
  backgroundColorBoxInvalid: PackageThemeValue;
  backgroundColorInvalid: PackageThemeValue;
  borderColorBox: PackageThemeValue;
  borderColorBoxInvalid: PackageThemeValue;
  fillColorInvalid: PackageThemeValue;
  textColor: PackageThemeValue;
  textColorDisabled: PackageThemeValue;
  textColorInvalid: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [checkboxThemeNamespace]: PackageTheme;
  }
}

export const checkboxClassicTheme: PackageTheme = {
  backgroundColorBox: 'white',
  backgroundColorBoxInvalid: 'white',
  backgroundColorInvalid: COLORS.RED.L1,
  borderColorBox: COLORS.GRAY_TRANSLUCENT.L3,
  borderColorBoxInvalid: COLORS.GRAY_TRANSLUCENT.L3,
  fillColorInvalid: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  textColorDisabled: COLORS.GRAY_TRANSLUCENT.L4,
  textColorInvalid: ({ theme }: ThemeOnlyProps) => theme.colors.text
};

export const checkboxDarkTheme: PackageTheme = {
  backgroundColorBox: ({ theme }: ThemeOnlyProps) => theme.colors.surface,
  backgroundColorBoxInvalid: ({ theme }: ThemeOnlyProps) =>
    theme.colors.surfaceHigh,
  backgroundColorInvalid: hexToRgba(COLORS.RED.L6, 0.3),
  borderColorBox: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  borderColorBoxInvalid: ({ theme }: ThemeOnlyProps) => theme.colors.border,
  fillColorInvalid: ({ theme }: ThemeOnlyProps) => theme.colors.danger,
  textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
  textColorDisabled: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle,
  textColorInvalid: ({ theme }: ThemeOnlyProps) => theme.colors.text
};
