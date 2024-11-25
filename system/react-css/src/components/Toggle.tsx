/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { toggle } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = toggle.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Toggle = buildWithComponent<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>({
  tag: 'input',
  displayName: 'Toggle',
  className: 'toggle',
  additionalProps: {
    type: toggle.defaultProps.type as never,
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
