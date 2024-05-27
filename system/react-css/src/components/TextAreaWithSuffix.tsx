/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { textAreaWithSuffix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = textAreaWithSuffix.Props &
  React.HTMLAttributes<HTMLDivElement>;

export const TextAreaWithSuffix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} textarea-with-suffix`}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
TextAreaWithSuffix.displayName = `TextAreaWithSuffix`;
