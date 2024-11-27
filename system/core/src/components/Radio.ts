import { OptionalKeys, css } from '../utils';

export const element = 'input';
export const selectors = ['input[type="radio"]:not(.toggle)'];
export const className = 'radio';

export interface Props {
  type: 'radio';
}

export type DefaultedProps = OptionalKeys<Props, 'type'>;
export const defaultProps = { type: 'radio' };

export const fullStyles = css`
  --radio-size: 20px;
  --tk-radio-fill: transparent;
  appearance: none;
  border-radius: 100%;
  border: 2px solid var(--border);
  cursor: pointer;
  height: var(--radio-size);
  margin: 2px;
  max-height: var(--radio-size);
  max-width: var(--radio-size);
  min-height: var(--radio-size);
  min-width: var(--radio-size);
  position: relative;
  transition: all 80ms linear;
  width: var(--radio-size);

  &:before {
    --radio-inner-size: 9px;
    background-color: var(--tk-radio-fill);
    border-radius: 100%;
    content: '';
    height: var(--radio-inner-size);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 80ms linear;
    width: var(--radio-inner-size);
  }

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

  &:checked {
    border-color: var(--brand-primary);
    --tk-radio-fill: var(--brand-primary);
  }

  &:disabled {
    border-color: var(--border);
    background-color: var(--surface-disabled);
    cursor: not-allowed;
    --tk-radio-fill: transparent;
    &:checked {
      --tk-radio-fill: var(--text-disabled);
    }
  }
`;
