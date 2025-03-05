import { css } from '../utils';

import { fullStyles as inputStyles } from './InputCore';

export type { Props, DefaultedProps } from './InputCore';
export { configurableDefaultProps } from './InputCore';

export const element = 'textarea';
export const selectors = ['textarea'];
export const className = 'textarea';

export const textareaSizingStyles = css`
  ${inputStyles}
  width: var(--tk-input-width);
  --tk-textarea-height: calc(
    2lh + (var(--tk-input-border-width) * 2) +
      (var(--tk-input-vertical-padding) * 2)
  );
  min-height: var(--tk-textarea-height);
  resize: vertical;
  outline: none;
  @supports (field-sizing: content) {
    & {
      field-sizing: content;
      resize: none;
    }
  }
`;

export const textareaWrapperStyles = css`
  &[data-content]:after {
    display: block;
    content: attr(data-content) ' ';
    white-space: pre-wrap;
    word-break: break-word;
    visibility: hidden;
    pointer-events: none;
    align-self: stretch;
    padding: calc(
        var(--tk-input-vertical-padding) - var(--tk-input-border-width)
      )
      var(--tk-input-horizontal-padding);
  }
  & > textarea {
    resize: none;
    overflow: hidden;
    align-self: stretch;
  }
  & > svg {
    min-height: var(--tk-input-height);
    align-self: flex-start;
  }
  @supports (field-sizing: content) {
    &[data-content]:after {
      display: none;
    }
    & > textarea {
      field-sizing: content;
    }
  }
`;

export const fullStyles = css`
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
