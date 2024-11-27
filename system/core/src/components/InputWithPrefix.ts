import { css } from '../utils';

import { fullStyles as inputStyles } from './InputCore';

export type {
  Props,
  DefaultedProps,
  configurableDefaultProps
} from './InputCore';

export const className = 'input-with-prefix';

export const fullStyles = css`
  ${inputStyles}
  display: grid;
  --tk-input-icon-gap: var(--spacing-l2);
  --tk-input-icon-end-padding: calc(
    var(--tk-input-horizontal-padding) - var(--tk-input-border-width) -
      var(--tk-input-icon-gap)
  );
  grid-template-columns:
    min-content
    auto
    var(--tk-input-icon-gap)
    var(--tk-input-icon-size)
    var(--tk-input-icon-gap)
    var(--tk-input-icon-end-padding);
  gap: 0;
  align-items: center;
  cursor: text;
  padding: 0;

  & > :not(input):not(select):not(button):not(a) {
    pointer-events: none;
  }

  & > :nth-child(1) {
    grid-area: 1/1;
    border-inline-end: var(--tk-input-border-width) solid var(--border);
    background: var(--surface-raised);
    padding: 0 var(--spacing-l3);
    display: flex;
    align-items: center;
    align-self: stretch;
    white-space: nowrap;
    [dir='rtl'] & {
      border-top-right-radius: var(--border-radius-small);
      border-bottom-right-radius: var(--border-radius-small);
    }
    [dir='ltr'] & {
      border-top-left-radius: var(--border-radius-small);
      border-bottom-left-radius: var(--border-radius-small);
    }
  }

  & > :nth-child(3) {
    z-index: 1;
    grid-area: 1/4;
  }

  & > input,
  & > select {
    color: currentColor;
    &,
    &[data-pseudo='focus'],
    &:focus {
      outline: none;
    }
    min-width: 0;
    border: none;
    background: transparent;
    grid-area: 1/2/2/6;
    padding: calc(
        var(--tk-input-vertical-padding) - var(--tk-input-border-width)
      )
      var(--tk-input-horizontal-padding);
    &:not(:last-child) {
      padding-inline-end: calc(
        var(--tk-input-horizontal-padding) + var(--tk-input-icon-size) +
          var(--tk-input-icon-gap)
      );
    }
  }

  & > [data-mode='input-append'] {
    grid-area: 1/4/1/5;
    height: calc(var(--tk-input-height) - var(--tk-input-border-width) * 2);
    --tk-icon-button-padding: 8px !important;
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-start: -7px;
    -webkit-margin-start: -7px;
    margin-inline-end: -11px;
    -webkit-margin-end: -11px;
  }
  &[data-size='small'] > [data-mode='input-append'] {
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-start: -3px;
    -webkit-margin-start: -3px;
    margin-inline-end: -11px;
    -webkit-margin-end: -11px;
  }
`;
