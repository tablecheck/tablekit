import { Size } from '@tablecheck/tablekit-theme';
import { HTMLAttributes } from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** the URL for the image */
  imageUrl?: string;

  /** the initials from the full name  to use */
  initials?: string;

  /** the full name to use */
  name?: string;

  size?: Size;
}
