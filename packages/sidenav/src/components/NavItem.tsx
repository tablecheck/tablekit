import { Icon, IconDefinition } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';
import { Tooltip } from '@tablecheck/tablekit-tooltip';
import { ElementType, ReactNode, Ref } from 'react';

import { useSideNav } from '../Sidenav';
import { IndentedNavItem, NavItemLabel } from '../styled';
import { SideNavItemProps } from '../types';
import { getSideNavRegularWidth, getSideNavLargeWidth } from '../utils';

export function SideNavItem<Component extends ElementType>({
  children,
  isNested,
  icon,
  ...passThroughProps
}: SideNavItemProps<Component> & {
  children?: JSX.Element | ReactNode | null;
}): JSX.Element {
  const { isExpanded, size } = useSideNav();
  let width: string | number;
  if (size === Size.Large) {
    width = getSideNavLargeWidth({ isExpanded });
  } else {
    width = getSideNavRegularWidth({ isExpanded });
  }

  let elemBefore = (icon || null) as React.ReactNode;
  if (icon && (icon as IconDefinition).icon) {
    elemBefore = <Icon size={size} icon={icon as IconDefinition} />;
  }
  // This causes all sorts of hell and isn't actually helping at all
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: any = {
    ...passThroughProps,
    isExpanded,
    isNested,
    size,
    elemBefore,
    width
  };
  if (isExpanded || isNested) {
    return (
      <IndentedNavItem {...props}>
        <NavItemLabel size={size}>{children}</NavItemLabel>
      </IndentedNavItem>
    );
  }
  return (
    <Tooltip content={children} popperProps={{ placement: 'right' }}>
      {(setTargetRef: Ref<HTMLDivElement>) => (
        <div ref={setTargetRef}>
          <IndentedNavItem {...props}>
            <NavItemLabel size={size}>{children}</NavItemLabel>
          </IndentedNavItem>
        </div>
      )}
    </Tooltip>
  );
}
