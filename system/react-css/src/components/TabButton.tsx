/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { tabButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = tabButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TabButton = buildWithComponent<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'TabButton',
  className: 'tab-button',
  additionalProps: {
    role: tabButton.defaultProps.role as never,
    type: 'button'
  }
});
