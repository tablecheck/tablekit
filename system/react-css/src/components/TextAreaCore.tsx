/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { textAreaCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = textAreaCore.Props &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaCore = buildWithComponent<
  HTMLTextAreaElement,
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>({
  tag: 'textarea',
  displayName: 'TextAreaCore',
  className: 'textarea',
  additionalProps: {
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
