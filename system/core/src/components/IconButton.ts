import { css } from '@emotion/react';

import { variantStyles as buttonVariantStyles } from './Button';
import {
  beforeStyles as spinnerBeforeStyles,
  coreStyles as spinnerElementStyles
} from './Spinner';

export const element = 'button';
export const selectors = ['button.icon', 'a[role="button"].icon'];
export const className = 'icon-button';

export interface Props {
  'data-variant'?: IconButtonVariant;
  'data-size'?: 'small' | 'large';
  'aria-busy'?: boolean;
  'data-round'?: boolean;
  /**
   * @deprecated The tooltip styling clashes with the busy styling, apply the tooltip on a wrapper component
   */
  'data-tooltip'?: never;
}

const variants = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'bare',
  'danger'
] as const;

export type IconButtonVariant = (typeof variants)[number];

export const variantStyles = {
  ...buttonVariantStyles,
  danger: css`
    --color: var(--error);
    border: 1px solid var(--border-transparent);
    &[data-pseudo='hover'],
    &:hover {
      --background-color: var(--surface-hover);
    }
    &[data-pseudo='active'],
    &:active {
      --background-color: var(--surface-active);
    }
  `
};

export const coreStyles = css`
  --padding: 12px;
  position: relative;
  display: grid;
  padding: calc(var(--padding) - 3px);
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: var(--border-radius-small);

  align-items: center;
  text-align: center;

  border: solid 1px var(--border-color);

  &[data-pseudo='focus'],
  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      pointer-events: none;
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      border-radius: 6px;
      border: 2px solid var(--focus, hsla(219, 78.5%, 52.5%, 1));
    }
  }

  &:disabled:disabled {
    &,
    &[data-pseudo='hover'],
    &[data-pseudo='active'],
    &:hover,
    &:active {
      --background-color: var(--surface-disabled);
      --border-color: var(--surface-disabled);
      --color: var(--text-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }
    &:after {
      border: none;
    }
  }

  color: var(--color);
  background-color: var(--background-color);
  --loading-transition: 300ms ease-in-out;
  transition: color var(--loading-transition),
    background-color var(--loading-transition),
    border-color var(--loading-transition);

  &:before {
    --spinner-size: 20px;
    ${spinnerBeforeStyles};
    display: block;
    position: absolute;
    top: calc(50% - var(--spinner-size) / 2);
    left: calc(50% - var(--spinner-size) / 2);
    opacity: 0;
    background-color: var(--color);
    transition: opacity var(--loading-transition);
    transition-delay: 0ms;
    z-index: 2;
  }
  &[aria-busy='true'] {
    ${spinnerElementStyles};
    color: transparent;
  }
  &[aria-busy='true']:before {
    opacity: 1;
    pointer-events: none;
    transition-duration: 150ms;
    transition-delay: 200ms;
  }

  &[data-round] {
    border-radius: 50%;
    &[data-pseudo='focus'],
    &:focus:not(:focus-visible),
    &:focus-visible {
      border-radius: 50%;
      &::after {
        border-radius: 50%;
      }
    }
  }

  &[data-size='small'] {
    padding: calc(var(--padding) - 5px);
  }

  &[data-size='large'] {
    padding: calc(var(--padding) + 1px);
  }
`;

export const baseStyles = css`
  ${coreStyles}
  &:not([data-variant]) {
    ${variantStyles.primary}
  }
`;
