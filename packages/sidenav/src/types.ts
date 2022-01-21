import { IconDefinition } from '@tablecheck/tablekit-icon';
import { ItemProps } from '@tablecheck/tablekit-item';
import { Size } from '@tablecheck/tablekit-theme';
import { ReactNode, ElementType } from 'react';

export enum SideNavState {
  Collapsed = 'collapsed',
  Expanded = 'expanded'
}

export enum NavItemAppearance {
  Default = 'default',
  Selected = 'selected',
  Disabled = 'disabled'
}

export interface SideNavContextState {
  isExpanded: boolean;
  size: Size.Regular | Size.Large;
  state: SideNavState;
  toggleSideNav: () => void;
  toggleStateLabels: {
    collapse: string;
    expand: string;
  };
  shouldHideToggle: boolean;
}

export interface SideNavProviderProps
  extends Partial<Omit<SideNavContextState, 'toggleSideNav'>> {
  children: ReactNode;
}

export interface BaseSideNavItemProps {
  /** one of @fortawesome icons */
  icon?: React.ReactNode | IconDefinition;

  /** Causes the item to appear in a disabled state and click behavior will not be triggered. */
  isDisabled?: boolean;

  /** Indicates that navigation item is a child */
  isNested?: boolean;

  /** Causes the item to appear with a persistent selected background state. */
  isSelected?: boolean;

  /** Defines the size of the item */
  size?: SideNavContextState['size'];
}

export type SideNavItemProps<Component extends ElementType> =
  ItemProps<Component> & BaseSideNavItemProps;

export type SideNavSectionProps<Component extends ElementType> =
  ItemProps<Component> & {
    /** number of section children
     * (if not passed there would be no transition on expand/collapse section)
     * */
    childrenCount?: number;

    /** one of @fortawesome icons */
    icon?: React.ReactNode | IconDefinition;

    /** Causes the item to appear in a disabled state and click behavior will not be triggered. */
    isDisabled?: boolean;

    /** Shows whether navigation section is expanded */
    isOpened?: boolean;

    /** Causes the item to appear with a persistent selected background state. */
    isSelected?: boolean;

    /** Label to show on sidebar */
    label?: string;
  };
