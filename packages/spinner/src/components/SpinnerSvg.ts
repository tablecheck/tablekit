import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { spinnerClassicTheme, spinnerThemeNamespace } from '../themes';

const rotationKeyframe = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerSvg = styled.svg`
  fill: none;
  stroke: ${getThemeValue(
    `${spinnerThemeNamespace}.fillColor`,
    spinnerClassicTheme.fillColor
  )};
  stroke-dasharray: 100px;
  stroke-dashoffset: 100px;
  stroke-width: 10px;
  transform-origin: center;
  width: 100%;
  height: 100%;
  animation: ${rotationKeyframe} linear 0.86s infinite;
`;
