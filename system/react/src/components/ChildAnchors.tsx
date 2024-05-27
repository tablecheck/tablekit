/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { childAnchors } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = childAnchors.Props & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${childAnchors.fullStyles}
`;
export const childAnchorsStyledComponents = { Base } as const;

const _ChildAnchors = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <childAnchorsStyledComponents.Base {...props} ref={ref} />);
_ChildAnchors.displayName = `ChildAnchors`;
export const ChildAnchors = _ChildAnchors as never as typeof _ChildAnchors & {
  withComponent: (typeof childAnchorsStyledComponents.Base)['withComponent'];
};
ChildAnchors.withComponent = ((withComponent: any) => {
  const Styled = childAnchorsStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `ChildAnchors(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
