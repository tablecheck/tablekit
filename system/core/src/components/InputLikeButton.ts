import { css } from '../utils';

import { fullStyles as inputfullStyles } from './InputCore';

export type {
  Props,
  DefaultedProps,
  configurableDefaultProps
} from './InputCore';

export const element = 'button';
export const selectors = ['button.input', 'a.input'];
export const className = 'input-like-button';

export const defaultProps = {
  role: 'button'
};

export const fullStyles = css`
  ${inputfullStyles};
  display: flex;
  gap: var(--spacing-l2);
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & > *:not(svg) {
    flex: 1;
    text-align: left;
  }

  &[data-pseudo='hover'],
  &:hover {
    background: var(--surface-hover);
  }
  &[data-pseudo='active'],
  &:active {
    background: var(--surface-active);
  }
`;
