import type { spinner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = spinner.Props;

export const Spinner = buildWithComponent<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>({
  tag: 'span',
  displayName: 'Spinner',
  className: undefined
});
