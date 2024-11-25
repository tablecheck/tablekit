/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { inputWithIcons } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = inputWithIcons.Props & React.HTMLAttributes<HTMLDivElement>;

export const InputWithIcons = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({ tag: 'div', displayName: 'InputWithIcons', className: 'input-with-icons' });
