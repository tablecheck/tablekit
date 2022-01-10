import { BaseButtonProps } from '@tablecheck/tablekit-button';
import { HTMLAttributes } from 'react';

type Action = Omit<BaseButtonProps, 'children'> & {
  onClick: VoidFunction;
  text: string;
};

export enum Appearance {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export enum Position {
  Top = 'top',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  /** The array includes some object for create actions button in a footer.
   * Here you can use Button props. */
  actions?: Action[];

  /** The base styling to apply to the Alert. */
  appearance?: Appearance;

  /** The message to be shown to user */
  children?: JSX.Element;

  /** Add a classname to the wrapper. */
  className?: string;

  /** If 'false' (by default), the cross button will be hidden */
  isDismissible?: boolean;

  /** Should show Alert */
  isShow?: boolean;

  /** Close the message */
  onClose?: VoidFunction;

  /** Responsible for the position of the Alert on the screen. By default it's 'top' */
  position?: Position;

  /** Should close alert on click outside or not. By default it's 'false' */
  shouldCloseOnClickOutside?: boolean;

  /** Wheather the icon should be shown or not */
  shouldHideIcon?: boolean;

  /** Should use portal for alerts or not. By default it's 'false' */
  shouldUsePortal?: boolean;
};

export type AlertPortalProps = {
  children: JSX.Element;
  position?: Position;
  shouldUsePortal: boolean;
};

export type AlertFooterProps = {
  actions: Action[];
};
