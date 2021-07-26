import { ReactNode } from 'react';

import { DEFAULT_MOBILE_BREAKPOINT } from '../../styled';
import { GeneralProps, SocialMediaRowType, FooterLinkType } from '../../types';

import { Column, StaticColumnHeader, SocialMediaRow } from './styled';

interface SocialLinksProps<Link extends FooterLinkType> extends GeneralProps {
  /** breakpoint to switch between mobile and desktop views */
  mobileBreakpoint?: string;

  /** a custom render function for the items */
  renderSocialLink: (socialLink: Link) => ReactNode;

  /** a collection of social media icons with links to render */
  socialLinks: SocialMediaRowType<Link>[];
}

export const SocialLinks = <Link extends FooterLinkType>({
  socialLinks,
  mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
  renderSocialLink
}: SocialLinksProps<Link>): JSX.Element => (
  <>
    {(socialLinks || ([] as SocialMediaRowType<Link>[])).map(
      ({ _uid: id, items, title }) => (
        <Column key={id} isSelected mobileBreakpoint={mobileBreakpoint}>
          <StaticColumnHeader mobileBreakpoint={mobileBreakpoint}>
            {title}
          </StaticColumnHeader>
          <SocialMediaRow mobileBreakpoint={mobileBreakpoint}>
            {items.map(renderSocialLink)}
          </SocialMediaRow>
        </Column>
      )
    )}
  </>
);
