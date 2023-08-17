/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { menuItem } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = menuItem.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    type="button"
    {...props}
    ref={ref}
    className={`${props.className || ''} menu-item`}
  />
));
