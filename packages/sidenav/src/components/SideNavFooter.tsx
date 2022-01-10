import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Tooltip } from '@tablecheck/tablekit-tooltip';
import { ReactNode } from 'react';

import { SideNavFooterContainer, SideNavFooterLabel } from '../styled';
import { SideNavContextState } from '../types';

const FooterWrapper = ({
  children,
  isExpanded,
  size,
  toggleSideNav,
  tooltipContent
}: Pick<SideNavContextState, 'isExpanded' | 'size' | 'toggleSideNav'> & {
  children: ReactNode;
  tooltipContent: string;
}): JSX.Element => {
  if (isExpanded) {
    return (
      <SideNavFooterContainer onClick={toggleSideNav} size={size}>
        {children}
      </SideNavFooterContainer>
    );
  }
  return (
    <Tooltip content={tooltipContent} popperProps={{ placement: 'right' }}>
      {(setTargetRef) => (
        <SideNavFooterContainer
          ref={setTargetRef}
          onClick={toggleSideNav}
          size={size}
        >
          {children}
        </SideNavFooterContainer>
      )}
    </Tooltip>
  );
};

export const SideNavFooter = ({
  isExpanded,
  size,
  toggleStateLabels,
  toggleSideNav
}: Pick<
  SideNavContextState,
  'isExpanded' | 'size' | 'toggleSideNav' | 'toggleStateLabels'
>): JSX.Element => (
  <FooterWrapper
    toggleSideNav={toggleSideNav}
    size={size}
    isExpanded={isExpanded}
    tooltipContent={toggleStateLabels.expand}
  >
    <Icon
      icon={
        isExpanded
          ? getIcon('chevronDoubleLeft')
          : getIcon('chevronDoubleRight')
      }
      size={size}
    />
    {isExpanded && (
      <SideNavFooterLabel size={size}>
        {toggleStateLabels.collapse}
      </SideNavFooterLabel>
    )}
  </FooterWrapper>
);
