/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { inputWithPrefix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = inputWithPrefix.Props &
  React.HTMLAttributes<HTMLDivElement>;

export const InputWithPrefix = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  displayName: 'InputWithPrefix',
  className: 'input-with-prefix'
});
