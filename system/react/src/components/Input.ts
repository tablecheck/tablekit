import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { BORDER_RADIUS_SMALL, Spacing } from 'utils/constants';

export const baseElement = 'input';

export const baseStyles = css`
  padding: 12px 16px;
  border: 1px solid var(--border-transparent);
  border-radius: ${BORDER_RADIUS_SMALL}px;
  font: var(--body-1);
  background: var(--surface);
  --width: 220px;
  &[data-stretch] {
    --width: 100%;
  }

  &,
  & input,
  & select {
    width: var(--width);
  }

  &,
  &:focus-within,
  & input,
  & select {
    &,
    &:focus {
      outline: none;
    }
  }

  &:focus,
  &:focus-within {
    border-color: var(--border-active);
    box-shadow: 0 0 0 1px var(--border-active);
  }

  &[data-error] {
    border-color: var(--error);
    box-shadow: 0 0 0 1px var(--error);
  }

  &:disabled,
  &[data-disabled] {
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
  'data-stretch'?: boolean;
  'data-error'?: boolean;
  'data-disabled'?: boolean;
}

export const Input = styled(baseElement)<Props>`
  ${baseStyles}
`;

export const InputWithIcons = styled.div<Props>`
  ${baseStyles};
  display: grid;
  grid-template-columns: 8px 16px auto 16px 8px;
  grid-gap: ${Spacing.L2};
  align-items: center;
  cursor: text;
  padding: 0;

  & > :not(input):not(select) {
    z-index: 1;
  }

  & > :not(input):not(select):not(button):not(a) {
    pointer-events: none;
  }

  & > :nth-child(1):not(input):not(select) {
    grid-area: 1/2;
  }
  & > :nth-child(3):not(input):not(select),
  & > :nth-child(2):not(input):not(select) {
    grid-area: 1/4;
  }

  & > input,
  & > select {
    border: none;
    background: transparent;
    grid-area: 1/1/1/6;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
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
