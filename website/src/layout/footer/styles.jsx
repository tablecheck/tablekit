import styled from '@emotion/styled';

import { breakpoints } from '../styles';

export const FooterWrapper = styled.div`
  padding-top: 128px;
  background-color: var(--surface-hover);
`;

export const InnerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-l6);
  padding-right: var(--spacing-l6);
  max-width: var(--containerWidth);
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  margin-left: calc(-1 * var(--spacing-l6));
  margin-right: calc(-1 * var(--spacing-l6));
`;

export const Column = styled.div`
  width: 100%;
  padding-left: var(--spacing-l6);
  padding-right: var(--spacing-l6);
  margin-bottom: 64px;

  ${breakpoints.desktop} {
    width: 50%;
  }
`;

export const SvgIcon = styled.svg`
  display: inline-block;
  fill: currentColor;
  user-select: none;
  vertical-align: text-top;
  margin-right: var(--spacing-l2);
`;

export const Link = styled.a`
  text-decoration: none;
  padding-top: var(--spacing-l1);
  margin-bottom: var(--spacing-l4);
  display: block;
`;

export const Button = styled.a`
  text-decoration: none;
  width: fit-content;
`;

export const Title = styled.h1`
  margin: 0 0 var(--spacing-l4);
  font-size: 48px;
  font-weight: 600;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: var(--spacing-l6);
`;

export const SecondaryContent = styled.div`
  margin-top: 64px;
  padding-top: var(--spacing-l6);
  padding-bottom: var(--spacing-l6);
  border-top: 2px solid var(--border);
`;
