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
  fontWeights: (keyof typeof FontWeight)[]
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
      switch (fontWeight) {
        case 'ExtraLight': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedExtraLightWoff2)
          ]);
        }
        case 'Light': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedLightWoff2)
          ]);
        }
        case 'Regular': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedRegularWoff2)
          ]);
        }
        case 'Medium': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedMediumWoff2)
          ]);
        }
        case 'SemiBold': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedSemiBoldWoff2)
          ]);
        }
        case 'Bold': {
          return result.concat([
            buildPreloadLink(sourceSansThaiLoopedBoldWoff2)
          ]);
        }
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
        weight: 'ExtraLight',
        woff: sourceSansThaiLoopedExtraLightWoff,
        woff2: sourceSansThaiLoopedExtraLightWoff2
      })}

      ${buildFontFace({
        name,
        weight: 'Light',
        woff: sourceSansThaiLoopedLightWoff,
        woff2: sourceSansThaiLoopedLightWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Regular',
        woff: sourceSansThaiLoopedRegularWoff,
        woff2: sourceSansThaiLoopedRegularWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Medium',
        woff: sourceSansThaiLoopedMediumWoff,
        woff2: sourceSansThaiLoopedMediumWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'SemiBold',
        woff: sourceSansThaiLoopedSemiBoldWoff,
        woff2: sourceSansThaiLoopedSemiBoldWoff2
      })}
    
    ${buildFontFace({
        name,
        weight: 'Bold',
        woff: sourceSansThaiLoopedBoldWoff,
        woff2: sourceSansThaiLoopedBoldWoff2
      })}
    `
  ];
}
