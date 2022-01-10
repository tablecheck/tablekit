import { IconPropType } from '@tablecheck/tablekit-button';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

export type ItemType = Partial<
  ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    iconAfter: IconPropType;
    iconBefore: IconPropType;
  }
> & {
  label: string;
  value: string;
};

export type ButtonGroupPropsType = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  isInvalid?: boolean;
  isMulti?: boolean;
  isValueRequired?: boolean;
  items: ItemType[];
  onChange: (newValues: string[]) => void;
  values?: string[];
  width?: string;
};
