/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { spinner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = spinner.Props & React.HTMLAttributes<HTMLSpanElement>;

export const Spinner = buildWithComponent<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>({ tag: 'span', displayName: 'Spinner', className: 'spinner' });
