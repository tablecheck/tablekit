/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { tooltip } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = tooltip.Props & React.HTMLAttributes<HTMLSpanElement>;

const Base = styled.span<Props>`
  ${tooltip.fullStyles}
`;
export const tooltipStyledComponents = { Base } as const;

const _Tooltip = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <tooltipStyledComponents.Base {...props} ref={ref} />);
_Tooltip.displayName = `Tooltip`;
export const Tooltip = _Tooltip as never as typeof _Tooltip & {
  withComponent: (typeof tooltipStyledComponents.Base)['withComponent'];
};
Tooltip.withComponent = ((withComponent: any) => {
  const Styled = tooltipStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLSpanElement,
    Props & React.HTMLAttributes<HTMLSpanElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Tooltip(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
