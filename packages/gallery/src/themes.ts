import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';

export const galleryThemeNamespace = PackageNamespace.Gallery;

type PackageTheme = Record<never, never>;

declare module '@emotion/react' {
  export interface Theme {
    [galleryThemeNamespace]: PackageTheme;
  }
}

export const galleryClassicTheme: PackageTheme = {};

export const galleryDarkTheme: PackageTheme = galleryClassicTheme;
