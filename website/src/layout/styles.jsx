import styled from '@emotion/styled';

export const breakpoints = {
  mobile: '@media screen and (max-width: 768px)',
  desktop: '@media screen and (min-width: 769px)'
};

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.main`
  margin: 0 auto;
  max-width: var(--containerWidth);
  flex: 1 0 auto;
`;
