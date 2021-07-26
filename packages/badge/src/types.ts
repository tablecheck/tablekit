import { Size } from '@tablecheck/tablekit-theme';
import { HTMLAttributes, ReactNode } from 'react';

export enum BadgeType {
  Solid = 'solid',
  Outline = 'outline'
}

export type BadgeSize = Extract<Size, Size.Regular | Size.Small>;

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  /** custom className to put on the Container element */
  className?: string;

  /** render custom children instead of value */
  children?: ReactNode;

  /** The maximum value to display. If value is 100, and max is 50, "50+" will be displayed */
  maxValue?: number;

  /** Defines the size of the badge, by default it's 'regular' */
  size?: BadgeSize;

  /** Defines the visual style the badge, by default it's 'outline' */
  type?: BadgeType;

  /** Use it if you need a flexible component width. */
  isFlexible?: boolean;

  /** The value displayed within the badge. */
  value?: number;
};

export type BadgeContainerProps = Omit<BadgeProps, 'value' | 'maxValue'>;
