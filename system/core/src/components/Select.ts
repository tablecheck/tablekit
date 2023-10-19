import { css } from '@emotion/react';

import { themedCss } from '../themeVariables/theme';

import { baseStyles as inputBaseStyles, Props as InputProps } from './Input';

export const element = 'select';
export const selectors = ['select'];
export const className = 'select';

export const globalThemeVars = themedCss({
  light: css`
    --down-chevron-svg: url('data:image/svg+xml;charset=utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="%23292929"/></svg>');
  `,
  dark: css`
    --down-chevron-svg: url('data:image/svg+xml;charset=utf8, <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="%23ffffff"/></svg>');
  `
});

export type Props = InputProps;

export const baseStyles = css`
  ${inputBaseStyles};
  --select-chevron-size: 20px;
  --select-padding-block: 12px;
  --select-padding-inline: 16px;
  appearance: none;
  border: 1px solid var(--border-transparent);
  border-radius: var(--border-radius-small);
  font: var(--body-1);
  --width: 220px;
  &[data-stretch] {
    --width: 100%;
  }
  width: var(--width);
  padding: var(--select-padding-block) var(--select-padding-inline);
  padding-right: calc(
    var(--select-padding-inline) + var(--select-chevron-size) +
      var(--spacing-l1)
  );
  cursor: pointer;
  &,
  &:disabled,
  &[data-variant='disabled'] {
    background-color: var(--surface);
    background-image: var(--down-chevron-svg);
    background-position: right var(--select-padding-inline) center;
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: var(--select-chevron-size) var(--select-chevron-size);
  }
  &:disabled,
  &[data-variant='disabled'] {
    background-color: var(--surface-disabled);
    cursor: default;
  }
  &[data-pseudo='focus'],
  &:focus {
    outline: none;
    border-color: var(--focus);
    box-shadow: 0 0 0 1px var(--focus);
  }
  &[data-variant='error'] {
    border-color: var(--error);
    box-shadow: 0 0 0 1px var(--error);
  }
`;
