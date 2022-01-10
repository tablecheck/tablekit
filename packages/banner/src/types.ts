import { IconDefinition } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';
import { HTMLAttributes } from 'react';

export enum Appearance {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export type BannerSizes =
  | Size.Small
  | Size.Regular
  | Size.Regular2
  | Size.Large
  | Size.XLarge
  | Size.XXLarge;

interface Dismissible {
  /** Defines if banner can be dismissed by user. By default is `false` */
  isDismissible: true;
  /** Close button click handler (should be provided if banner is dismissible) */
  onClose: () => void;
}

interface NonDismissible {
  isDismissible?: false;
  onClose?: () => void;
}

export type BannerProps = (Dismissible | NonDismissible) &
  HTMLAttributes<HTMLDivElement> & {
    /** One of predefined banner Appearance */
    appearance?: Appearance;

    /** Add a classname to the banner. By default is `primary` */
    className?: string;

    /** One of @fortawesome icons */
    customIcon?: IconDefinition;

    /** Message to display */
    message: string;

    /** Size of a banner. By default is `regular` */
    size?: BannerSizes;
  };
