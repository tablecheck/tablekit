/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { inputCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = inputCore.Props &
  React.InputHTMLAttributes<HTMLInputElement>;

export const InputCore = buildWithComponent<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>({
  tag: 'input',
  displayName: 'InputCore',
  className: 'input',
  additionalProps: {
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
