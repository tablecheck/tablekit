/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { scrollShadow } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = scrollShadow.Props & React.HTMLAttributes<HTMLDivElement>;

export const ScrollShadow = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    {...props}
    className={`${props.className ?? ''} scroll-shadow`}
    ref={ref}
  />
));
ScrollShadow.displayName = `ScrollShadow`;
