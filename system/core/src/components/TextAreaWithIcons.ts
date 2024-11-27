import { css } from '../utils';

import {
  fullStyles as textareaStyles,
  textareaWrapperStyles
} from './TextAreaCore';

export type { Props, DefaultedProps } from './TextAreaCore';
export { configurableDefaultProps } from './InputCore';

export const className = 'textarea-with-icons';

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
    var(--tk-input-icon-end-padding) var(--tk-input-icon-size) auto var(
      --tk-input-icon-size
    )
    var(--tk-input-icon-end-padding);
  grid-template-rows: var(--tk-textarea-height) auto;
  gap: 0 var(--tk-input-icon-gap);
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
    &,
    &[data-pseudo='focus'],
    &:focus {
      outline: none;
    }
    color: currentColor;
    width: var(--tk-input-width);
    border: none;
    background: transparent;
    grid-area: 1/1/3/6;
    padding: calc(
        var(--tk-input-vertical-padding) - var(--tk-input-border-width)
      )
      var(--tk-input-horizontal-padding);

    &:first-child:not(:last-child),
    &:not(:first-child):not(:last-child) {
      padding-inline-end: calc(
        var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
          var(--tk-input-icon-gap)
      );
    }
    &:not(:first-child):last-child,
    &:not(:first-child):not(:last-child) {
      padding-inline-start: calc(
        var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
          var(--tk-input-icon-gap)
      );
    }
  }

  &:after {
    grid-area: 1/1/3/6;
  }
  &[data-with-icon='before']:after,
  &[data-with-icon='both']:after {
    padding-inline-start: calc(
      var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
        var(--tk-input-icon-gap)
    );
  }
  &[data-with-icon='after']:after,
  &[data-with-icon='both']:after {
    padding-inline-end: calc(
      var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
        var(--tk-input-icon-gap)
    );
  }
  & > [data-mode='input-append'] {
    height: calc(var(--tk-input-height) - var(--tk-input-border-width) * 2);
    --tk-icon-button-padding: 8px !important;
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-start: -6px;
    -webkit-margin-start: -6px;
    margin-inline-end: -9px;
    -webkit-margin-end: -9px;
  }
  &[data-size='small'] > [data-mode='input-append'] {
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-start: -3px;
    -webkit-margin-start: -3px;
    margin-inline-end: -9px;
    -webkit-margin-end: -9px;
  }
`;
