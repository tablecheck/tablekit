/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { table } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = table.Props & React.TableHTMLAttributes<HTMLTableElement>;

export const Table = buildWithComponent<
  HTMLTableElement,
  Props & React.TableHTMLAttributes<HTMLTableElement>
>({ tag: 'table', displayName: 'Table', className: 'table' });
