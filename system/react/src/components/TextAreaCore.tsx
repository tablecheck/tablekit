/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { textAreaCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = textAreaCore.Props &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Base = styled.textarea<Props>`
  ${textAreaCore.fullStyles}
`;
export const textAreaCoreStyledComponents = { Base } as const;

const _TextAreaCore = React.forwardRef<
  HTMLTextAreaElement,
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <textAreaCoreStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_TextAreaCore.displayName = `TextAreaCore`;
export const TextAreaCore = _TextAreaCore as never as typeof _TextAreaCore & {
  withComponent: (typeof textAreaCoreStyledComponents.Base)['withComponent'];
};
TextAreaCore.withComponent = ((withComponent: any) => {
  const Styled = textAreaCoreStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLTextAreaElement,
    Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >((props, ref) => (
    <Styled
      {...props}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `TextAreaCore(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
