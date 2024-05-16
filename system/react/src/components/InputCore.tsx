/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = inputCore.Props &
  React.InputHTMLAttributes<HTMLInputElement>;

const Base = styled.input<Props>`
  ${inputCore.fullStyles}
`;
export const inputCoreStyledComponents = { Base } as const;

const _InputCore = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <inputCoreStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_InputCore.displayName = `InputCore`;
export const InputCore = _InputCore as never as typeof _InputCore & {
  withComponent: (typeof inputCoreStyledComponents.Base)['withComponent'];
};
InputCore.withComponent = ((withComponent: any) => {
  const Styled = inputCoreStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLInputElement,
    Props & React.InputHTMLAttributes<HTMLInputElement>
  >((props, ref) => (
    <Styled
      {...props}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `InputCore(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
