/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { menuItem } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = menuItem.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Base = styled.button<Props>`
  ${menuItem.fullStyles}
`;
export const menuItemStyledComponents = { Base } as const;

const _MenuItem = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <menuItemStyledComponents.Base {...props} type="button" ref={ref} />
));
_MenuItem.displayName = `MenuItem`;
export const MenuItem = _MenuItem as never as typeof _MenuItem & {
  withComponent: (typeof menuItemStyledComponents.Base)['withComponent'];
};
MenuItem.withComponent = ((withComponent: any) => {
  const Styled = menuItemStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Props & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => <Styled {...props} type="button" ref={ref} />);
  component.displayName = `MenuItem(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
