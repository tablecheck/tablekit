/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { menuItem } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = menuItem.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuItem = buildWithComponent<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'MenuItem',
  className: 'menu-item',
  additionalProps: { type: 'button' }
});
