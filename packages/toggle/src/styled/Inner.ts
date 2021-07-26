import styled from '@emotion/styled';
import { COLORS } from '@tablecheck/tablekit-theme';

import {
  transitionDuration,
  regularBaseHeight,
  regularBaseWidth
} from './constants';

export const Inner = styled.div`
  display: flex;
  position: relative;
  height: ${regularBaseHeight};
  transition: all ${transitionDuration} ease-in-out;
  width: ${regularBaseWidth};
  border-radius: ${regularBaseHeight};
  box-shadow: 0 0 0 1px ${COLORS.GRAY_TRANSLUCENT.L3};
`;
