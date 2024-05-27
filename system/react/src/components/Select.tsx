/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { select } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = select.Props &
  React.SelectHTMLAttributes<HTMLSelectElement>;

const Base = styled.select<Props>`
  ${select.fullStyles}
`;
export const selectStyledComponents = { Base } as const;

const _Select = React.forwardRef<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>((props, ref) => (
  <selectStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_Select.displayName = `Select`;
export const Select = _Select as never as typeof _Select & {
  withComponent: (typeof selectStyledComponents.Base)['withComponent'];
};
Select.withComponent = ((withComponent: any) => {
  const Styled = selectStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLSelectElement,
    Props & React.SelectHTMLAttributes<HTMLSelectElement>
  >((props, ref) => (
    <Styled
      {...props}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `Select(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
