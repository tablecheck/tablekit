/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { badge } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = badge.Props & React.HTMLAttributes<HTMLSpanElement>;

export const Badge = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => (
  <span {...props} className={`${props.className ?? ''} badge`} ref={ref} />
));
Badge.displayName = `Badge`;
