import { Resizable } from 're-resizable';
import { forwardRef, useEffect, useMemo, useRef } from 'react';

import { ResizablePanelContainer } from './styled/ResizablePanel';
import {
  baseDefaultHeight,
  baseDefaultWidth,
  defaultMaxHeight,
  defaultMaxWidth
} from './themes';
import { PanelPosition, ResizablePanelProps } from './types';
import { useBodyScrollLock } from './useBodyScrollLock';

export const ResizablePanel = forwardRef<Resizable, ResizablePanelProps>(
  (
    {
      className,
      isOpen,
      children,
      togglePanel,
      onClickOutside,
      shouldDisableBodyScroll = false,
      maxHeight = defaultMaxHeight,
      maxWidth = defaultMaxWidth,
      minHeight = baseDefaultHeight,
      minWidth = baseDefaultWidth,
      position = PanelPosition.Right,
      defaultHeight = baseDefaultHeight,
      defaultWidth = baseDefaultWidth
    }: ResizablePanelProps,
    ref
  ) => {
    const resizeDirections = useMemo(
      () => ({
        top: position === 'bottom',
        right: position === 'left',
        bottom: position === 'top',
        left: position === 'right',
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
      }),
      [position]
    );
    const containerRef = useRef<HTMLElement | null>(null);

    const observer = useBodyScrollLock({
      shouldDisableBodyScroll,
      containerRef,
      isOpen
    });

    useEffect(() => {
      const listener = onClickOutside
        ? (event: MouseEvent) => {
            const domContainer = containerRef.current;
            if (
              event.target instanceof Node &&
              domContainer &&
              !domContainer.contains(event.target)
            ) {
              onClickOutside(event, togglePanel);
            }
          }
        : null;
      if (isOpen && listener) {
        document.addEventListener('mousedown', listener);
      }

      return () => {
        if (listener) {
          document.removeEventListener('mousedown', listener);
        }
      };
    }, [containerRef, onClickOutside, isOpen, togglePanel]);

    const defaultSize =
      position === PanelPosition.Bottom || position === PanelPosition.Top
        ? { height: defaultHeight, width: '100% !important' }
        : { width: defaultWidth, height: '100% important' };

    return (
      <ResizablePanelContainer
        className={className}
        enable={resizeDirections}
        isOpen={isOpen}
        position={position}
        defaultSize={defaultSize}
        minWidth={minWidth}
        maxWidth={
          position === PanelPosition.Bottom || position === PanelPosition.Top
            ? 'auto'
            : maxWidth
        }
        minHeight={minHeight}
        maxHeight={maxHeight}
        onClick={(ev) => ev.stopPropagation()}
        handleWrapperClass="resizer"
        data-ignore="scroll-lock-ignore"
        ref={(element) => {
          containerRef.current = element?.resizable || null;
          if (ref) {
            if (typeof ref === 'function') {
              ref(element);
            } else {
              ref.current = element;
            }
          }
        }}
      >
        {isOpen && children}
        {observer}
      </ResizablePanelContainer>
    );
  }
);
