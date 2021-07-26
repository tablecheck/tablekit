import { DEFAULT_MAX_WIDTH, DEFAULT_MOBILE_BREAKPOINT } from '../../styled';
import { GeneralProps, PolicyRowType, FooterLinkType } from '../../types';

import {
  FooterRowContainer,
  LogoColumnContent,
  PolicyColumn,
  PolicyRow
} from './styled';

type FooterRowProps<Link extends FooterLinkType> = GeneralProps & {
  /** custom className to put on the Outer div element */
  className?: string;

  /** a collection of policy links to render */
  policyRows: PolicyRowType<Link>[];

  /** a custom render function for the links */
  renderPolicyRowLink: (link: Link) => JSX.Element;
};

export const FooterRow = <Link extends FooterLinkType>({
  children,
  className,
  policyRows,
  maxWidth = DEFAULT_MAX_WIDTH,
  mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
  renderPolicyRowLink
}: FooterRowProps<Link>): JSX.Element => (
  <FooterRowContainer
    className={className}
    maxWidth={maxWidth}
    mobileBreakpoint={mobileBreakpoint}
  >
    <LogoColumnContent>{children}</LogoColumnContent>
    <PolicyColumn>
      {(policyRows || ([] as PolicyRowType<Link>[])).map(
        ({ _uid: id, items }) => (
          <PolicyRow key={id} mobileBreakpoint={mobileBreakpoint}>
            {items.map(renderPolicyRowLink)}
          </PolicyRow>
        )
      )}
    </PolicyColumn>
  </FooterRowContainer>
);
