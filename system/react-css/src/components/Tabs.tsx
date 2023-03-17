/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { tabs } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = tabs.DefaultedProps;

export const Tabs = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    role="tablist"
    {...props}
    ref={ref}
    className={`${props.className || ''} tabs`}
  />
));
