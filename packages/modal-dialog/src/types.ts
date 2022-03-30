import { Size } from '@tablecheck/tablekit-theme';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { ReactChild } from 'react';

export type AllowedModalWidth =
  | Size.Small
  | Size.Regular
  | Size.Large
  | Size.XLarge;

export enum HeaderAppearance {
  Warning = 'warning',
  Danger = 'danger'
}

type ControlledModalProps =
  | {
      trigger: JSX.Element;
      onOpenChange?: never;
      isOpen?: never;
    }
  | {
      onOpenChange: (changedState: boolean) => void;
      isOpen: boolean;
    };

export type BaseModalProps = ControlledModalProps & {
  ['data-testid']?: string;
  children: ReactChild | null | (ReactChild | null)[];
  footerContent?: JSX.Element | string;
  hasCloseIcon?: boolean;
  hasKeylines?: boolean;
  headerAppearance?: HeaderAppearance;
  headerContent?: JSX.Element | string;
  height?: number | string;
  id?: string;
  isChromeless?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onOpenAutoFocus?: (event: Event) => void;
  onPointerDownOutside?: (event: TouchEvent | MouseEvent) => void;
  shouldHideGutters?: boolean;
  shouldPreventCloseOutside?: boolean;
  width?: number | string | AllowedModalWidth;
  maxWidth?: MediaQuery<string | number>;
  maxHeight?: MediaQuery<string | number>;
};

export interface ModalBodyProps {
  hasGutters?: boolean;
  isScrollable?: boolean;
}

export interface ModalTitleProps {
  isMultiline?: boolean;
}

export interface ModalHeaderProps {
  hasCloseIcon?: boolean;
  hasKeyline?: boolean;
}

export interface ModalFooterProps {
  hasKeyline?: boolean;
}
