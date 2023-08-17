import { css } from '@emotion/react';

import {
  baseStyles as textareaBaseStyles,
  Props as TextareaProps,
  textareaSizingStyles
} from './TextArea';

export const className = 'textarea-with-icons';

export type Props = TextareaProps;

export const baseStyles = css`
  ${textareaBaseStyles};
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
