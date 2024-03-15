/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { anchor } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = anchor.Props;

export const Anchor = React.forwardRef<
  HTMLAnchorElement,
  Props & React.HTMLAttributes<HTMLAnchorElement>
>((props, ref) => (
  <a {...props} ref={ref} className={`${props.className || ''} link`} />
));
