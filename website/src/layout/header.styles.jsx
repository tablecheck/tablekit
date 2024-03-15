import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: var(--headerHeight);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-l6);
  ${({ isHomePage }) =>
    isHomePage
      ? css`
          background-color: var(--surface);
        `
      : css`
          border-bottom: 1px solid var(--border);
          background-color: var(--surface-hover);
          top: 0;
          left: 0;
          z-index: 1;
          position: sticky;
        `};
`;

export const LogoSymbol = styled.img`
  width: 24px;
  height: 24px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text);
`;

export const LogoWording = styled.div`
  display: inline-block;
  margin-left: var(--spacing-l1);
  font-size: 24px;
`;

export const TopNav = styled.ul`
  display: flex;

  li {
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
`;

export const ToggleTheme = styled.button`
  svg {
    width: 30px;
    height: 30px;
  }
`;
