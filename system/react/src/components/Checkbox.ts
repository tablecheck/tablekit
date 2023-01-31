import styled from '@emotion/styled';

export const classlessSelector = 'input[type="checkbox"]';
export const classySelector = '.checkbox';

export const Checkbox = styled.input<{ type?: 'checkbox' }>`
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

  &:hover {
    border-color: var(--text);
  }
  &:focus {
    outline: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--focus);
  }
  &:checked,
  &:indeterminate {
    background-color: var(--text);
    border-color: var(--text);
  }
  &:disabled {
    border-color: var(--border-transparent);
    background-color: var(--text-disabled);
    cursor: not-allowed;
  }
  &:before {
    --c: var(--text-contrast); /* Color */
    --t: 2px; /* thickness */
    --w: 11px; /* width */
    --h: 7px; /* height */
    display: inline-block;
    content: '';
    height: var(--h);
    width: var(--w);
    top: calc(50% - calc(var(--w) - var(--h)) / 2);
    left: 50%;
    position: absolute;
    transform-origin: center center;
  }
  &:checked:before {
    top: calc(50% - calc(var(--w) - var(--h)) / 2);
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-image: linear-gradient(var(--c), var(--c)),
      linear-gradient(var(--c), var(--c));
    background-position: left bottom;
    background-size: calc(100% - var(--t) / 2) var(--t),
      var(--t) calc(100% - var(--t) / 2);
    background-repeat: no-repeat, no-repeat;
  }
  &:indeterminate:before {
    top: calc(50% - calc(var(--t) / 2));
    left: calc(50% - calc(var(--w) / 2));
    background-image: linear-gradient(var(--c), var(--c));
    background-attachment: center;
    background-size: calc(100% - var(--t) / 2) var(--t);
    background-repeat: no-repeat;
  }
`;

Checkbox.defaultProps = {
  type: 'checkbox'
};
