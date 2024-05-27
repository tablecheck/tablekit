/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { buttonGroup } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = buttonGroup.Props & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${buttonGroup.fullStyles}
`;
export const buttonGroupStyledComponents = { Base } as const;

const _ButtonGroup = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <buttonGroupStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_ButtonGroup.displayName = `ButtonGroup`;
export const ButtonGroup = _ButtonGroup as never as typeof _ButtonGroup & {
  withComponent: (typeof buttonGroupStyledComponents.Base)['withComponent'];
};
ButtonGroup.withComponent = ((withComponent: any) => {
  const Styled = buttonGroupStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => (
    <Styled
      {...props}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `ButtonGroup(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
