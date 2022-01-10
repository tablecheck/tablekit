import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll
} from 'body-scroll-lock';
import { MutableRefObject, useEffect } from 'react';

const OBSERVER_CLASS_NAME = 'PanelScrollObserver';

export const useBodyScrollLock = ({
  shouldDisableBodyScroll,
  containerRef,
  isOpen
}: {
  shouldDisableBodyScroll: boolean;
  containerRef: MutableRefObject<HTMLElement | null>;
  isOpen: boolean;
}): JSX.Element | null => {
  useEffect(() => {
    const element = containerRef.current;
    if (shouldDisableBodyScroll && element) {
      if (isOpen) {
        disableBodyScroll(element, {
          allowTouchMove: (el) => {
            while (el && el !== document.body) {
              if (el.getAttribute('data-ignore') === 'scroll-lock-ignore') {
                return true;
              }
              // eslint-disable-next-line no-param-reassign
              el = el.parentElement;
            }
            return false;
          }
        });
      } else {
        enableBodyScroll(element);
      }
    }
  }, [containerRef, isOpen, shouldDisableBodyScroll]);

  useEffect(
    () => () => {
      if (shouldDisableBodyScroll) {
        const hasOpenedPanel =
          document.getElementsByClassName(OBSERVER_CLASS_NAME).length > 0;
        if (!hasOpenedPanel) {
          clearAllBodyScrollLocks();
        }
      }
    },
    [shouldDisableBodyScroll]
  );

  const observer =
    isOpen && shouldDisableBodyScroll ? (
      <div style={{ display: 'none' }} className={OBSERVER_CLASS_NAME} />
    ) : null;

  return observer;
};
