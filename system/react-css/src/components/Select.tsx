/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { select } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';

export type Props = select.Props &
  React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>((props, ref) => (
  <select
    {...props}
    className={`${props.className ?? ''} select`}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
Select.displayName = `Select`;
