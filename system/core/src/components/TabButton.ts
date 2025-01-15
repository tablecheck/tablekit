import { css } from '../utils';

export const element = 'button';
export const className = 'tab-button';

export interface Props {
  role: 'tab';
  'aria-selected'?: boolean;
  'aria-controls': string;
}

export interface DefaultedProps {
  role?: 'tab';
  'aria-selected'?: boolean;
  'aria-controls': string;
}

export const defaultProps = {
  role: 'tab'
};

export const fullStyles = css`
  padding: var(--spacing-l3) var(--spacing-l4);
  position: relative;
  text-decoration: none !important;
  --tk-tab-button-color: var(--text-subtle);
  color: var(--tk-tab-button-color);
  font-weight: 400;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:not([aria-selected='true']) {
    cursor: pointer;
  }
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    height: var(--tk-tabs-underline-height, 2px);
    left: 0;
    right: 0;
    background: var(--text);
    opacity: 0;
    transform: scale(0.6);
    transform-origin: bottom center;
    transition: all 100ms ease-in-out;
  }
  &[data-pseudo='hover'],
  &:hover {
    &:after {
      transition-duration: 250ms;
      opacity: 0.6;
      transform: scale(0.9);
    }
  }
  &[data-pseudo='active'],
  &:active {
    &:after {
      opacity: 1;
      transform: scale(0.97);
    }
  }
  &.active,
  &[aria-selected='true'] {
    --tk-tab-button-color: var(--text);
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
