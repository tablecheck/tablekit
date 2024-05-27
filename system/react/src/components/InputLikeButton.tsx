/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { inputLikeButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = inputLikeButton.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Base = styled.button<Props>`
  ${inputLikeButton.fullStyles}
`;
export const inputLikeButtonStyledComponents = { Base } as const;

const _InputLikeButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <inputLikeButtonStyledComponents.Base
    {...props}
    role={props.role ?? (inputLikeButton.defaultProps.role as never)}
    type="button"
    ref={ref}
  />
));
_InputLikeButton.displayName = `InputLikeButton`;
export const InputLikeButton =
  _InputLikeButton as never as typeof _InputLikeButton & {
    withComponent: (typeof inputLikeButtonStyledComponents.Base)['withComponent'];
  };
InputLikeButton.withComponent = ((withComponent: any) => {
  const Styled =
    inputLikeButtonStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Props & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      role={props.role ?? (inputLikeButton.defaultProps.role as never)}
      type="button"
      ref={ref}
    />
  ));
  component.displayName = `InputLikeButton(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
