import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { baseStyles, Props } from './Input';

export const classlessSelector = 'select';
export const classySelector = '.select';

export const globalThemeVars = css`
  :root {
    --down-chevron-svg: url('data:image/svg+xml;charset=utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="%23292929"/></svg>');
  }
  @media (prefers-color-scheme: dark) {
    :not([data-theme='light']) {
      --down-chevron-svg: url('data:image/svg+xml;charset=utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="%23ffffff"/></svg>');
    }
  }
  [data-theme='dark'] {
    --down-chevron-svg: url('data:image/svg+xml;charset=utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="%23ffffff"/></svg>');
  }
`;

export const Select = styled.select<Pick<Props, 'data-error'>>`
  ${baseStyles}
  --select-chevron-size: 20px;
  --select-padding-block: 12px;
  --select-padding-inline: 16px;
  appearance: none;
  border: 1px solid var(--border-transparent);
  border-radius: var(--border-radius-small);
  font: var(--body-1);
  width: 220px;
  padding: var(--select-padding-block) var(--select-padding-inline);
  padding-right: calc(
    var(--select-padding-inline) + var(--select-chevron-size) +
      var(--spacing-l1)
  );
  &,
  &:disabled {
    background-color: var(--surface);
    background-image: var(--down-chevron-svg);
    background-position: right var(--select-padding-inline) center;
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: var(--select-chevron-size) var(--select-chevron-size);
  }
  &:disabled {
    background-color: var(--surface-disabled);
  }
  &:focus {
    outline: none;
    border-color: var(--border-active);
    box-shadow: 0 0 0 1px var(--border-active);
  }
`;
