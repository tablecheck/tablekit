/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { scrollShadow } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = scrollShadow.Props & React.HTMLAttributes<HTMLDivElement>;

export const ScrollShadow = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({ tag: 'div', displayName: 'ScrollShadow', className: 'scroll-shadow' });
