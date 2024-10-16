import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { IconButton, getConfigDefault } from '@tablecheck/tablekit-react';
import * as React from 'react';

import { useDatePickerContext } from '../Root';

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    [dir='rtl'] & {
      transform: rotate(180deg);
    }
  }
`;

export const PreviousMonth = React.forwardRef<
  HTMLButtonElement,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>
>((props, ref) => {
  const { calendars, getBackProps } = useDatePickerContext();
  return (
    <IconButton
      {...getBackProps({ ...props, calendars, offset: 1 })}
      data-size="small"
      data-variant="bare"
      type="button"
      ref={ref}
    >
      <IconWrapper>
        <ChevronLeft size={getConfigDefault('iconSize')} />
      </IconWrapper>
    </IconButton>
  );
});
export const NextMonth = React.forwardRef<
  HTMLButtonElement,
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>
>((props, ref) => {
  const { calendars, getForwardProps } = useDatePickerContext();
  return (
    <IconButton
      {...getForwardProps({ ...props, calendars, offset: 1 })}
      data-size="small"
      data-variant="bare"
      type="button"
      ref={ref}
    >
      <IconWrapper>
        <ChevronRight size={getConfigDefault('iconSize')} />
      </IconWrapper>
    </IconButton>
  );
});
