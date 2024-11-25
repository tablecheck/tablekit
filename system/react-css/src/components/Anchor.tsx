/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { anchor } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = anchor.Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = buildWithComponent<
  HTMLAnchorElement,
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
>({ tag: 'a', displayName: 'Anchor', className: 'link' });
