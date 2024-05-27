/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { textAreaCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = textAreaCore.Props &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaCore = React.forwardRef<
  HTMLTextAreaElement,
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    {...props}
    className={`${props.className ?? ''} textarea`}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
TextAreaCore.displayName = `TextAreaCore`;
