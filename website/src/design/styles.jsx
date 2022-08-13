import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

export const Sidebar = styled.div`
  position: sticky;
  top: var(--headerHeight);
  left: 0;
  height: calc(100vh - var(--headerHeight));
  min-width: 260px;
  background-color: var(--grey-100);
  border-right: 1px solid var(--border);
`;

export const SidebarWrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

export const SidebarSection = styled.div`
  padding: var(--spacing-l6);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;

  a,
  ul li {
    text-decoration: none;
    margin-bottom: var(--spacing-l4);
  }
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

  h2 {
    border-bottom: 1px solid var(--border);
    font-size: 24px;
    font-weight: 600;
    margin: var(--spacing-l5) 0px var(--spacing-l4);
    scroll-margin-top: 90px;
    padding-bottom: var(--spacing-l1);

    a {
      text-decoration: none;
    }
  }

  img {
    max-width: 100%;
  }
`;

export const PageIndex = styled.div`
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

export const IntroText = styled.p`
  font-size: 20px;
  margin: var(--spacing-l6) 0;
`;

export const SectionHeading = styled.a`
  font-weight: 600;
  color: var(--text);
`;
