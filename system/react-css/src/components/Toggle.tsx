/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { toggle } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = toggle.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Toggle = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    className={`${props.className ?? ''} toggle`}
    type={props.type ?? (toggle.defaultProps.type as never)}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
Toggle.displayName = `Toggle`;
