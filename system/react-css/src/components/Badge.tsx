/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { badge } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildVariantComponents, buildWithComponent } from '../utils';

export type Props = badge.Props & React.HTMLAttributes<HTMLSpanElement>;
export type BadgeVariant = badge.BadgeVariant;

export const Badge = buildWithComponent<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>({ tag: 'span', displayName: 'Badge', className: 'badge' });
export const VariantBadge = buildVariantComponents<
  | 'tertiary'
  | 'ghost'
  | 'success'
  | 'info'
  | 'error'
  | 'warning'
  | 'neutral'
  | 'purple'
  | 'orange'
  | 'disabled',
  Props,
  'span'
>({
  variants: [
    'tertiary',
    'ghost',
    'success',
    'info',
    'error',
    'warning',
    'neutral',
    'purple',
    'orange',
    'disabled'
  ],
  tag: 'span',
  displayName: 'Badge',
  className: 'badge'
});
