import { ForwardedRef, forwardRef } from 'react';

import {
  FooterContainer,
  DEFAULT_MAX_WIDTH,
  DEFAULT_MOBILE_BREAKPOINT
} from './styled';
import { FooterProps, FooterLinkType } from './types';

export const Footer = forwardRef(
  <Link extends FooterLinkType>(
    {
      className,
      children,
      maxWidth = DEFAULT_MAX_WIDTH,
      mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
      ...restProps
    }: FooterProps<Link>,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => (
    <FooterContainer
      {...restProps}
      className={className}
      ref={ref}
      maxWidth={maxWidth}
      mobileBreakpoint={mobileBreakpoint}
    >
      {children}
    </FooterContainer>
  )
);
