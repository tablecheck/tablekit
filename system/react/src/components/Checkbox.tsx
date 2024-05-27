/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { checkbox } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = checkbox.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Base = styled.input<Props>`
  ${checkbox.fullStyles}
`;
export const checkboxStyledComponents = { Base } as const;

const _Checkbox = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <checkboxStyledComponents.Base
    {...props}
    type={props.type ?? (checkbox.defaultProps.type as never)}
    ref={ref}
  />
));
_Checkbox.displayName = `Checkbox`;
export const Checkbox = _Checkbox as never as typeof _Checkbox & {
  withComponent: (typeof checkboxStyledComponents.Base)['withComponent'];
};
Checkbox.withComponent = ((withComponent: any) => {
  const Styled = checkboxStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLInputElement,
    Props & React.InputHTMLAttributes<HTMLInputElement>
  >((props, ref) => (
    <Styled
      {...props}
      type={props.type ?? (checkbox.defaultProps.type as never)}
      ref={ref}
    />
  ));
  component.displayName = `Checkbox(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
