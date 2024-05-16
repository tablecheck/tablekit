/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { textAreaWithPrefix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = textAreaWithPrefix.Props &
  React.HTMLAttributes<HTMLDivElement>;

export const TextAreaWithPrefix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} textarea-with-prefix`}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
TextAreaWithPrefix.displayName = `TextAreaWithPrefix`;
