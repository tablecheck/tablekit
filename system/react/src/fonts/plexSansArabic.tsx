import { css } from '@emotion/react';
import * as React from 'react';

import {
  buildFontFace,
  buildPreloadLink,
  FontType,
  GetCdnPathFunction
} from './buildFontFace';
import { FontWeight } from './weights';

const name = 'IBM Plex Sans Arabic';
const folder = 'IBMPlex-Sans-Arabic';

export function plexSansArabicFont(
  getCdnPath: GetCdnPathFunction,
  fontWeights: FontWeight[]
): FontType {
  const sourceSansArabicExtraLightWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-ExtraLight.woff'
  );
  const sourceSansArabicExtraLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-ExtraLight.woff2'
  );

  const sourceSansArabicLightWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Light.woff'
  );
  const sourceSansArabicLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Light.woff2'
  );

  const sourceSansArabicRegularWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Regular.woff'
  );
  const sourceSansArabicRegularWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Regular.woff2'
  );

  const sourceSansArabicMediumWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Medium.woff'
  );
  const sourceSansArabicMediumWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Medium.woff2'
  );

  const sourceSansArabicSemiBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-SemiBold.woff'
  );
  const sourceSansArabicSemiBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-SemiBold.woff2'
  );

  const sourceSansArabicBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansArabic-Bold.woff'
  );
  const sourceSansArabicBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansArabic-Bold.woff2'
  );

  const preloadLinks = fontWeights.reduce<React.ReactNode[]>(
    (result, fontWeight) => {
      if (fontWeight === FontWeight.ExtraLight) {
        return result.concat([
          buildPreloadLink(sourceSansArabicExtraLightWoff2)
        ]);
      }
      if (fontWeight === FontWeight.Light) {
        return result.concat([buildPreloadLink(sourceSansArabicLightWoff2)]);
      }
      if (fontWeight === FontWeight.Regular) {
        return result.concat([buildPreloadLink(sourceSansArabicRegularWoff2)]);
      }
      if (fontWeight === FontWeight.Medium) {
        return result.concat([buildPreloadLink(sourceSansArabicMediumWoff2)]);
      }
      if (fontWeight === FontWeight.SemiBold) {
        return result.concat([buildPreloadLink(sourceSansArabicSemiBoldWoff2)]);
      }
      if (fontWeight === FontWeight.Bold) {
        return result.concat([buildPreloadLink(sourceSansArabicBoldWoff2)]);
      }
      return result;
    },
    []
  );

  return [
    preloadLinks,
    css`
      ${buildFontFace({
        name,
        weight: FontWeight.ExtraLight,
        woff: sourceSansArabicExtraLightWoff,
        woff2: sourceSansArabicExtraLightWoff2
      })}

      ${buildFontFace({
        name,
        weight: FontWeight.Light,
        woff: sourceSansArabicLightWoff,
        woff2: sourceSansArabicLightWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Regular,
        woff: sourceSansArabicRegularWoff,
        woff2: sourceSansArabicRegularWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Medium,
        woff: sourceSansArabicMediumWoff,
        woff2: sourceSansArabicMediumWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.SemiBold,
        woff: sourceSansArabicSemiBoldWoff,
        woff2: sourceSansArabicSemiBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Bold,
        woff: sourceSansArabicBoldWoff,
        woff2: sourceSansArabicBoldWoff2
      })}
    `
  ];
}
