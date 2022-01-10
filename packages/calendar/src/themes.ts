import { PackageNamespace } from '@tablecheck/tablekit-package-namespace';
import type { PackageThemeValue } from '@tablecheck/tablekit-utils';

export const calendarThemeNamespace = PackageNamespace.Calendar;

interface PackageTheme {
  selectedTextColor: PackageThemeValue;
}

declare module '@emotion/react' {
  export interface Theme {
    [calendarThemeNamespace]: PackageTheme;
  }
}

export const calendarClassicTheme: PackageTheme = {
  selectedTextColor: 'white'
};

export const calendarDarkTheme: PackageTheme = calendarClassicTheme;
