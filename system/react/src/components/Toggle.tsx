/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { toggle } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = toggle.DefaultedProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Base = styled.input<Props>`
  ${toggle.fullStyles}
`;
export const toggleStyledComponents = { Base } as const;

const _Toggle = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <toggleStyledComponents.Base
    {...props}
    type={props.type ?? (toggle.defaultProps.type as never)}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_Toggle.displayName = `Toggle`;
export const Toggle = _Toggle as never as typeof _Toggle & {
  withComponent: (typeof toggleStyledComponents.Base)['withComponent'];
};
Toggle.withComponent = ((withComponent: any) => {
  const Styled = toggleStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLInputElement,
    Props & React.InputHTMLAttributes<HTMLInputElement>
  >((props, ref) => (
    <Styled
      {...props}
      type={props.type ?? (toggle.defaultProps.type as never)}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `Toggle(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
