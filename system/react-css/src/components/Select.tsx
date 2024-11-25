/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { select } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = select.Props &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = buildWithComponent<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>({
  tag: 'select',
  displayName: 'Select',
  className: 'select',
  additionalProps: {
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
