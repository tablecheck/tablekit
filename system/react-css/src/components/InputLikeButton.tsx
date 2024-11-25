/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { inputLikeButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = inputLikeButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InputLikeButton = buildWithComponent<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>({
  tag: 'button',
  displayName: 'InputLikeButton',
  className: 'input',
  additionalProps: {
    role: inputLikeButton.defaultProps.role as never,
    type: 'button'
  }
});
