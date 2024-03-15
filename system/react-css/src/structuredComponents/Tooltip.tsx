import type { tooltip } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = tooltip.Props;

export const Tooltip = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <span {...props} ref={ref} />);
