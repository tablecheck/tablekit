import { Icon, getIcon, IconDefinition } from '@tablecheck/tablekit-icon';
import {
  InlineDialog,
  InlineDialogProps
} from '@tablecheck/tablekit-inline-dialog';
import { useState } from 'react';

import { useSideNav } from '../Sidenav';
import {
  NavSectionContainer,
  IndentedNavItem,
  NavItemLabel,
  NavSectionChildrenContainer
} from '../styled';
import { SideNavSectionProps } from '../types';

export const SideNavSection = (
  props: SideNavSectionProps<'div'>
): JSX.Element => {
  const { size, isExpanded } = useSideNav();
  const [isOpenedDropdown, setIsOpenedDropdown] = useState(false);
  const {
    children,
    icon,
    label,
    isOpened,
    childrenCount,
    isSelected,
    isDisabled,
    ...additionalProps
  } = props;
  let elemBefore = (icon || null) as React.ReactNode;
  if (icon && (icon as IconDefinition).icon) {
    elemBefore = <Icon size={size} icon={icon as IconDefinition} />;
  }
  if (isExpanded) {
    return (
      <NavSectionContainer
        isOpened={isOpened && isExpanded}
        isSelected={isSelected}
      >
        <IndentedNavItem
          {...additionalProps}
          size={size}
          isExpanded
          isDisabled={isDisabled}
          elemBefore={elemBefore}
          elemAfter={
            <Icon
              icon={isOpened ? getIcon('chevronDown') : getIcon('chevronUp')}
              size={size}
            />
          }
        >
          {label && <NavItemLabel size={size}>{label}</NavItemLabel>}
        </IndentedNavItem>
        <NavSectionChildrenContainer
          isOpened={isOpened && isExpanded}
          size={size}
          childrenCount={childrenCount}
        >
          {children}
        </NavSectionChildrenContainer>
      </NavSectionContainer>
    );
  }
  return (
    <InlineDialog<HTMLDivElement>
      renderTrigger={({
        ref
      }: Parameters<InlineDialogProps<HTMLDivElement>['renderTrigger']>[0]) => (
        <IndentedNavItem
          ref={ref}
          size={size}
          isExpanded={false}
          isDisabled={isDisabled}
          isSelected={isSelected}
          elemBefore={elemBefore}
          onMouseOver={() => !isOpenedDropdown && setIsOpenedDropdown(true)}
          onFocus={() => !isOpenedDropdown && setIsOpenedDropdown(true)}
          onMouseLeave={() => isOpenedDropdown && setIsOpenedDropdown(false)}
        >
          {label && <NavItemLabel size={size}>{label}</NavItemLabel>}
        </IndentedNavItem>
      )}
      popperProps={{
        placement: 'right-start'
      }}
      isOpen={isOpenedDropdown}
      isControllable
    >
      <NavSectionChildrenContainer
        isOpened={(isOpened && isExpanded) || isOpenedDropdown}
        size={size}
        onMouseEnter={() => setIsOpenedDropdown(true)}
        onMouseLeave={() => setIsOpenedDropdown(false)}
        childrenCount={childrenCount}
        onClick={() => setIsOpenedDropdown(false)}
      >
        {children}
      </NavSectionChildrenContainer>
    </InlineDialog>
  );
};
