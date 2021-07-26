import { getIcon } from '@tablecheck/tablekit-icon';
import { useState } from 'react';
import { Spring } from 'react-spring';

import { DEFAULT_MOBILE_BREAKPOINT } from '../../styled';
import { GeneralProps, NavigationList, FooterLinkType } from '../../types';

import {
  Column,
  ColumnContent,
  getColumnSpringProps,
  ColumnHeaderWrapper,
  MobileIcon
} from './styled';

type NavigationListsProps<Link extends FooterLinkType> = {
  /** breakpoint to switch between mobile and desktop views */
  mobileBreakpoint?: string;

  /** a collection of links to render */
  navigationLists: NavigationList<Link>[];

  /** a custom render function for the items */
  renderLink: (link: Link) => JSX.Element;
};

export const ColumnHeader = ({
  children,
  ...props
}: GeneralProps): JSX.Element => {
  const { mobileBreakpoint } = props;
  return (
    <ColumnHeaderWrapper {...props}>
      <div>{children}</div>
      <MobileIcon
        icon={getIcon('chevronDown')}
        mobileBreakpoint={mobileBreakpoint}
      />
    </ColumnHeaderWrapper>
  );
};

export const NavigationLists = <Link extends FooterLinkType>({
  navigationLists,
  mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
  renderLink
}: NavigationListsProps<Link>): JSX.Element => {
  const [selectedSubnav, setSelectedSubnav] = useState<string | null>(null);
  const toggleSelectedSubnav = (clickedNav: string | null) => {
    setSelectedSubnav(selectedSubnav === clickedNav ? null : clickedNav);
  };

  return (
    <>
      {navigationLists &&
        navigationLists.length > 0 &&
        navigationLists.slice(0, 5).map(({ _uid: id, items, title }) => (
          <Column
            key={id}
            isSelected={selectedSubnav === id}
            mobileBreakpoint={mobileBreakpoint}
          >
            <ColumnHeader
              onClick={() => toggleSelectedSubnav(id)}
              mobileBreakpoint={mobileBreakpoint}
            >
              {title}
            </ColumnHeader>
            <Spring {...getColumnSpringProps(selectedSubnav === id)}>
              {(style) => (
                <ColumnContent
                  style={style}
                  mobileBreakpoint={mobileBreakpoint}
                >
                  {items.map(renderLink)}
                </ColumnContent>
              )}
            </Spring>
          </Column>
        ))}
    </>
  );
};
