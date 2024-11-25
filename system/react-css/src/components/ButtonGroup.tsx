/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { buttonGroup } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildWithComponent } from '../utils';

export type Props = buttonGroup.Props & React.HTMLAttributes<HTMLDivElement>;

export const ButtonGroup = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({
  tag: 'div',
  displayName: 'ButtonGroup',
  className: 'button-group',
  additionalProps: {
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
