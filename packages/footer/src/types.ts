import { HTMLAttributes, ReactNode } from 'react';

export type StyleProps = {
  /** maximum width of the footer */
  maxWidth?: string;

  /** breakpoint to switch between mobile and desktop views */
  mobileBreakpoint?: string;
};

export interface GeneralProps
  extends HTMLAttributes<HTMLDivElement>,
    StyleProps {
  /** content to be rendered in the footer */
  children?: ReactNode;

  /** custom className to put on the Outer div element */
  className?: string;
}

export type FooterLinkType = Record<string, unknown>;

interface BaseRow<Link extends FooterLinkType> {
  _uid: string;
  items: Link[];
}

export type PolicyRowType<Link extends FooterLinkType> = BaseRow<Link>;

export interface NavigationList<Link extends FooterLinkType>
  extends BaseRow<Link> {
  title: string;
}

export interface SocialMediaRowType<Link extends FooterLinkType>
  extends BaseRow<Link> {
  title: string;
}

export interface FooterProps<Link extends FooterLinkType> extends GeneralProps {
  navigationLists: Record<string, unknown>[];
  actionButtons: Record<string, unknown>[];
  socialLinks: Record<string, unknown>[];
  policyRows: PolicyRowType<Link>[];
}
