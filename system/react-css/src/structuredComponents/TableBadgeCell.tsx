import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = React.InputHTMLAttributes<HTMLTableCellElement>;

/**
 * A utility component that attaches a `data-cell-type="badge"` attribute to a `td` element.
 */
export const TableBadgeCell = buildWithComponent<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>({
  tag: 'td',
  className: undefined,
  displayName: 'TableBadgeCell',
  additionalProps: {
    'data-cell-type': 'badge'
  }
});
