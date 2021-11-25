import { hexToRgba } from '@tablecheck/tablekit-utils';

import {
  BLUE,
  GRAY,
  GRAY_TRANSLUCENT,
  GREEN,
  PURPLE,
  RED,
  WHITE_TRANSLUCENT,
  YELLOW
} from './colors';
import type { BaseColors } from './types';
import { LevelConst } from './types';

const CLASSIC_PRIMARY = PURPLE.L5;

export const CLASSIC_PRIMARY_TRANSLUCENT: LevelConst = {
  L1: hexToRgba(CLASSIC_PRIMARY, 0.1),
  L2: hexToRgba(CLASSIC_PRIMARY, 0.2),
  L3: hexToRgba(CLASSIC_PRIMARY, 0.3),
  L4: hexToRgba(CLASSIC_PRIMARY, 0.4),
  L5: hexToRgba(CLASSIC_PRIMARY, 0.5),
  L6: hexToRgba(CLASSIC_PRIMARY, 0.6),
  L7: hexToRgba(CLASSIC_PRIMARY, 0.7),
  L8: hexToRgba(CLASSIC_PRIMARY, 0.8),
  L9: hexToRgba(CLASSIC_PRIMARY, 0.9)
};

export const CLASSIC_COLORS: BaseColors = {
  canvas: GRAY.L1, // background for the lowest level of the page, i.e. <body>
  primary: CLASSIC_PRIMARY,
  primary2: PURPLE.L7,
  primaryHover: PURPLE.L6,
  primarySelected: CLASSIC_PRIMARY_TRANSLUCENT.L2,
  invertedText: 'white',
  secondary: BLUE.L5,
  secondary2: BLUE.L4,
  accent: YELLOW.L4,
  success: GREEN.L5,
  warning: YELLOW.L5,
  danger: RED.L5,
  text: GRAY.L8, // generic text color
  textSubtle: GRAY_TRANSLUCENT.L6, // for text that has to be a bit more dimmed down
  textDisabled: GRAY_TRANSLUCENT.L3,
  surface: 'white', // usually for cards background
  surfaceHigh: WHITE_TRANSLUCENT.L9, // for bgs above the surface level
  surfaceLow: GRAY_TRANSLUCENT.L3, // for bgs below the surface level and above the canvas level
  border: GRAY_TRANSLUCENT.L3, // generic border color for inputs, menu separators, etc
  inputBackground: WHITE_TRANSLUCENT.L4, // background color for text fields, textareas and selects
  iconFill: GRAY_TRANSLUCENT.L7,
  hoverNeutralBackground: GRAY_TRANSLUCENT.L2, // hover bg for comp without colour like items
  hoverPrimaryBackground: CLASSIC_PRIMARY_TRANSLUCENT.L1,
  selectedBackground: CLASSIC_PRIMARY_TRANSLUCENT.L2, // used in items, tables
  disabledBackground: GRAY_TRANSLUCENT.L3,
  focusOutline: BLUE.L4
};

const DARK_PRIMARY = PURPLE.L3;

export const DARK_PRIMARY_TRANSLUCENT: LevelConst = {
  L1: hexToRgba(DARK_PRIMARY, 0.1),
  L2: hexToRgba(DARK_PRIMARY, 0.2),
  L3: hexToRgba(DARK_PRIMARY, 0.3),
  L4: hexToRgba(DARK_PRIMARY, 0.4),
  L5: hexToRgba(DARK_PRIMARY, 0.5),
  L6: hexToRgba(DARK_PRIMARY, 0.6),
  L7: hexToRgba(DARK_PRIMARY, 0.7),
  L8: hexToRgba(DARK_PRIMARY, 0.8),
  L9: hexToRgba(DARK_PRIMARY, 0.9)
};

export const DARK_COLORS: BaseColors = {
  canvas: GRAY.L9,
  primary: DARK_PRIMARY,
  primary2: PURPLE.L2,
  primaryHover: PURPLE.L4,
  primarySelected: DARK_PRIMARY_TRANSLUCENT.L2,
  invertedText: GRAY.L8,
  secondary: BLUE.L5,
  secondary2: BLUE.L4,
  accent: YELLOW.L4,
  success: GREEN.L6,
  warning: YELLOW.L6,
  danger: RED.L6,
  text: WHITE_TRANSLUCENT.L9,
  textSubtle: WHITE_TRANSLUCENT.L6,
  textDisabled: GRAY_TRANSLUCENT.L4,
  surface: GRAY.L8,
  surfaceHigh: WHITE_TRANSLUCENT.L4,
  surfaceLow: GRAY_TRANSLUCENT.L4,
  border: WHITE_TRANSLUCENT.L4,
  inputBackground: WHITE_TRANSLUCENT.L1,
  iconFill: WHITE_TRANSLUCENT.L8,
  hoverNeutralBackground: WHITE_TRANSLUCENT.L3,
  hoverPrimaryBackground: DARK_PRIMARY_TRANSLUCENT.L2,
  selectedBackground: DARK_PRIMARY_TRANSLUCENT.L3,
  disabledBackground: WHITE_TRANSLUCENT.L4,
  focusOutline: BLUE.L4
};
