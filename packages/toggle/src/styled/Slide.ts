import styled from '@emotion/styled';

import {
  borderWidth,
  transitionDuration,
  regularBaseHeight,
  colorOptions
} from './constants';

export const Slide = styled.div`
  background-clip: content-box;
  background-color: ${colorOptions.backgroundUnchecked};
  border: ${borderWidth}px solid transparent;
  display: block;
  padding: 2px;
  transition: all ${transitionDuration} ease-in-out;
  border-radius: ${regularBaseHeight};
`;
