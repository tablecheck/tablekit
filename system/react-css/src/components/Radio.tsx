/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { radio } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = radio.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    type={props.type ?? (radio.defaultProps.type as never)}
    ref={ref}
  />
));
Radio.displayName = `Radio`;
