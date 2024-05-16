/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { tabContent } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = tabContent.DefaultedProps &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${tabContent.fullStyles}
`;
export const tabContentStyledComponents = { Base } as const;

const _TabContent = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <tabContentStyledComponents.Base
    {...props}
    role={props.role ?? (tabContent.defaultProps.role as never)}
    ref={ref}
  />
));
_TabContent.displayName = `TabContent`;
export const TabContent = _TabContent as never as typeof _TabContent & {
  withComponent: (typeof tabContentStyledComponents.Base)['withComponent'];
};
TabContent.withComponent = ((withComponent: any) => {
  const Styled = tabContentStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => (
    <Styled
      {...props}
      role={props.role ?? (tabContent.defaultProps.role as never)}
      ref={ref}
    />
  ));
  component.displayName = `TabContent(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
