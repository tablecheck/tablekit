/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { menuList } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = menuList.Props;

export const MenuList = React.forwardRef<
  HTMLMenuElement,
  Props & React.MenuHTMLAttributes<HTMLMenuElement>
>((props, ref) => (
  <menu {...props} ref={ref} className={`${props.className || ''} menu-list`} />
));
