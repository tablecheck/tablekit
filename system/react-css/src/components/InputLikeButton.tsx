/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { inputLikeButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = inputLikeButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InputLikeButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <button
    {...props}
    className={`${props.className ?? ''} input`}
    role={props.role ?? (inputLikeButton.defaultProps.role as never)}
    type="button"
    ref={ref}
  />
));
InputLikeButton.displayName = `InputLikeButton`;
