/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { table } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = table.Props & React.TableHTMLAttributes<HTMLTableElement>;

export const Table = React.forwardRef<
  HTMLTableElement,
  Props & React.TableHTMLAttributes<HTMLTableElement>
>((props, ref) => (
  <table {...props} className={`${props.className ?? ''} table`} ref={ref} />
));
Table.displayName = `Table`;
