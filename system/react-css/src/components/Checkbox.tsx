/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { checkbox } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = checkbox.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    type={props.type ?? (checkbox.defaultProps.type as never)}
    ref={ref}
  />
));
Checkbox.displayName = `Checkbox`;
