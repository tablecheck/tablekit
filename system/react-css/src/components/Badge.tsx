/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { badge } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = badge.Props;

export const Badge = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span {...props} ref={ref} className={`${props.className || ''} badge`} />
));
