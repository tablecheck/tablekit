/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { menuList } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = menuList.Props & React.MenuHTMLAttributes<HTMLMenuElement>;

const Base = styled.menu<Props>`
  ${menuList.fullStyles}
`;
export const menuListStyledComponents = { Base } as const;

const _MenuList = React.forwardRef<
  HTMLMenuElement,
  Props & React.MenuHTMLAttributes<HTMLMenuElement>
>((props, ref) => <menuListStyledComponents.Base {...props} ref={ref} />);
_MenuList.displayName = `MenuList`;
export const MenuList = _MenuList as never as typeof _MenuList & {
  withComponent: (typeof menuListStyledComponents.Base)['withComponent'];
};
MenuList.withComponent = ((withComponent: any) => {
  const Styled = menuListStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLMenuElement,
    Props & React.MenuHTMLAttributes<HTMLMenuElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `MenuList(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
