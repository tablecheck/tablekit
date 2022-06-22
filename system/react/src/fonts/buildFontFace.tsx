import { css, SerializedStyles } from '@emotion/react';
import type * as React from 'react';

import { FontWeight } from './weights';

export type FontType = [React.ReactNode[], SerializedStyles];

export interface GetCdnPathFunction {
  (fontFolder: string, fontFile: string): string;
}

export function buildPreloadLink(href: string): React.ReactNode {
  return (
    <link
      rel="preload"
      as="font"
      crossOrigin="anonymous"
      key={href}
      href={href}
    />
  );
}

export function buildFontFace({
  name,
  weight,
  unicodeRange,
  isItalic,
  woff,
  woff2
}: {
  isItalic?: boolean;
  name: string;
  unicodeRange?: string;
  weight: FontWeight;
  woff: string;
  woff2: string;
}): SerializedStyles {
  let unicodeSettings = '';
  if (unicodeRange) {
    unicodeSettings = `unicode-range: ${unicodeRange};`;
  }

  const weightName = FontWeight[weight];

  return css`
    /* ${name} ${weightName} */
    @font-face {
      font-family: '${name}';
      src: local('${name} ${`${weightName}${isItalic ? ' Italic' : ''}`}'),
        local('${name}-${`${weightName}${isItalic ? 'Italic' : ''}`}'),
        url('${woff2}') format('woff2'), url('${woff}') format('woff');
      font-display: swap;
      font-style: ${isItalic ? 'italic' : 'normal'};
      font-weight: ${weight};
      ${unicodeSettings}
    }
  `;
}
