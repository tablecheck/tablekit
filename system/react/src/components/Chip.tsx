import styled from '@emotion/styled';

export const classySelector = '.chip';

export const Chip = styled.button<{
  role?: 'tab';
  'aria-selected'?: boolean;
  'aria-controls'?: string;
}>`
  --padding-y: 12px;
  --padding-x: 16px;
  padding: calc(var(--padding-y) - 2px) calc(var(--padding-x) - 2px);
  position: relative;
  text-decoration: none !important;
  color: var(--text);
  border-radius: var(--border-radius-full);
  border: 2px solid var(--border-transparent);

  &:hover {
    background-color: var(--surface-hover);
  }
  &:active {
    background-color: var(--surface-active);
  }
  &[aria-selected='true'] {
    background-color: var(--secondary);
    border-color: var(--secondary);
    color: var(--text-contrast);
  }
  &:disabled {
    color: var(--text-disabled);
    background-color: var(--surface-disabled);
    cursor: not-allowed;
  }
`;
