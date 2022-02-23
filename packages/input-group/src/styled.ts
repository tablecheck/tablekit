import styled from '@emotion/styled';

import { getContainerShape, getContainerSize } from './utils';

export const InputGroupContainer = styled.span``;

export const InputGroupOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    border-radius: 0;
    ${getContainerSize}
  }
  & > :first-child,
  & > :first-child input {
    ${getContainerShape};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > :last-child,
  & > :last-child input {
    ${getContainerShape};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const InputGroupItem = styled.div`
  display: block;
`;
