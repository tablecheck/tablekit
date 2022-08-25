import styled from '@emotion/styled';

export const classySelector = '.tabs';

export const Tabs = styled.div<{
  role?: 'tablist';
}>`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l5);
`;

export const TabContent = styled.div<{ role: 'tabpanel'; id: string }>``;
