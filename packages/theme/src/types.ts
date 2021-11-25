export enum Level {
  L1 = 'L1',
  L2 = 'L2',
  L3 = 'L3',
  L4 = 'L4',
  L5 = 'L5',
  L6 = 'L6',
  L7 = 'L7',
  L8 = 'L8',
  L9 = 'L9'
}

export type LevelConst<T = string> = {
  [key in Level]: T;
};

export interface BaseColors {
  canvas: string;
  primary: string;
  primary2: string;
  primaryHover: string;
  primarySelected: string;
  invertedText: string;
  secondary: string;
  secondary2: string;
  accent: string;
  success: string;
  warning: string;
  danger: string;
  text: string;
  textSubtle: string;
  textDisabled: string;
  surface: string;
  surfaceHigh: string;
  surfaceLow: string;
  border: string;
  inputBackground: string;
  iconFill: string;
  hoverNeutralBackground: string;
  hoverPrimaryBackground: string;
  selectedBackground: string;
  disabledBackground: string;
  focusOutline: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeColors extends BaseColors {}

declare module '@emotion/react' {
  export interface Theme {
    isDark: boolean;
    isRtl: boolean;
    fontFamily: string;
    colors: ThemeColors;
  }
}
