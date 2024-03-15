import { css } from '@emotion/react';

import { OptionalKeys } from '../typeUtils';

export const element = 'input';
export const selectors = ['input[type="checkbox"].toggle'];
export interface Props {
  type: 'checkbox';
  'data-size'?: 'small' | 'regular';
}

export type DefaultedProps = OptionalKeys<Props, 'type'>;
export const defaultProps = { type: 'checkbox' };

export const baseStyles = css`
  position: relative;
  appearance: none;
  border: 2px solid var(--border);
  border-radius: 70px;
  width: 68px;
  height: 38px;
  transition: all 80ms linear;
  cursor: pointer;

  &:before {
    --size: 26px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--spacing-l1);
    content: '';
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background-color: var(--text);
  }

  &:disabled:before {
    background-color: var(--text-disabled);
  }

  &[data-pseudo='hover'],
  &:hover {
    background-color: var(--surface-hover-transparent);

    &:disabled {
      background-color: var(--surface);

      &:before {
        background-color: var(--text);
      }
    }
  }

  &:checked,
  &:indeterminate {
    background-color: var(--primary);
    border: 2px solid var(--border-transparent);

    &:before {
      background-color: var(--surface);
    }

    &[data-pseudo='hover'],
    &:hover {
      background-color: var(--primary-hover);
    }

    &:disabled {
      background-color: var(--surface-disabled);
      border: 2px solid var(--border);

      &[data-pseudo='hover'],
      &:hover {
        &::before {
          background-color: var(--surface);
        }
      }
    }
  }

  &:checked:before {
    right: var(--spacing-l1);
    left: auto;
  }

  &:indeterminate {
    &:before {
      width: 36px;
      height: 6px;
      background-color: var(--surface);
      border-radius: 50px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &[data-pseudo='focus'],
  &:focus,
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border: 2px solid var(--focus);
      border-radius: 99px;
    }
  }

  &[data-size='small'] {
    width: 50px;
    height: 26px;

    &:before {
      --size: 18px;
    }

    &:indeterminate:before {
      width: 26px;
      height: 4px;
    }
  }
`;
