/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import type { table } from '@tablecheck/tablekit-core';
import * as React from 'react';

export type Props = table.Props;

export const Table = React.forwardRef<
  HTMLTableElement,
  Props & React.TableHTMLAttributes<HTMLTableElement>
>((props, ref) => (
  <table {...props} ref={ref} className={`${props.className || ''} table`} />
));
