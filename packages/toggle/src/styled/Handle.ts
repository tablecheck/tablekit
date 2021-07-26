import styled from '@emotion/styled';
import { COLORS } from '@tablecheck/tablekit-theme';

import {
  transitionDuration,
  regularBaseHeight,
  innerPadding
} from './constants';

const handleSize = parseInt(regularBaseHeight, 10) - 2 * innerPadding;

export const Handle = styled.span`
  position: absolute;
  left: ${innerPadding}px;
  bottom: ${innerPadding}px;
  background-color: white;
  border-radius: 50%;
  transition: transform ${transitionDuration} ease-in-out;
  box-shadow: 0 2px 8px 0 ${COLORS.GRAY_TRANSLUCENT.L3};
  height: ${handleSize}px;
  width: ${handleSize}px;
`;
