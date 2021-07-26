import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentType } from 'react';

type PropsType = {
  fit?: boolean;
  isVertical?: boolean;
};

const fitCss = (props: PropsType) => {
  if (props.fit) {
    return css`
      width: 100%;
      justify-content: center;
    `;
  }
  return undefined;
};

export const ButtonWrapper: ComponentType<PropsType> = styled.span`
  align-self: center;
  display: inline-flex;
  ${({ isVertical }) => (isVertical ? 'flex-direction: column;' : '')};
  flex-wrap: nowrap;
  max-width: 100%;
  position: relative;
  ${fitCss};
`;
