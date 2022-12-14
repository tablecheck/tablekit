import styled from '@emotion/styled';
import { textareaSizingStyles } from '@tablecheck/tablekit-react';

// lifted from https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/
export const FitContentTextareaWrapper = styled.div`
  display: grid;
  grid-template-columns: 8px 16px auto 16px 8px;
  grid-template-rows: var(--input-height) auto;
  grid-gap: 0 var(--spacing-l2);
  align-items: center;
  cursor: text;
  ${textareaSizingStyles};
  background: var(--surface);
  padding: 0;

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

  &:after {
    content: attr(data-content) ' ';
    white-space: pre-wrap;
    visibility: hidden;
    pointer-events: none;
  }
  & > textarea {
    resize: none;
    overflow: hidden;
    width: auto;
  }

  & > textarea,
  &:after {
    align-self: stretch;
    grid-area: 1 / 1 / 3 / 2;
  }

  & > :not(textarea) {
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

  & > textarea,
  &:after {
    border-width: 0 !important;
    box-shadow: none !important;
    background: transparent;
    grid-area: 1/1/3/6;
    padding: 12px 16px;
  }
  & > textarea {
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
      padding-left: calc(16px + 24px);
      padding-right: calc(16px + 24px);
    }
  }
`;
