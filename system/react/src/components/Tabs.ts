import styled from '@emotion/styled';

export const baseSelector = '.tabs';

export const Tabs = styled.div<{
  role?: 'tablist';
}>`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l5);
`;

export const TabContent = styled.div<{ role: 'tabpanel'; id: string }>``;
