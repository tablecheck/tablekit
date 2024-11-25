/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { iconButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildVariantComponents, buildWithComponent } from '../utils';

export type Props = iconButton.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type IconButtonVariant = iconButton.IconButtonVariant;

export const IconButton = buildWithComponent<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'IconButton',
  className: 'icon-button',
  additionalProps: {
    type: 'button',
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
export const VariantIconButton = buildVariantComponents<
  | 'primary'
  | 'secondary-brand'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'bare'
  | 'danger'
  | 'danger-bare',
  Props,
  'button'
>({
  variants: [
    'primary',
    'secondary-brand',
    'secondary',
    'tertiary',
    'ghost',
    'bare',
    'danger',
    'danger-bare'
  ],
  className: 'icon-button',
  element: 'button',
  displayName: 'IconButton'
});
