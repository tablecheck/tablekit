/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { iconButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = iconButton.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    {...props}
    className={`${props.className ?? ''} icon-button`}
    type="button"
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
IconButton.displayName = `IconButton`;
