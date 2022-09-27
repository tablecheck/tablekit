import { css, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import {
  beforeStyles as spinnerBeforeStyles,
  elementStyles as spinnerElementStyles
} from './Spinner';

export const classlessSelector = 'button.icon, a[type="button"].icon';
export const classySelector = '.icon-btn';

export const baseStyles = css`
  position: relative;
  display: grid;
  padding: 14px;
  grid-gap: var(--spacing-l2);
  grid-auto-flow: column;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 100%;

  align-items: center;
  text-align: center;

  &:focus:not(:focus-visible),
  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: 100%;
      border: 2px solid var(--focus, hsla(219, 78.5%, 52.5%, 1));
    }
  }
`;

export const IconButtonBase = styled.button<{
  /**
   * @deprecated The tooltip styling clashes with the busy styling, apply the tooltip on a wrapper component
   */
  'data-tooltip'?: never;
}>`
  ${baseStyles}
`;

/**
 * @deprecated This is intented for internal use only, changes here have no effect
 */
export const variants = [
  'primary',
  'secondary',
  'tertiary',
  'ghost',
  'bare'
] as const;

export type IconButtonVariant = typeof variants[number];

const variantStyles: Record<IconButtonVariant, SerializedStyles> = {
  primary: css`
    --color: white;
    --background-color: var(--primary);
    &:hover {
      --background-color: var(--primary-hover);
    }
    &:active {
      --background-color: var(--primary-active);
    }
  `,
  secondary: css`
    --color: var(--text-contrast);
    --background-color: var(--secondary);
    &:hover {
      --background-color: var(--secondary-hover);
    }
    &:active {
      --background-color: var(--secondary-active);
    }
  `,
  tertiary: css`
    --color: var(--text);
    border: 2px solid var(--secondary);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  ghost: css`
    --color: var(--text);
    border: 1px solid var(--border-transparent);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `,
  bare: css`
    --color: var(--text);
    &:hover {
      --background-color: var(--surface-hover);
    }
    &:active {
      --background-color: var(--surface-active);
    }
  `
};

const coreStyles = css`
  &:disabled {
    &,
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
    ${spinnerElementStyles}
    color: transparent;
  }
  &[aria-busy='true']:before {
    opacity: 1;
    pointer-events: none;
    transition-duration: 150ms;
    transition-delay: 200ms;
  }
`;

export const VariantIconButtons = variants.reduce(
  (result, key) => ({
    ...result,
    [`${key.substring(0, 1).toUpperCase()}${key
      .substring(1)
      .toLowerCase()}`]: styled(IconButtonBase)`
      ${variantStyles[key]}
      ${coreStyles}
    `
  }),
  {} as Record<
    Capitalize<IconButtonVariant>,
    StyledComponent<{
      'aria-busy'?: boolean;
    }> &
      typeof IconButtonBase
  >
);

export const IconButton = styled(IconButtonBase)<{
  'data-variant'?: IconButtonVariant;
  'aria-busy'?: boolean;
}>`
  &:not([data-variant]) {
    ${variantStyles.primary}
  }
  ${variants.map(
    (key) =>
      css`
        &[data-variant='${key}'] {
          ${variantStyles[key]}
        }
      `
  )}
  ${coreStyles}
`;
