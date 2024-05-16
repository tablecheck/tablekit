/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { tabs } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = tabs.DefaultedProps & React.HTMLAttributes<HTMLDivElement>;

export const Tabs = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} tabs`}
    role={props.role ?? (tabs.defaultProps.role as never)}
    ref={ref}
  />
));
Tabs.displayName = `Tabs`;
