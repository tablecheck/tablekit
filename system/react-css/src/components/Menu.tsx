/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { menu } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = menu.Props;

export const Menu = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div {...props} ref={ref} className={`${props.className || ''} menu`} />
));
