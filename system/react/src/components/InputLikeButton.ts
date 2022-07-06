import styled from '@emotion/styled';

import { baseStyles, Props } from './Input';
import { Spacing } from 'utils/constants';

export const baseSelector = 'button.input';

export const InputLikeButton = styled.button<Props>`
  ${baseStyles};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${Spacing.L2};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background: var(--surface-hover);
  }
  &:active() {
    background: var(--surface-active);
  }
`;
