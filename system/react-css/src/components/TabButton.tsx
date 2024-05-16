/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { tabButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = tabButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TabButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    {...props}
    className={`${props.className ?? ''} tab-button`}
    role={props.role ?? (tabButton.defaultProps.role as never)}
    type="button"
    ref={ref}
  />
));
TabButton.displayName = `TabButton`;
