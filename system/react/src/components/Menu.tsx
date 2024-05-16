/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { menu } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = menu.Props & React.HTMLAttributes<HTMLDivElement>;

const Base = styled.div<Props>`
  ${menu.fullStyles}
`;
export const menuStyledComponents = { Base } as const;

const _Menu = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <menuStyledComponents.Base {...props} ref={ref} />);
_Menu.displayName = `Menu`;
export const Menu = _Menu as never as typeof _Menu & {
  withComponent: (typeof menuStyledComponents.Base)['withComponent'];
};
Menu.withComponent = ((withComponent: any) => {
  const Styled = menuStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Menu(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
