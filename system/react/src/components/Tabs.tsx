/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { tabs } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = tabs.DefaultedProps & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${tabs.fullStyles}
`;
export const tabsStyledComponents = { Base } as const;

const _Tabs = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <tabsStyledComponents.Base
    {...props}
    role={props.role ?? (tabs.defaultProps.role as never)}
    ref={ref}
  />
));
_Tabs.displayName = `Tabs`;
export const Tabs = _Tabs as never as typeof _Tabs & {
  withComponent: (typeof tabsStyledComponents.Base)['withComponent'];
};
Tabs.withComponent = ((withComponent: any) => {
  const Styled = tabsStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => (
    <Styled
      {...props}
      role={props.role ?? (tabs.defaultProps.role as never)}
      ref={ref}
    />
  ));
  component.displayName = `Tabs(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
