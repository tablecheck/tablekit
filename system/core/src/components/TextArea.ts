import { css } from '@emotion/react';

export const element = 'textarea';
export const selectors = ['textarea'];
export const className = 'textarea';

export const textareaSizingStyles = css`
  padding: 12px 16px;
  border: 1px solid var(--border-transparent);
  border-radius: var(--border-radius-small);
  font: var(--body-1);
  min-height: var(--input-height);
  --width: 220px;
  &[data-stretch] {
    --width: 100%;
  }
  width: var(--width);
  resize: vertical;
  outline: none;
`;

export interface Props {
  'data-variant'?: 'error' | 'disabled';
  'data-stretch'?: boolean;
}

export const baseStyles = css`
  ${textareaSizingStyles}
  background: var(--surface);

  &,
  &:focus-within,
  &:focus {
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
