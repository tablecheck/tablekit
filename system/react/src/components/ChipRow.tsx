import styled from '@emotion/styled';

export const classySelector = '.chip-row';

export const ChipRow = styled.div<{
  role?: 'tablist';
}>`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-l2);
`;
