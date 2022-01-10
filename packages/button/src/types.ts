import { MediaQuery } from '@tablecheck/tablekit-utils';
import * as React from 'react';

export enum Appearance {
  Disabled = 'disabled',
  Subtle = 'subtle',
  Solid = 'solid',
  Outline = 'outline',
  Inverse = 'inverse',
  SubtleOutline = 'subtle-outline',
  Vertical = 'vertical',
  DisabledVertical = 'disabled-vertical'
}

export enum Color {
  Primary = 'primary',
  Ghost = 'ghost',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export type IconPropType = JSX.Element | ((props: unknown) => React.ReactNode);

export enum ButtonSize {
  Small = 'small',
  Regular = 'regular',
  Regular2 = 'regular2',
  Large = 'large'
}

export enum ButtonShape {
  Sharp = 'sharp',
  Rounded = 'rounded',
  Circular = 'circular'
}

export interface BaseButtonProps {
  children?: React.ReactNode;

  /** The base styling to apply to the button. */
  appearance?: Appearance;
  /** apply different "theme" colors to the button appearance */
  color?: Color;

  /** The base styling to apply to the button border radius. */
  shape?: ButtonShape;

  /** Places an icon within the button, after the button's text. */
  iconAfter?: IconPropType;

  /** Places an icon within the button, before the button's text. */
  iconBefore?: IconPropType;

  /** Set if the button is disabled. */
  isDisabled?: boolean;

  /** Change the style to indicate the button action is processing, also disables onClick. */
  isLoading?: boolean;

  isInteractive?: boolean;

  /** Option to fit button width to its parent width. Also sets large height if enabled. */
  shouldFitContainer?: boolean;

  /** Set the size of the button. */
  size?: MediaQuery<ButtonSize>;

  /** Set the type of the button. */
  type?: 'submit' | 'reset' | 'button';
}

type ConflictProps = 'color';

export type AnchorButtonProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, ConflictProps>;
export type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ConflictProps>;

export type ComponentButtonProps<Component extends React.ElementType> =
  BaseButtonProps & {
    /** Optional function to be used for rendering links. Receives `href` and possibly `target`
     * as props. */
    component: Component | undefined;
  } & Omit<
      React.ComponentPropsWithoutRef<Component>,
      'component' | ConflictProps
    >;

export type DerivedButtonProps = BaseButtonProps &
  React.DOMAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    // derived from isDisabled
    disabled?: boolean;
    fit?: boolean;
    // passed from button implementation
    isOnlyChild?: boolean;
    color: Color;
  };
