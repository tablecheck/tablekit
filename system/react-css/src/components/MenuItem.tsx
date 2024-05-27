/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { menuItem } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = menuItem.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    {...props}
    className={`${props.className ?? ''} menu-item`}
    type="button"
    ref={ref}
  />
));
MenuItem.displayName = `MenuItem`;
