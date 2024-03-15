import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import styled from '@emotion/styled';
import * as React from 'react';

import { useDatePickerContext } from '../Root';

const DirectionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 4px;
  cursor: pointer;

  width: 40px;
  height: 48px;

  color: var(--text);
  background: var(--surface);

  &[data-pseudo='hover'],
  &:hover {
    background: var(--surface-hover);
  }
  &:disabled {
    background: var(--surface);
    color: var(--text-disabled);
  }
  &[data-pseudo='focus'],
  &:focus {
    box-shadow: 2px solid var(--focus);
  }
`;

export const PreviousMonth = React.forwardRef<
  HTMLButtonElement,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>
>((props, ref) => {
  const { calendars, getBackProps } = useDatePickerContext();
  return (
    <DirectionButton
      {...getBackProps({ ...props, calendars, offset: 1 })}
      type="button"
      ref={ref}
    >
      <ChevronLeft size={20} />
    </DirectionButton>
  );
});
export const NextMonth = React.forwardRef<
  HTMLButtonElement,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>
>((props, ref) => {
  const { calendars, getForwardProps } = useDatePickerContext();
  return (
    <DirectionButton
      {...getForwardProps({ ...props, calendars, offset: 1 })}
      type="button"
      ref={ref}
    >
      <ChevronRight size={20} />
    </DirectionButton>
  );
});
