// Based on https://gitlab.kkvesper.net/backend/tablesolution/blob/eec34a502edc0e84c1b731376c944fe676f8b63d/app/assets/stylesheets/vendor/intlTelInput.css
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import flagImage from '../../flags/flags.png';
import flagImage2x from '../../flags/flags@2x.png';
import { getSrcPath } from '../getSrcPath';

import { flagStyles } from './flagStyles';

type FlagStyles = {
  [key: string]: {
    height: string;
    width?: string;
    backgroundPosition: string;
  };
};

const getStyle = ({ country }: { country: string }) => {
  const style = (flagStyles as FlagStyles)[country];
  const width = style.width ? style.width : '20px';
  const height = style.height ? style.height : '15px';

  return css`
    width: ${width};
    height: ${height};
    background-position: ${style.backgroundPosition};
  `;
};

export const Flag = styled.span<{ country: string }>`
  display: inline-block;
  width: 20px;
  height: 15px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url(${getSrcPath(flagImage)});
  background-repeat: no-repeat;

  ${getStyle};

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2 / 1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${getSrcPath(flagImage2x)});
    background-size: 5630px 15px;
  }
`;
