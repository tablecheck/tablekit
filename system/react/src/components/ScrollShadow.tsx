/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { scrollShadow } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = scrollShadow.Props & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${scrollShadow.fullStyles}
`;
export const scrollShadowStyledComponents = { Base } as const;

const _ScrollShadow = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <scrollShadowStyledComponents.Base {...props} ref={ref} />);
_ScrollShadow.displayName = `ScrollShadow`;
export const ScrollShadow = _ScrollShadow as never as typeof _ScrollShadow & {
  withComponent: (typeof scrollShadowStyledComponents.Base)['withComponent'];
};
ScrollShadow.withComponent = ((withComponent: any) => {
  const Styled = scrollShadowStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `ScrollShadow(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
