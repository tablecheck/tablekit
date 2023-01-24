import styled from '@emotion/styled';

export const classySelector = '.chip';

export const Chip = styled.button<{
  role?: 'tab';
  'aria-selected'?: boolean;
  'aria-controls'?: string;
  'data-size'?: 'small' | 'regular';
}>`
  --padding-y: 12px;
  --padding-x: 16px;
  padding: calc(var(--padding-y) - 2px) calc(var(--padding-x) - 2px);
  position: relative;
  text-decoration: none !important;
  color: var(--text);
  border-radius: var(--border-radius-full);
  border: 2px solid var(--border-transparent);
  white-space: nowrap;
  &:hover {
    background-color: var(--surface-hover);
    cursor: pointer;
  }
  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus, hsla(219, 78.5%, 52.5%, 1));
  }
  &:active {
    background-color: var(--surface-active);
  }
  &[data-size='small'] {
    --padding-x: 14px;
    --padding-y: 6px;
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
