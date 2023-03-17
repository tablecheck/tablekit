import { css } from '@emotion/react';

export const element = 'input';
export const selectors = ['input:not([type="checkbox"]):not([type="radio"])'];
export const className = 'input';

export const sharedInputStyles = css`
  padding: 12px 16px;
  border: 1px solid var(--border-transparent);
  border-radius: var(--border-radius-small);
  font: var(--body-1);
  background: var(--surface);
  --width: 220px;
  &[data-stretch] {
    --width: 100%;
  }
  &,
  &:focus,
  &:focus-within {
    outline: none;
  }

  &[data-pseudo='focus'],
  &:focus,
  &:focus-within {
    border-color: var(--focus);
    box-shadow: 0 0 0 1px var(--focus);
  }
  &[data-variant='error'] {
    border-color: var(--error);
    box-shadow: 0 0 0 1px var(--error);
  }

  &:disabled,
  &[data-variant='disabled'] {
    color: var(--text-disabled);
    border-color: var(--border-transparent);
    box-shadow: none;
    background: var(--surface-disabled);
    cursor: default;
    pointer-events: none;
  }

  &::placeholder,
  & ::placeholder,
  .placeholder {
    color: var(--text-placeholder);
  }
`;

export const baseStyles = css`
  ${sharedInputStyles}
  width: var(--width);
`;

export interface Props {
  'data-variant'?: 'error' | 'disabled';
  'data-stretch'?: boolean;
}
