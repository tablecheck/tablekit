import { BaseInputProps } from '@tablecheck/tablekit-input';
import { TextareaHTMLAttributes } from 'react';

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size'
> &
  BaseInputProps & {
    enableResize?: boolean;
    minimumRows?: number;
    shouldAutoExpand?: boolean;
  };
