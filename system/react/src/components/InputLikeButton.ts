import styled from '@emotion/styled';

import { baseStyles, Props } from './Input';

export const classySelector = 'button.input';

export const InputLikeButton = styled.button<Props>`
  ${baseStyles};
  display: flex;
  gap: var(--spacing-l2);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > *:not(svg) {
    flex: 1;
    text-align: left;
  }

  &:hover {
    background: var(--surface-hover);
  }
  &:active {
    background: var(--surface-active);
  }
`;
