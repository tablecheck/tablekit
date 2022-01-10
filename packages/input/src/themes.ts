import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import { Size } from '@tablecheck/tablekit-theme';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const INPUT_WIDTHS: { [key in Size]: string } = {
  [Size.XSmall]: '64px',
  [Size.Small]: '128px',
  [Size.Regular]: '180px',
  [Size.Regular2]: '218px',
  [Size.Large]: '256px',
  [Size.XLarge]: '330px',
  [Size.XXLarge]: '368px'
};

interface InputThemeValues {
  backgroundColor?: PackageThemeValue;
  borderColor?: PackageThemeValue;
  textColor?: PackageThemeValue;
  placeholderColor?: PackageThemeValue;
  iconColor?: PackageThemeValue;
}

export interface PackageTheme {
  label?: { textColor: PackageThemeValue };
  error?: { textColor: PackageThemeValue };
  input?: {
    default?: InputThemeValues;
    disabled?: InputThemeValues;
  };
}

export const inputThemeNamespace = PackageNamespace.Input;

declare module '@emotion/react' {
  export interface Theme {
    [inputThemeNamespace]: PackageTheme;
  }
}

export const inputClassicTheme: PackageTheme = {
  label: { textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text },
  error: { textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text },
  input: {
    default: {
      backgroundColor: ({ theme }: ThemeOnlyProps) =>
        theme.colors.inputBackground,
      borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
      textColor: ({ theme }: ThemeOnlyProps) => theme.colors.text,
      placeholderColor: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle,
      iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary2
    },
    disabled: {
      borderColor: ({ theme }: ThemeOnlyProps) => theme.colors.border,
      textColor: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle,
      iconColor: ({ theme }: ThemeOnlyProps) => theme.colors.textSubtle
    }
  }
};

export const inputDarkTheme: PackageTheme = inputClassicTheme;
