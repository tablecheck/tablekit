import type { toggle } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = Omit<toggle.Props, 'type'>;

export const Toggle = React.forwardRef<
  HTMLInputElement,
  Props & Omit<React.HTMLAttributes<HTMLInputElement>, 'type'>
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    type="checkbox"
    className={`${props.className || ''} toggle`}
  />
));
