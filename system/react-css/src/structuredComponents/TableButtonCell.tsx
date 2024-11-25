import * as React from 'react';

import { buildWithComponent } from '../utils';

export type Props = React.InputHTMLAttributes<HTMLTableCellElement>;

/**
 * A utility component that attaches a `data-cell-type="button"` attribute to a `td` element.
 */
export const TableButtonCell = buildWithComponent<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>({
  tag: 'td',
  className: undefined,
  displayName: 'TableButtonCell',
  additionalProps: {
    'data-cell-type': 'button'
  }
});
