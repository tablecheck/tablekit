/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { chipRow } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = chipRow.DefaultedProps &
  React.HTMLAttributes<HTMLDivElement>;

export const ChipRow = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} chip-row`}
    role={props.role ?? (chipRow.defaultProps.role as never)}
    ref={ref}
  />
));
ChipRow.displayName = `ChipRow`;
