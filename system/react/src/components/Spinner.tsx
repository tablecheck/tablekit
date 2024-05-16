/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { spinner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = spinner.Props & React.HTMLAttributes<HTMLSpanElement>;

const Base = styled.span<Props>`
  ${spinner.fullStyles}
`;
const Core = styled.span<Props>`
  ${spinner.coreStyles}
`;
export const spinnerStyledComponents = { Core, Base } as const;

const _Spinner = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <spinnerStyledComponents.Base {...props} ref={ref} />);
_Spinner.displayName = `Spinner`;
export const Spinner = _Spinner as never as typeof _Spinner & {
  withComponent: (typeof spinnerStyledComponents.Base)['withComponent'];
};
Spinner.withComponent = ((withComponent: any) => {
  const Styled = spinnerStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLSpanElement,
    Props & React.HTMLAttributes<HTMLSpanElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Spinner(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
