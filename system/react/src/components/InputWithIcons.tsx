/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputWithIcons } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = inputWithIcons.Props & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${inputWithIcons.fullStyles}
`;
export const inputWithIconsStyledComponents = { Base } as const;

const _InputWithIcons = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <inputWithIconsStyledComponents.Base {...props} ref={ref} />);
_InputWithIcons.displayName = `InputWithIcons`;
export const InputWithIcons =
  _InputWithIcons as never as typeof _InputWithIcons & {
    withComponent: (typeof inputWithIconsStyledComponents.Base)['withComponent'];
  };
InputWithIcons.withComponent = ((withComponent: any) => {
  const Styled =
    inputWithIconsStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `InputWithIcons(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
