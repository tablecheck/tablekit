/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputWithPrefix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = inputWithPrefix.Props &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${inputWithPrefix.fullStyles}
`;
export const inputWithPrefixStyledComponents = { Base } as const;

const _InputWithPrefix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <inputWithPrefixStyledComponents.Base {...props} ref={ref} />
));
_InputWithPrefix.displayName = `InputWithPrefix`;
export const InputWithPrefix =
  _InputWithPrefix as never as typeof _InputWithPrefix & {
    withComponent: (typeof inputWithPrefixStyledComponents.Base)['withComponent'];
  };
InputWithPrefix.withComponent = ((withComponent: any) => {
  const Styled =
    inputWithPrefixStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `InputWithPrefix(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
