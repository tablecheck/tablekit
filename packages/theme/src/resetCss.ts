import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';

import { FontWeight } from './fonts/weights';
import { CLASSIC_COLORS } from './palettes';
import type { ThemeColors } from './types';

const headerFontWeightPriority = [
  FontWeight.Bold,
  FontWeight.SemiBold,
  FontWeight.Medium,
  FontWeight.Regular,
  FontWeight.Light,
  FontWeight.ExtraLight
];

export const resetCss = (
  fontFamily: string,
  themeColorsArg: Partial<ThemeColors> | null | undefined,
  fontWeights: void | FontWeight[]
): SerializedStyles => {
  const themeColors = themeColorsArg || CLASSIC_COLORS;
  let headerFontWeight;
  if (fontWeights) {
    for (let i = 0; i < headerFontWeightPriority.length; i += 1) {
      if (fontWeights.indexOf(headerFontWeightPriority[i]) > -1) {
        headerFontWeight = headerFontWeightPriority[i];
        break;
      }
    }
  }
  if (!headerFontWeight) {
    headerFontWeight = FontWeight.SemiBold;
  }
  return css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 125%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    /* Reset fonts to system font family rather than browser */
    body {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 125%;
      vertical-align: baseline;
      ${fontFamily};
      color: ${themeColors.text};
      background-color: ${themeColors.canvas};
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    strong,
    b {
      font-weight: bold;
    }
    sup,
    sub {
      line-height: 0px;
    }
    sub {
      vertical-align: sub;
    }
    sup {
      vertical-align: super;
    }
    em,
    i {
      font-style: italic;
    }
    button {
      background-color: transparent;
    }
  `;
};
