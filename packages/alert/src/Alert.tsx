import { getIcon } from '@tablecheck/tablekit-icon';
import { useRef, useEffect, useCallback } from 'react';

import { AlertCloseButton } from './components/AlertCloseButton';
import { AlertFooter } from './components/AlertFooter';
import { AlertPortal } from './components/AlertPortal';
import {
  AlertContainer,
  AlertMark,
  AlertContent,
  AlertContentContainer
} from './styled';
import { AlertProps, Appearance, Position } from './types';

export const Alert = ({
  appearance = Appearance.Primary,
  actions,
  children,
  onClose = () => {},
  shouldHideIcon = false,
  isShow = false,
  className,
  position = Position.Top,
  shouldCloseOnClickOutside = false,
  shouldUsePortal = false,
  isDismissible = false,
  ...restProps
}: AlertProps): JSX.Element | null => {
  const alertWrapperRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const { current } = alertWrapperRef;
      if (
        current &&
        event.target instanceof HTMLElement &&
        !current.contains(event.target)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (shouldCloseOnClickOutside) {
      if (isShow) {
        document.addEventListener('mousedown', handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', handleClickOutside, false);
      }
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [isShow, shouldCloseOnClickOutside, handleClickOutside]);

  if (!isShow) return null;

  return (
    <AlertPortal position={position} shouldUsePortal={shouldUsePortal}>
      <AlertContainer
        {...restProps}
        appearance={appearance}
        className={className}
        isDismissible={isDismissible}
        ref={alertWrapperRef}
      >
        <AlertContentContainer shouldHideIcon={shouldHideIcon}>
          {!shouldHideIcon && (
            <AlertMark appearance={appearance} icon={getIcon(appearance)} />
          )}
          <AlertContent
            isDismissible={isDismissible}
            shouldHideIcon={shouldHideIcon}
          >
            {children}
          </AlertContent>
          {isDismissible && <AlertCloseButton onClick={onClose} />}
        </AlertContentContainer>
        {actions ? <AlertFooter actions={actions} /> : null}
      </AlertContainer>
    </AlertPortal>
  );
};
