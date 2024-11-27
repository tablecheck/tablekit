/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { button } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { buildVariantComponents, buildWithComponent } from '../utils';

export type Props = button.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonVariant = button.ButtonVariant;

export const Button = buildWithComponent<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'Button',
  className: 'btn',
  additionalProps: {
    type: button.defaultProps.type as never,
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
export const VariantButton = buildVariantComponents<
  | 'primary'
  | 'secondary-brand'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'bare'
  | 'danger',
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
    'danger'
  ],
  tag: 'button',
  displayName: 'Button',
  className: 'btn',
  additionalProps: {
    type: button.defaultProps.type as never,
    'data-size': { toString: () => getConfigDefault('controlSize') }
  }
});
