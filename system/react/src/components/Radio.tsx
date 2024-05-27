/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { radio } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = radio.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Base = styled.input<Props>`
  ${radio.fullStyles}
`;
export const radioStyledComponents = { Base } as const;

const _Radio = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <radioStyledComponents.Base
    {...props}
    type={props.type ?? (radio.defaultProps.type as never)}
    ref={ref}
  />
));
_Radio.displayName = `Radio`;
export const Radio = _Radio as never as typeof _Radio & {
  withComponent: (typeof radioStyledComponents.Base)['withComponent'];
};
Radio.withComponent = ((withComponent: any) => {
  const Styled = radioStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLInputElement,
    Props & React.InputHTMLAttributes<HTMLInputElement>
  >((props, ref) => (
    <Styled
      {...props}
      type={props.type ?? (radio.defaultProps.type as never)}
      ref={ref}
    />
  ));
  component.displayName = `Radio(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
