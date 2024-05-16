/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { childAnchors } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = childAnchors.Props & React.HTMLAttributes<HTMLDivElement>;

export const ChildAnchors = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} child-anchors`}
    ref={ref}
  />
));
ChildAnchors.displayName = `ChildAnchors`;
