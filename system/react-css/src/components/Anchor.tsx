/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { anchor } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = anchor.Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = React.forwardRef<
  HTMLAnchorElement,
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => (
  <a {...props} className={`${props.className ?? ''} link`} ref={ref} />
));
Anchor.displayName = `Anchor`;
