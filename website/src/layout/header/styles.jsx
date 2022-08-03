import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-l4);
`;

export const LogoSymbol = styled.img`
  width: 30px;
  height: 30px;
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
  font-size: 28px;
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
