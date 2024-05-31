import { css } from '../utils';

export const element = 'input';
export const selectors = ['input:not([type="checkbox"]):not([type="radio"])'];
export const className = 'input';

export const heightMap = {
  small: 36,
  medium: 40,
  large: 48
} as const;

export const fullStyles = css`
  --tk-input-border-width: 1px;
  border: var(--tk-input-border-width) solid var(--border);
  border-radius: var(--border-radius-small);
  font: var(--body-1);
  background: var(--surface);
  --tk-input-text: currentColor;
  color: var(--tk-input-text);

  --tk-input-width: 220px;
  &[data-stretch] {
    --tk-input-width: 100%;
  }
  &[data-size='medium'],
  &:not([data-size]) {
    --tk-input-vertical-padding: 8px;
    --tk-input-height: ${heightMap.medium}px;
  }

  &[data-size='small'] {
    --tk-input-vertical-padding: 6px;
    --tk-input-height: ${heightMap.small}px;
  }

  &[data-size='large'] {
    --tk-input-vertical-padding: 12px;
    --tk-input-height: ${heightMap.large}px;
  }
  --tk-input-horizontal-padding: 12px;
  padding: calc(var(--tk-input-vertical-padding) - var(--tk-input-border-width))
    var(--tk-input-horizontal-padding);

  &,
  &:focus,
  &:focus-within {
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

  &::placeholder,
  & ::placeholder,
  .placeholder {
    color: var(--text-placeholder);
  }

  &:disabled,
  &[data-variant='disabled'] {
    --tk-input-text: var(--text-disabled);
    box-shadow: none;
    background: var(--surface-disabled);
    cursor: default;
    pointer-events: none;
  }
  width: var(--tk-input-width);
`;

export interface Props {
  'data-variant'?: 'error' | 'disabled';
  'data-stretch'?: boolean;
  'data-size'?: 'small' | 'medium' | 'large';
}

export type DefaultedProps = Props;

export const configurableDefaultProps = {
  'data-size': 'controlSize'
};
