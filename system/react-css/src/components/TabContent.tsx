/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { tabContent } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = tabContent.DefaultedProps &
  React.HTMLAttributes<HTMLDivElement>;

export const TabContent = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} tab-content`}
    role={props.role ?? (tabContent.defaultProps.role as never)}
    ref={ref}
  />
));
TabContent.displayName = `TabContent`;
