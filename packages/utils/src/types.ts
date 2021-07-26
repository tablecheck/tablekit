import { FunctionInterpolation, Theme } from '@emotion/react';

export type PackageThemeValue =
  | string
  | number
  | FunctionInterpolation<Record<string, unknown> & { theme: Theme }>;

export interface ThemeOnlyProps {
  theme: Theme;
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    'data-testid'?: string;
  }
}
