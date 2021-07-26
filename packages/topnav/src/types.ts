import { HTMLAttributes } from 'react';

export interface TopNavProps extends HTMLAttributes<HTMLDivElement> {
  centerContent?: JSX.Element | null;

  /** custom className to put on the Outer div element */
  className?: string;

  /** by default it uses only two columns */
  hasCenterContainer?: boolean;

  /** custom top nav height */
  height?: number;

  /** content for the left side of the top nav */
  leftContent?: JSX.Element | null;

  /** content for the right side of the top nav */
  rightContent?: JSX.Element | null;
}
