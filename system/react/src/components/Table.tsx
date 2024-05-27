/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { table } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = table.Props & React.TableHTMLAttributes<HTMLTableElement>;

const Base = styled.table<Props>`
  ${table.fullStyles}
`;
export const tableStyledComponents = { Base } as const;

const _Table = React.forwardRef<
  HTMLTableElement,
  Props & React.TableHTMLAttributes<HTMLTableElement>
>((props, ref) => <tableStyledComponents.Base {...props} ref={ref} />);
_Table.displayName = `Table`;
export const Table = _Table as never as typeof _Table & {
  withComponent: (typeof tableStyledComponents.Base)['withComponent'];
};
Table.withComponent = ((withComponent: any) => {
  const Styled = tableStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLTableElement,
    Props & React.TableHTMLAttributes<HTMLTableElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Table(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
