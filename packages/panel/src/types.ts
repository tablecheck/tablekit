import { MediaQuery } from '@tablecheck/tablekit-utils';
import { Resizable, ResizableProps } from 're-resizable';
import { HTMLAttributes, ReactNode } from 'react';

export enum PanelPosition {
  Right = 'right',
  Left = 'left',
  Bottom = 'bottom'
}

interface CommonPanelProps {
  /** This panel's child nodes. */
  children?: ReactNode;

  /** custom className to put on the Outer div element */
  className?: string;

  /** indicates if the panel is opened or not */
  isOpen: boolean;

  /** event handler when clicked outside the panel */
  onClickOutside?: (event: MouseEvent, togglePanel?: () => void) => void;

  /** panel's position in the screen */
  position?: PanelPosition;

  /** callback to toggle the panel from outside the component */
  togglePanel?: () => void;

  /** indicates if the body shouldn't be scrollable when the panel is opened */
  shouldDisableBodyScroll?: boolean;
}

export interface PanelProps
  extends CommonPanelProps,
    HTMLAttributes<HTMLDivElement> {
  /** panel's height with mediaQueries */
  height?: MediaQuery<string>;

  /** panel's width with mediaQueries */
  width?: MediaQuery<string>;
}

export interface ResizablePanelProps
  extends CommonPanelProps,
    Pick<ResizableProps, 'maxWidth' | 'maxHeight' | 'minHeight' | 'minWidth'> {
  /** Default height for resizable component. */
  defaultHeight?: number;

  /** Default width for resizable component. */
  defaultWidth?: number;

  /** Ref for Re-resizable instance. */
  ref?: (element: Resizable) => void;
}

export type PanelContainerProps = Omit<
  PanelProps,
  'togglePanel' | 'onClickOutside'
>;

export type ResizablePanelContainerProps = Omit<
  ResizablePanelProps & ResizableProps,
  'togglePanel' | 'onClickOutside' | 'defaultHeight' | 'defaultWidth'
>;
