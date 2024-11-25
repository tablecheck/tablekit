/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { tabContent } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = tabContent.DefaultedProps &
  React.HTMLAttributes<HTMLDivElement>;

export const TabContent = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  displayName: 'TabContent',
  className: 'tab-content',
  additionalProps: { role: tabContent.defaultProps.role as never }
});
