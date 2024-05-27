/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputWithSuffix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = inputWithSuffix.Props &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${inputWithSuffix.fullStyles}
`;
export const inputWithSuffixStyledComponents = { Base } as const;

const _InputWithSuffix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <inputWithSuffixStyledComponents.Base {...props} ref={ref} />
));
_InputWithSuffix.displayName = `InputWithSuffix`;
export const InputWithSuffix =
  _InputWithSuffix as never as typeof _InputWithSuffix & {
    withComponent: (typeof inputWithSuffixStyledComponents.Base)['withComponent'];
  };
InputWithSuffix.withComponent = ((withComponent: any) => {
  const Styled =
    inputWithSuffixStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `InputWithSuffix(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
