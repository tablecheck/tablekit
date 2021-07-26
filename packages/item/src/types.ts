import { CSSObject } from '@emotion/react';
import { Size } from '@tablecheck/tablekit-theme';
import { ReactNode, HTMLAttributes, ElementType } from 'react';

export enum ItemBorderPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
}

export enum ItemInteractionState {
  Default = 'default',
  Hidden = 'hidden',
  Selected = 'selected',
  Disabled = 'disabled'
}

type ComponentProps<Component extends React.ElementType> = {
  /** Optional function to be used for rendering links. Receives `href` and possibly `target`
   * as props. */
  component?: Component | undefined;
} & Omit<React.ComponentPropsWithoutRef<Component>, 'component'>;

export type ItemProps<Component extends React.ElementType> = BaseItemProps &
  ComponentProps<Component>;
export interface BaseItemProps {
  /** Border position when item isSelected */
  borderPosition?: ItemBorderPosition;

  /** These styles would applied for main container */
  customStyles?: string;

  /** Content to be shown after the main content. Shown to the right of content. */
  elemAfter?: ReactNode;

  /** Content to be shown before the main content. Shown to the left of content. */
  elemBefore?: ReactNode;

  /** Set item height */
  height?: string | number;

  /** Causes the item to appear in a disabled state and click behavior will not be triggered. */
  isDisabled?: boolean;

  /** Causes the item to still be rendered, but with `display: none` applied. */
  isHidden?: boolean;

  /** Causes the item to appear with a persistent selected background state. */
  isSelected?: boolean;

  /** Used alignment center when this prop set in true */
  shouldCenterAlignment?: boolean;

  /** Defines the size of the item */
  size?: Size.Regular | Size.Large;

  /** adds .disabled and .selected as classes for external library integration */
  useInteractionStateAsClass?: boolean;

  /** Link that the user will be redirected to when the item is clicked. If omitted, a
   *  non-hyperlink component will be rendered. */
  href?: string;

  /** Target frame for item `href` link to be aimed at. */
  target?: string;

  /** If being used within ReactRouter we need to check for `to` not `href` to render a link type, though this is mostly just for usage with `isDisabled`. */
  to?: string;

  /** Set item width */
  width?: string | number;
}

export type ItemContainerProps<Component extends ElementType> =
  ItemProps<Component> & {
    hasOnlyIcon: boolean;
    interactionState?: ItemInteractionState;
  };

export enum ItemGroupOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export interface ItemGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Used indent between children. The indent are dependent from orientation. */
  hasIndent?: boolean;
  /** Custom heading component */
  headingComponent?: ReactNode;
  /** Would be used for heading style */
  headingStyles?: string | CSSObject;
  /** Optional heading text to be shown above the items. */
  headingText?: ReactNode | string;
  /** Use uppercase for title */
  isUppercase?: boolean;
  /** Min items group width */
  minWidth?: string | number;
  /** How elements should be arranged */
  orientation?: ItemGroupOrientation;
  /** If true, items can appear in multiple lines */
  shouldWrap?: boolean;
}
