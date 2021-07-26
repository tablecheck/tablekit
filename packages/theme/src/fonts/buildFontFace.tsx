import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import startCase from 'lodash/startCase';
import { ReactNode } from 'react';

import { FontWeight } from './weights';

export type FontType = [ReactNode[], SerializedStyles];

// https://github.com/IBM/plex/releases
export function getCdnPath(fontFolder: string, fontFile: string): string {
  if (!CONFIG.cdnURL) {
    throw new Error(`"cdnURL" has not been set in the node-config files`);
  }
  const fontPath = `${CONFIG.cdnURL}/fonts/ibmplex/v5.1.3/${fontFolder}`;
  const cdnIndex =
    fontFile.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % 4;
  return `${fontPath}/${fontFile}`.replace('cdn0', `cdn${cdnIndex}`);
}

export function buildPreloadLink(href: string): ReactNode {
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
      font-family: '${startCase(name)}';
      src: local(
          '${startCase(name)} ${`${weightName}${isItalic ? ' Italic' : ''}`}'
        ),
        local('${name}-${`${weightName}${isItalic ? 'Italic' : ''}`}'),
        url('${woff2}') format('woff2'), url('${woff}') format('woff');
      font-display: swap;
      font-style: ${isItalic ? 'italic' : 'normal'};
      font-weight: ${weight};
      ${unicodeSettings}
    }
  `;
}
