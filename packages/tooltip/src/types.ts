import { Options } from '@popperjs/core';
import { HTMLAttributes, ReactNode } from 'react';

export type TooltipState = {
  shouldBeHiddenImmediately: boolean;
  shouldBeShownImmediately: boolean;
  isVisible: boolean;
  shouldRender: boolean;
};

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** A single element, either Component or DOM node */
  children: (setTargetRef: (el: HTMLElement | null) => void) => ReactNode;

  /** The content of the tooltip */
  content: ReactNode;

  /** Standard react class for general container */
  className?: string;

  /** Time in milliseconds to wait before showing and hiding the tooltip. Defaults to 300. */
  delay?: number;

  /**
   Hide the tooltip when the click event is triggered. This should be
   used when tooltip should be hiden if `onClick` react synthetic event
   is triggered, which happens after `onMouseDown` event
   */
  shouldHideOnClick?: boolean;

  /**
   Hide the tooltip when the mousedown event is triggered. This should be
   used when tooltip should be hiden if `onMouseDown` react synthetic event
   is triggered, which happens before `onClick` event
   */
  shouldHideOnMouseDown?: boolean;

  /**
   Function to be called when the tooltip will be hidden. It is called after the
   delay, when the tooltip begins to animate out.
   */
  onHide?: () => void;

  /**
   Function to be called when the tooltip will be shown. It is called when the
   tooltip begins to animate in.
   */
  onShow?: () => void;

  /**
   Where the tooltip should appear relative to its target.
   */
  popperProps?: Partial<Options>;

  /** Show only one line of text, and shouldTruncate when too long */
  shouldTruncate?: boolean;
}

export type TooltipContainerProps = Omit<
  TooltipProps,
  'className' | 'popperProps' | 'children' | 'content'
>;
