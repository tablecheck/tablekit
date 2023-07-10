import type { alert } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = alert.Props;

export const Alert = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    className={`${props.className || ''} input-alert`}
  />
));

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  Props & React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h4
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'title' }}
  />
));
export const AlertDescription = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'description' }}
  />
));

export const AlertCloseButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    type="button"
    {...props}
    ref={ref}
    style={{ color: 'currentColor', ...(props.style || {}), gridArea: 'close' }}
  />
));

export const AlertIconWrapper = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span
    {...props}
    ref={ref}
    style={{ ...(props.style || {}), gridArea: 'icon' }}
    className={`${props.className || ''} input-alert-icon`}
  />
));
