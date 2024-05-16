import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import { IconButton, getConfigDefault } from '@tablecheck/tablekit-react';
import * as React from 'react';

import { useDatePickerContext } from '../Root';

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
      <ChevronLeft size={getConfigDefault('iconSize')} />
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
      <ChevronRight size={getConfigDefault('iconSize')} />
    </IconButton>
  );
});
