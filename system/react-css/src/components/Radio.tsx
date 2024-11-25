/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { radio } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = radio.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = buildWithComponent<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>({
  tag: 'input',
  displayName: 'Radio',
  className: undefined,
  additionalProps: { type: radio.defaultProps.type as never }
});
