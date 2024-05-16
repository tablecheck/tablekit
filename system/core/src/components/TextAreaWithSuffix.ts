import { css } from '../utils';

import {
  fullStyles as textareaStyles,
  textareaWrapperStyles
} from './TextAreaCore';

export type { Props, DefaultedProps } from './TextAreaCore';
export { configurableDefaultProps } from './InputCore';

export const className = 'textarea-with-suffix';

export const fullStyles = css`
  ${textareaStyles};
  ${textareaWrapperStyles};
  display: grid;
  --tk-input-icon-gap: var(--spacing-l2);
  --tk-input-icon-end-padding: calc(
    var(--tk-input-horizontal-padding) - var(--tk-input-border-width) -
      var(--tk-input-icon-gap)
  );
  grid-template-columns:
    var(--tk-input-icon-end-padding)
    var(--tk-input-icon-gap)
    var(--tk-input-icon-size)
    var(--tk-input-icon-gap)
    auto
    min-content;
  grid-template-rows: var(--tk-textarea-height) auto;
  gap: 0;
  align-items: center;
  cursor: text;
  padding: 0;

  & > :nth-child(1):not(textarea) {
    z-index: 1;
    grid-area: 1/3;
  }

  & > :not(textarea):not(button):not(a) {
    pointer-events: none;
  }

  & > textarea {
    color: currentColor;
    &,
    &[data-pseudo='focus'],
    &:focus {
      outline: none;
    }
    min-width: 0;
    border: none;
    background: transparent;
    grid-area: 1/2/3/6;
    padding: calc(
        var(--tk-input-vertical-padding) - var(--tk-input-border-width)
      )
      var(--tk-input-horizontal-padding);

    &:not(:first-child) {
      padding-inline-start: calc(
        var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
          var(--tk-input-icon-gap)
      );
    }

    & + * {
      grid-area: 1/6/3/6;
      border-inline-start: var(--tk-input-border-width) solid var(--border);
      background: var(--surface-raised);
      padding: 0 var(--spacing-l3);
      display: flex;
      align-items: flex-start;
      align-self: stretch;
      line-height: var(--tk-textarea-height);
      white-space: nowrap;
      [dir='rtl'] & {
        border-top-left-radius: var(--border-radius-small);
        border-bottom-left-radius: var(--border-radius-small);
      }
      [dir='ltr'] & {
        border-top-right-radius: var(--border-radius-small);
        border-bottom-right-radius: var(--border-radius-small);
      }
    }
  }
  &:after {
    grid-area: 1/2/3/6;
  }
  &[data-with-icon='before']:after {
    padding-inline-start: calc(
      var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
        var(--tk-input-icon-gap)
    );
  }
`;
