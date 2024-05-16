/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { textAreaWithPrefix } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = textAreaWithPrefix.Props &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${textAreaWithPrefix.fullStyles}
`;
export const textAreaWithPrefixStyledComponents = { Base } as const;

const _TextAreaWithPrefix = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <textAreaWithPrefixStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_TextAreaWithPrefix.displayName = `TextAreaWithPrefix`;
export const TextAreaWithPrefix =
  _TextAreaWithPrefix as never as typeof _TextAreaWithPrefix & {
    withComponent: (typeof textAreaWithPrefixStyledComponents.Base)['withComponent'];
  };
TextAreaWithPrefix.withComponent = ((withComponent: any) => {
  const Styled =
    textAreaWithPrefixStyledComponents.Base.withComponent(withComponent);
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
  component.displayName = `TextAreaWithPrefix(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
