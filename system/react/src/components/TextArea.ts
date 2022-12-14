import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const classlessSelector = 'textarea';
export const classySelector = '.textarea';

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

export const baseStyles = css`
  ${textareaSizingStyles}
  background: var(--surface);

  &,
  &:focus-within,
  &:focus {
    outline: none;
  }

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

export interface Props {
  'data-variant'?: 'error' | 'disabled';
  'data-stretch'?: boolean;
}

export const TextArea = styled.textarea<Props>`
  ${baseStyles}
`;

export const TextAreaWithIcons = styled.div<Props>`
  ${baseStyles};
  display: grid;
  grid-template-columns: 8px 16px auto 16px 8px;
  grid-template-rows: var(--input-height) auto;
  grid-gap: 0 var(--spacing-l2);
  align-items: center;
  cursor: text;
  padding: 0;

  & > :not(textarea):not(select) {
    z-index: 1;
  }

  & > :not(textarea):not(button):not(a) {
    pointer-events: none;
  }
  & > :nth-child(1):not(textarea) {
    grid-area: 1/2;
  }
  & > :nth-child(3):not(textarea),
  & > :nth-child(2):not(textarea) {
    grid-area: 1/4;
  }

  & > textarea {
    ${textareaSizingStyles};
    border: none;
    background: transparent;
    grid-area: 1/1/3/6;
    // the 24 below is 16px width icon + 8px gap
    &:first-child:not(:last-child) {
      padding-left: calc(16px + (24 * var(--rtl-space)));
      padding-right: calc(16px + (24 * var(--ltr-space)));
    }
    &:not(:first-child):last-child {
      padding-left: calc(16px + (24 * var(--ltr-space)));
      padding-right: calc(16px + (24 * var(--rtl-space)));
    }
    &:not(:first-child):not(:last-child) {
      padding: 12px calc(16px + 24px);
    }
  }
`;
