import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type {
  PackageThemeValue,
  ThemeOnlyProps
} from '@tablecheck/tablekit-utils';

export const avatarThemeNamespace = PackageNamespace.Avatar;

interface PackageTheme {
  backgroundColor: PackageThemeValue;
  textColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [avatarThemeNamespace]: PackageTheme;
  }
}

export const avatarClassicTheme: PackageTheme = {
  backgroundColor: ({ theme }: ThemeOnlyProps) => theme.colors.primary2,
  textColor: 'white'
};

export const avatarDarkTheme: PackageTheme = avatarClassicTheme;
