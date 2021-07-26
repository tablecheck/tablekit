import {
  BLUE,
  GRAY,
  GRAY_TRANSLUCENT,
  GREEN,
  PURPLE,
  PURPLE_TRANSLUCENT,
  RED,
  WHITE_TRANSLUCENT,
  YELLOW
} from './colors';
import type { ThemeColors } from './types';

export const CLASSIC_COLORS: ThemeColors = {
  canvas: GRAY.L1, // background for the lowest level of the page, i.e. <body>
  primary: PURPLE.L7,
  primary2: PURPLE.L5,
  primaryHover: PURPLE.L6,
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
  hoverPrimaryBackground: PURPLE_TRANSLUCENT.L1,
  selectedBackground: PURPLE_TRANSLUCENT.L2, // used in items, tables
  disabledBackground: GRAY_TRANSLUCENT.L3,
  focusOutline: BLUE.L4
};

export const DARK_COLORS: ThemeColors = {
  canvas: GRAY.L9,
  primary: PURPLE.L3,
  primary2: PURPLE.L5,
  primaryHover: PURPLE.L4,
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
  hoverPrimaryBackground: PURPLE_TRANSLUCENT.L2,
  selectedBackground: PURPLE_TRANSLUCENT.L3,
  disabledBackground: WHITE_TRANSLUCENT.L4,
  focusOutline: BLUE.L4
};
