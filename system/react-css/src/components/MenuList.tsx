/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { menuList } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = menuList.Props & React.MenuHTMLAttributes<HTMLMenuElement>;

export const MenuList = buildWithComponent<
  HTMLMenuElement,
  Props & React.MenuHTMLAttributes<HTMLMenuElement>
>({ tag: 'menu', displayName: 'MenuList', className: 'menu-list' });
