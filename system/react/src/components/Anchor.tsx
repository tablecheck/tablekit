/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { anchor } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = anchor.Props &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Base = styled.a<Props>`
  ${anchor.fullStyles}
`;
export const anchorStyledComponents = { Base } as const;

const _Anchor = React.forwardRef<
  HTMLAnchorElement,
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => <anchorStyledComponents.Base {...props} ref={ref} />);
_Anchor.displayName = `Anchor`;
export const Anchor = _Anchor as never as typeof _Anchor & {
  withComponent: (typeof anchorStyledComponents.Base)['withComponent'];
};
Anchor.withComponent = ((withComponent: any) => {
  const Styled = anchorStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLAnchorElement,
    Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Anchor(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
