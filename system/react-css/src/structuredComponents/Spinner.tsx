import type { spinner } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = spinner.Props;

export const Spinner = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <span {...props} ref={ref} />);
