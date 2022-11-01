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

export const ImageWrap = styled.div`
  background: #f7f7f7;
  border: 1px solid var(--border);
  border-radius: var(--border-radius-small);
  text-align: center;
  min-height: 220px;
  display: flex;
  justify-content: center;
  p {
    display: flex;
    margin: 0;
  }
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--spacing-l3);
  row-gap: var(--spacing-l5);
`;

// Temp styling for rules, switch to TK alerts

export const Rule = styled.div`
  background: var(--success-surface);
  color: var(--success-text);
  border-radius: var(--border-radius-small);
  padding: var(--spacing-l2) var(--spacing-l3);
  margin-top: var(--spacing-l3);

  &[data-variant='error'] {
    background: var(--error-surface);
    color: var(--error-text);
  }

  &[data-variant='warning'] {
    background: var(--warning-surface);
    color: var(--warning-text);
  }
`;
