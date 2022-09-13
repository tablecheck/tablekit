import styled from '@emotion/styled';

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

export const SectionHeading = styled.a`
  font-weight: 600;
  color: var(--text);
`;
