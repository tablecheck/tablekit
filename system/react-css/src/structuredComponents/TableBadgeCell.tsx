import * as React from 'react';

export type Props = React.InputHTMLAttributes<HTMLTableCellElement>;

/**
 * A utility component that attaches a `data-cell-type="badge"` attribute to a `td` element.
 */
export const TableBadgeCell = React.forwardRef<
  HTMLTableCellElement,
  Props & React.HTMLAttributes<HTMLTableCellElement>
>((props, ref) => <td {...props} data-cell-type="badge" ref={ref} />);
TableBadgeCell.displayName = 'TableBadgeCell';
