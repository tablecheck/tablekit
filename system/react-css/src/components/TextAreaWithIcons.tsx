/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { textAreaWithIcons } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = textAreaWithIcons.Props &
  React.HTMLAttributes<HTMLDivElement>;

export const TextAreaWithIcons = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  displayName: 'TextAreaWithIcons',
  className: 'textarea-with-icons',
  additionalProps: {
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
