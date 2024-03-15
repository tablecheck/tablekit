import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  padding: 48px;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 960px;

  h1 {
    margin-bottom: var(--spacing-l5);
  }

  h2 {
    border-bottom: 1px solid var(--border);
    margin: var(--spacing-l5) 0px var(--spacing-l4);
    scroll-margin-top: 90px;
    padding-bottom: var(--spacing-l1);

    a {
      text-decoration: none;
    }
  }

  p {
    margin: 0 0 var(--spacing-l4);
  }

  img {
    max-width: 100%;
  }
`;

export const IntroText = styled.p`
  font-size: 20px;
  margin: var(--spacing-l6) 0;
  line-height: 1.5;
`;
