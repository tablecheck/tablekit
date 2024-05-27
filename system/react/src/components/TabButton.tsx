/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { tabButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = tabButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Base = styled.button<Props>`
  ${tabButton.fullStyles}
`;
export const tabButtonStyledComponents = { Base } as const;

const _TabButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <tabButtonStyledComponents.Base
    {...props}
    role={props.role ?? (tabButton.defaultProps.role as never)}
    type="button"
    ref={ref}
  />
));
_TabButton.displayName = `TabButton`;
export const TabButton = _TabButton as never as typeof _TabButton & {
  withComponent: (typeof tabButtonStyledComponents.Base)['withComponent'];
};
TabButton.withComponent = ((withComponent: any) => {
  const Styled = tabButtonStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Props & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      role={props.role ?? (tabButton.defaultProps.role as never)}
      type="button"
      ref={ref}
    />
  ));
  component.displayName = `TabButton(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
