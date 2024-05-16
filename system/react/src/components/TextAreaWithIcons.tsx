/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { textAreaWithIcons } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = textAreaWithIcons.Props &
  React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${textAreaWithIcons.fullStyles}
`;
export const textAreaWithIconsStyledComponents = { Base } as const;

const _TextAreaWithIcons = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <textAreaWithIconsStyledComponents.Base
    {...props}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_TextAreaWithIcons.displayName = `TextAreaWithIcons`;
export const TextAreaWithIcons =
  _TextAreaWithIcons as never as typeof _TextAreaWithIcons & {
    withComponent: (typeof textAreaWithIconsStyledComponents.Base)['withComponent'];
  };
TextAreaWithIcons.withComponent = ((withComponent: any) => {
  const Styled =
    textAreaWithIconsStyledComponents.Base.withComponent(withComponent);
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
  component.displayName = `TextAreaWithIcons(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
