import { css } from '@emotion/react';
import * as React from 'react';

import {
  buildFontFace,
  buildPreloadLink,
  FontType,
  GetCdnPathFunction
} from './buildFontFace';
import { FontWeight } from './weights';

const name = 'IBM Plex Sans Thai Looped';
const folder = 'IBMPlex-Sans-Thai-Looped';

export function plexSansThaiLoopedFont(
  getCdnPath: GetCdnPathFunction,
  fontWeights: FontWeight[]
): FontType {
  const sourceSansThaiLoopedExtraLightWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-ExtraLight.woff'
  );
  const sourceSansThaiLoopedExtraLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-ExtraLight.woff2'
  );

  const sourceSansThaiLoopedLightWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Light.woff'
  );
  const sourceSansThaiLoopedLightWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Light.woff2'
  );

  const sourceSansThaiLoopedRegularWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Regular.woff'
  );
  const sourceSansThaiLoopedRegularWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Regular.woff2'
  );

  const sourceSansThaiLoopedMediumWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Medium.woff'
  );
  const sourceSansThaiLoopedMediumWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Medium.woff2'
  );

  const sourceSansThaiLoopedSemiBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-SemiBold.woff'
  );
  const sourceSansThaiLoopedSemiBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-SemiBold.woff2'
  );

  const sourceSansThaiLoopedBoldWoff = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Bold.woff'
  );
  const sourceSansThaiLoopedBoldWoff2 = getCdnPath(
    folder,
    'IBMPlexSansThaiLooped-Bold.woff2'
  );

  const preloadLinks = fontWeights.reduce<React.ReactNode[]>(
    (result, fontWeight) => {
      if (fontWeight === FontWeight.ExtraLight) {
        return result.concat([
          buildPreloadLink(sourceSansThaiLoopedExtraLightWoff2)
        ]);
      }
      if (fontWeight === FontWeight.Light) {
        return result.concat([
          buildPreloadLink(sourceSansThaiLoopedLightWoff2)
        ]);
      }
      if (fontWeight === FontWeight.Regular) {
        return result.concat([
          buildPreloadLink(sourceSansThaiLoopedRegularWoff2)
        ]);
      }
      if (fontWeight === FontWeight.Medium) {
        return result.concat([
          buildPreloadLink(sourceSansThaiLoopedMediumWoff2)
        ]);
      }
      if (fontWeight === FontWeight.SemiBold) {
        return result.concat([
          buildPreloadLink(sourceSansThaiLoopedSemiBoldWoff2)
        ]);
      }
      if (fontWeight === FontWeight.Bold) {
        return result.concat([buildPreloadLink(sourceSansThaiLoopedBoldWoff2)]);
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
        woff: sourceSansThaiLoopedExtraLightWoff,
        woff2: sourceSansThaiLoopedExtraLightWoff2
      })}

      ${buildFontFace({
        name,
        weight: FontWeight.Light,
        woff: sourceSansThaiLoopedLightWoff,
        woff2: sourceSansThaiLoopedLightWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Regular,
        woff: sourceSansThaiLoopedRegularWoff,
        woff2: sourceSansThaiLoopedRegularWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Medium,
        woff: sourceSansThaiLoopedMediumWoff,
        woff2: sourceSansThaiLoopedMediumWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.SemiBold,
        woff: sourceSansThaiLoopedSemiBoldWoff,
        woff2: sourceSansThaiLoopedSemiBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: FontWeight.Bold,
        woff: sourceSansThaiLoopedBoldWoff,
        woff2: sourceSansThaiLoopedBoldWoff2
      })}
    `
  ];
}
