import * as React from 'react';

export type Props = React.InputHTMLAttributes<HTMLTableCellElement>;

/**
 * A utility component that attaches a `data-cell-type="button"` attribute to a `td` element.
 */
export const TableButtonCell = React.forwardRef<
  HTMLTableCellElement,
  Props & React.HTMLAttributes<HTMLTableCellElement>
>((props, ref) => <td {...props} data-cell-type="button" ref={ref} />);
TableButtonCell.displayName = 'TableButtonCell';
