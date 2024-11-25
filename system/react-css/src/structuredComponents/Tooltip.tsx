import type { tooltip } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = tooltip.Props;

export const Tooltip = buildWithComponent<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>({
  tag: 'span',
  displayName: 'Tooltip',
  className: undefined
});
