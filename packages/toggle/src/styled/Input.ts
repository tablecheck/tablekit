import styled from '@emotion/styled';

import { Handle } from './Handle';
import { CheckedIconWrapper, UncheckedIconWrapper } from './IconWrapper';
import { Slide } from './Slide';
import { colorOptions, regularBaseHeight } from './constants';

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:focus {
    outline: none !important;
  }
  &:focus + ${Slide} {
    border-color: ${({ theme }) => theme.colors.focusOutline};
  }

  & + ${Slide} ${UncheckedIconWrapper} {
    opacity: 1;
  }
  &:checked + ${Slide} {
    background-color: ${colorOptions.backgroundChecked};
    ${CheckedIconWrapper} {
      opacity: 1;
    }

    ${Handle} {
      transform: translateX(${regularBaseHeight});
    }
  }
  &:disabled + ${Slide} {
    background-color: ${colorOptions.backgroundUncheckedDisabled};
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:checked:disabled + ${Slide} {
    background-color: ${colorOptions.backgroundCheckedDisabled};
  }

  &:not(:disabled) + ${Slide}:hover {
    background-color: ${colorOptions.backgroundUncheckedHover};
  }
  &:checked:not(:disabled) + ${Slide}:hover {
    background-color: ${colorOptions.backgroundCheckedHover};
  }
`;
