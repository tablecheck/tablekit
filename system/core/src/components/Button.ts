import { css } from '@emotion/react';

import {
  beforeStyles as spinnerBeforeStyles,
  baseStyles as spinnerElementStyles
} from './Spinner';

export const element = 'button';
export const selectors = ['button', 'a[role="button"]'];
export const className = 'btn';

export interface Props {
  /**
   * @deprecated The tooltip styling clashes with the busy styling, apply the tooltip on a wrapper component
   */
  'data-tooltip'?: never;
  'data-variant'?: ButtonVariant;
  'data-size'?: 'small' | 'large';
  'aria-busy'?: boolean;
}

const variants = ['primary', 'secondary', 'tertiary', 'ghost', 'bare'] as const;

export type ButtonVariant = (typeof variants)[number];

export const variantStyles = {
  primary: css`
    --color: white;
    --background-color: var(--primary);
    --border-color: var(--primary);
    &[data-pseudo='hover'],
    &:hover {
      --background-color: var(--primary-hover);
      --border-color: var(--primary-hover);
    }
    &[data-pseudo='active'],
    &:active {
      --background-color: var(--primary-active);
      --border-color: var(--primary-active);
    }
  `,
  secondary: css`
    --color: var(--text-contrast);
    --background-color: var(--secondary);
    --border-color: var(--secondary);
    &[data-pseudo='hover'],
    &:hover {
      --background-color: var(--secondary-hover);
      --border-color: var(--secondary-hover);
    }
    &[data-pseudo='active'],
    &:active {
      --background-color: var(--secondary-active);
      --border-color: var(--secondary-active);
    }
  `,
  tertiary: css`
    --color: var(--text);
    --background-color: var(--surface);
    --border-color: var(--border-transparent);
    &[data-pseudo='hover'],
    &:hover {
      --background-color: var(--surface-hover);
    }
    &[data-pseudo='active'],
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  ghost: css`
    --color: var(--text);
    --background-color: transparent;
    --border-color: var(--border-transparent);
    &[data-pseudo='hover'],
    &:hover {
      --background-color: var(--surface-hover-transparent);
    }
    &[data-pseudo='active'],
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  bare: css`
    --color: var(--text);
    --background-color: transparent;
    --border-color: transparent;
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
  position: relative;
  display: grid;
  padding: 9px var(--spacing-l3);
  grid-gap: var(--spacing-l2);
  grid-auto-flow: column;
  white-space: nowrap;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-small);

  align-items: center;
  text-align: center;

  &[data-pseudo='focus'],
  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
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
      cursor: not-allowed;
      pointer-events: none;
      --background-color: var(--surface-disabled);
      border-color: var(--surface-disabled);
      --color: var(--text-disabled);
    }
  }

  color: var(--color);
  background-color: var(--background-color);
  border-color: var(--border-color);
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

  &[data-size='small'] {
    padding: 7px var(--spacing-l2);
    font-size: 14px;
    line-height: 16px;
  }

  &[data-size='large'] {
    padding: 13px var(--spacing-l4);
    font-size: 16px;
    line-height: 20px;
  }
`;

export const baseStyles = css`
  ${coreStyles};

  &:not([data-variant]) {
    ${variantStyles.primary}
  }
`;
