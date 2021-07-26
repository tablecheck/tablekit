import { HTMLAttributes } from 'react';

export enum TabsAlignment {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}

export interface Tab extends HTMLAttributes<HTMLButtonElement> {
  name?: string;
  content: JSX.Element;
  isDisabled?: boolean;
  key: string;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** alignment of the nav items */
  align?: TabsAlignment;

  /** key of the current active nav item */
  currentTab: string;

  /** callback when clicking a nav item */
  setCurrentTab: (value: string) => void;

  /** list of components to use in the navigation */
  tabs: Tab[];
}
