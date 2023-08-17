/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { select } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = select.Props;

export const Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>((props, ref) => (
  <select {...props} ref={ref} className={`${props.className || ''} select`} />
));
