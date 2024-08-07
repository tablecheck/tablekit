import { css } from '../utils';

import { variantStyles as buttonVariantStyles, ButtonVariant } from './Button';
import {
  beforeStyles as spinnerBeforeStyles,
  coreStyles as spinnerElementStyles
} from './Spinner';

export { configurableDefaultProps } from './Button';

export type IconButtonVariant = ButtonVariant | 'danger-bare';

export const element = 'button';
export const selectors = ['button.icon', 'a[role="button"].icon'];
export const className = 'icon-button';

export interface Props {
  'data-variant'?: IconButtonVariant;
  'data-size'?: 'small' | 'medium' | 'large';
  'aria-busy'?: boolean;
  'data-round'?: boolean;
  'data-mode'?: 'default' | 'input-append';
  /**
   * @deprecated The tooltip styling clashes with the busy styling, apply the tooltip on a wrapper component
   */
  'data-tooltip'?: never;
}

export const variantStyles = {
  ...buttonVariantStyles,
  'danger-bare': css`
    ${buttonVariantStyles.danger}
    --tk-button-border-color: transparent;
  `
};

export const coreStyles = css`
  position: relative;
  display: grid;
  cursor: pointer;
  text-decoration: none;

  font-size: 16px;
  line-height: 20px;
  border-radius: var(--border-radius-small);

  align-items: center;
  text-align: center;

  border: solid 1px var(--tk-button-border-color);

  --tk-icon-button-padding: 9px;
  padding: var(--tk-icon-button-padding);
  &[data-size='small'] {
    --tk-icon-button-padding: 7px;
  }
  &[data-size='large'] {
    --tk-icon-button-padding: 13px;
  }

  &[data-pseudo='focus'],
  &:focus,
  &:focus-visible {
    outline: none;
    &:not([data-mode='input-append']):after {
      display: block;
      content: '';
      pointer-events: none;
      position: absolute;
      top: -3px;
      bottom: -3px;
      left: -3px;
      right: -3px;
      border-radius: 6px;
      box-shadow: 0 0 0 2px var(--focus);
    }
  }
  &:focus:not(:focus-visible):after {
    box-shadow: none !important;
  }

  &:disabled:disabled {
    &,
    &[data-pseudo='hover'],
    &[data-pseudo='active'],
    &:hover,
    &:active {
      cursor: not-allowed;
      pointer-events: none;
      --tk-button-color: var(--text-disabled);
      &:not([data-variant='bare']) {
        --tk-button-background-color: var(--surface-disabled);
        --tk-button-border-color: var(--surface-disabled);
      }
    }
    &:after {
      border: none;
    }
  }

  &,
  &:any-link,
  &:hover {
    color: var(--tk-button-color);
  }
  background-color: var(--tk-button-background-color);
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
    background-color: var(--tk-button-color);
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
    &:focus,
    &:focus-visible {
      border-radius: 50%;
      &:after {
        border-radius: 50%;
      }
    }
  }
`;

export const fullStyles = css`
  ${coreStyles}

  &[data-mode='input-append'] {
    border-color: transparent !important;
    border-radius: calc(var(--border-radius-small) - 1px);
    align-self: flex-start;
    &:not([data-variant]) {
      ${variantStyles.bare};
    }
  }

  &:not([data-variant]):not([data-mode='input-append']) {
    ${variantStyles.primary}
  }
`;
