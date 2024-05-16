/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { textAreaWithSuffix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = textAreaWithSuffix.Props &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${textAreaWithSuffix.fullStyles}
`;
export const textAreaWithSuffixStyledComponents = { Base } as const;

const _TextAreaWithSuffix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <textAreaWithSuffixStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_TextAreaWithSuffix.displayName = `TextAreaWithSuffix`;
export const TextAreaWithSuffix =
  _TextAreaWithSuffix as never as typeof _TextAreaWithSuffix & {
    withComponent: (typeof textAreaWithSuffixStyledComponents.Base)['withComponent'];
  };
TextAreaWithSuffix.withComponent = ((withComponent: any) => {
  const Styled =
    textAreaWithSuffixStyledComponents.Base.withComponent(withComponent);
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
  component.displayName = `TextAreaWithSuffix(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
