/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { textArea } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = textArea.Props;

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    {...props}
    ref={ref}
    className={`${props.className || ''} textarea`}
  />
));
