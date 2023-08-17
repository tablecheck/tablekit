/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { checkbox } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = checkbox.DefaultedProps;

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    type="checkbox"
    {...props}
    ref={ref}
    className={`${props.className || ''} `}
  />
));
