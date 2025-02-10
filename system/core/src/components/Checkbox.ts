import { OptionalKeys, css } from '../utils';

export const element = 'input';
export const selectors = ['input[type="checkbox"]:not(.toggle)'];
export const className = 'checkbox';

export interface Props {
  type: 'checkbox';
}

export type DefaultedProps = OptionalKeys<Props, 'type'>;
export const defaultProps = { type: 'checkbox' };

export const fullStyles = css`
  --checkbox-size: 20px;
  appearance: none;
  cursor: pointer;
  position: relative;
  margin: 2px;
  padding: 0;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  min-width: var(--checkbox-size);
  min-height: var(--checkbox-size);
  max-width: var(--checkbox-size);
  max-height: var(--checkbox-size);
  border: 2px solid var(--border);
  border-radius: 2px;
  transition: all 80ms linear;
  background-color: var(--surface);

  &[data-pseudo='hover'],
  &:hover {
    border-color: var(--text);
  }
  &:focus {
    outline: none;
  }
  &[data-pseudo='focus'],
  &:focus,
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--focus);
  }
  &:focus:not(:focus-visible) {
    box-shadow: none !important;
  }
  &:checked,
  &:indeterminate {
    background-color: var(--brand-primary);
    border-color: var(--brand-primary);
  }
  &:disabled {
    border-color: var(--border);
    background-color: var(--text-disabled);
    cursor: not-allowed;
  }
  &:before {
    --tk-input-check-color: var(--brand-primary-text);
    --tk-input-check-thickness: 2px;
    --tk-input-check-width: 11px;
    --tk-input-check-height: 7px;
    display: inline-block;
    content: '';
    height: var(--tk-input-check-height);
    width: var(--tk-input-check-width);
    top: calc(
      50% - calc(var(--tk-input-check-width) - var(--tk-input-check-height)) / 2
    );
    left: 50%;
    position: absolute;
    transform-origin: center center;
  }
  &:checked:before {
    top: calc(
      50% - calc(var(--tk-input-check-width) - var(--tk-input-check-height)) / 2
    );
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-image: linear-gradient(
        var(--tk-input-check-color),
        var(--tk-input-check-color)
      ),
      linear-gradient(var(--tk-input-check-color), var(--tk-input-check-color));
    background-position: left bottom;
    background-size: calc(100% - var(--tk-input-check-thickness) / 2)
        var(--tk-input-check-thickness),
      var(--tk-input-check-thickness)
        calc(100% - var(--tk-input-check-thickness) / 2);
    background-repeat: no-repeat, no-repeat;
  }
  &:indeterminate:before {
    top: calc(50% - calc(var(--tk-input-check-thickness) / 2));
    left: calc(50% - calc(var(--tk-input-check-width) / 2));
    background-image: linear-gradient(
      var(--tk-input-check-color),
      var(--tk-input-check-color)
    );
    background-position: top;
    background-size: calc(100% - var(--tk-input-check-thickness) / 2)
      var(--tk-input-check-thickness);
    background-repeat: no-repeat;
  }
`;
