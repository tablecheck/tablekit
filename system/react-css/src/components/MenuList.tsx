/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { menuList } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = menuList.Props & React.MenuHTMLAttributes<HTMLMenuElement>;

export const MenuList = React.forwardRef<
  HTMLMenuElement,
  Props & React.MenuHTMLAttributes<HTMLMenuElement>
>((props, ref) => (
  <menu {...props} className={`${props.className ?? ''} menu-list`} ref={ref} />
));
MenuList.displayName = `MenuList`;
