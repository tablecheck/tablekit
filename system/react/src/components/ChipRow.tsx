/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { chipRow } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = chipRow.DefaultedProps &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${chipRow.fullStyles}
`;
export const chipRowStyledComponents = { Base } as const;

const _ChipRow = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <chipRowStyledComponents.Base
    {...props}
    role={props.role ?? (chipRow.defaultProps.role as never)}
    ref={ref}
  />
));
_ChipRow.displayName = `ChipRow`;
export const ChipRow = _ChipRow as never as typeof _ChipRow & {
  withComponent: (typeof chipRowStyledComponents.Base)['withComponent'];
};
ChipRow.withComponent = ((withComponent: any) => {
  const Styled = chipRowStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => (
    <Styled
      {...props}
      role={props.role ?? (chipRow.defaultProps.role as never)}
      ref={ref}
    />
  ));
  component.displayName = `ChipRow(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
