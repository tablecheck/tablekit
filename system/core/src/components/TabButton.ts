import { css } from '@emotion/react';

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

export const baseStyles = css`
  padding: var(--spacing-l3) var(--spacing-l4);
  position: relative;
  text-decoration: none !important;
  color: var(--text);
  font-weight: 400;
  cursor: pointer;
  --underline-height: 4px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    height: var(--underline-height);
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
  &[aria-selected='true'] {
    font-weight: 600;
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
