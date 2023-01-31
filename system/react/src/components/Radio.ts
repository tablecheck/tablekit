import styled from '@emotion/styled';

export const classlessSelector = 'input[type="radio"]';
export const classySelector = '.radio';

export const Radio = styled.input<{ type?: 'radio' }>`
  --radio-size: 20px;
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
    background-color: transparent;
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

  &:hover {
    border-color: var(--text);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--focus);
  }

  &:checked {
    border-color: var(--text);
  }

  &:checked:before {
    background-color: var(--text);
  }

  &:disabled {
    border-color: var(--border-transparent);
    background-color: var(--surface-disabled);
    cursor: not-allowed;
  }
`;

Radio.defaultProps = {
  type: 'radio'
};
