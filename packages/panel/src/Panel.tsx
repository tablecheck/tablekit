import { forwardRef, useEffect, useRef } from 'react';

import { StaticContainer } from './styled/StaticPanel';
import { PanelPosition, PanelProps } from './types';
import { useBodyScrollLock } from './useBodyScrollLock';

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      className,
      isOpen,
      children,
      togglePanel,
      onClickOutside,
      shouldDisableBodyScroll = false,
      position = PanelPosition.Right,
      width = '100%',
      height = '100%',
      ...restProps
    }: PanelProps,
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const observer = useBodyScrollLock({
      shouldDisableBodyScroll,
      containerRef,
      isOpen
    });

    useEffect(() => {
      const listener = onClickOutside
        ? (event: MouseEvent) => {
            if (
              event.target instanceof Node &&
              containerRef.current &&
              !containerRef.current.contains(event.target)
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
    }, [onClickOutside, isOpen, togglePanel]);

    return (
      <StaticContainer
        {...restProps}
        className={className}
        isOpen={isOpen}
        position={position}
        onClick={(ev) => ev.stopPropagation()}
        width={width}
        height={height}
        data-ignore="scroll-lock-ignore"
        ref={(element) => {
          containerRef.current = element;
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
      </StaticContainer>
    );
  }
);
