import styled from '@emotion/styled';

export const PageIndexWrapper = styled.div`
  width: 240px;
  flex: 0 0 auto;
  margin-left: 40px;
  position: sticky;
  top: 114px;
  max-height: calc((100vh - 66px) - 48px);
  grid-area: table-of-contents / table-of-contents / table-of-contents /
    table-of-contents;
  overflow: auto;

  a {
    display: block;
    padding: var(--spacing-l1) 0;
    text-decoration: none;
  }
`;

export const PageIndexTitle = styled.span`
  font-weight: 600;
  display: inline-block;
  margin-bottom: var(--spacing-l1);
`;
