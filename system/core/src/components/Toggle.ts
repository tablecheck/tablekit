import { OptionalKeys, css } from '../utils';

export const element = 'input';
export const selectors = ['input[type="checkbox"].toggle'];
export interface Props {
  type: 'checkbox';
  'data-size'?: 'small' | 'medium' | 'large';
}

export type DefaultedProps = OptionalKeys<Props, 'type'>;
export const defaultProps = { type: 'checkbox' };

export const configurableDefaultProps = {
  'data-size': 'controlSize'
};

export const fullStyles = css`
  position: relative;
  appearance: none;
  border-radius: var(--border-radius-full);
  width: var(--tk-toggle-width);
  height: var(--tk-toggle-height);
  transition: all 80ms linear;
  cursor: pointer;
  background: var(--tk-toggle-background);

  &:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc((var(--tk-toggle-height) - var(--tk-toggle-handle-size)) / 2);
    content: '';
    height: var(--tk-toggle-handle-size);
    width: var(--tk-toggle-handle-size);
    border-radius: 50%;
    background-color: var(--tk-toggle-foreground);
  }

  &:checked:before {
    right: calc((var(--tk-toggle-height) - var(--tk-toggle-handle-size)) / 2);
    left: auto;
  }

  &:indeterminate {
    &:before {
      width: calc(var(--tk-toggle-height) - 2px);
      height: calc(
        (var(--tk-toggle-height) - var(--tk-toggle-handle-size)) / 2
      );
      border-radius: 50px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  --tk-toggle-background: var(--toggle-inactive);
  --tk-toggle-foreground: var(--surface-raised);

  &:checked,
  &:indeterminate {
    --tk-toggle-background: var(--brand-primary);
  }

  &:disabled,
  &:disabled:hover {
    --tk-toggle-background: var(--toggle-disabled);
    --tk-toggle-foreground: var(--surface-disabled);
    cursor: not-allowed;
  }

  &[data-pseudo='focus'],
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--focus);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none !important;
  }

  &[data-size='medium'],
  &:not([data-size]) {
    --tk-toggle-width: 50px;
    --tk-toggle-height: 26px;
    --tk-toggle-handle-size: 18px;
  }

  &[data-size='small'] {
    --tk-toggle-width: 38px;
    --tk-toggle-height: 20px;
    --tk-toggle-handle-size: 15px;
  }

  &[data-size='large'] {
    --tk-toggle-width: 68px;
    --tk-toggle-height: 38px;
    --tk-toggle-handle-size: 26px;
  }
`;
