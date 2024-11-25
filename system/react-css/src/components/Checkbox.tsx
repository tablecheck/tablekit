/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { checkbox } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = checkbox.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = buildWithComponent<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>({
  tag: 'input',
  displayName: 'Checkbox',
  className: undefined,
  additionalProps: { type: checkbox.defaultProps.type as never }
});
