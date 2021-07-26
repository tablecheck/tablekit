import { VariantProps } from '@tablecheck/tablekit-utils';
import { HTMLAttributes, RefObject } from 'react';

export type Image = {
  caption?: string;
  large: string;
  medium: string;
  ref?: RefObject<HTMLDivElement>;
  small: string;
};

export type Props = VariantProps<
  HTMLAttributes<HTMLDivElement> & {
    /** custom className to put on the Outer div element */
    className?: string;

    /** the image ref to scroll to */
    currentImageRef?: RefObject<HTMLImageElement>;

    /** list of images to render */
    images: Image[];

    /** defined the open state of the gallery */
    isOpen: boolean;

    /** function to close the gallery */
    onClose?: VoidFunction;
  }
>;
