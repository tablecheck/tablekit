/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { input } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = input.Props;

export const Input = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input {...props} ref={ref} className={`${props.className || ''} input`} />
));
