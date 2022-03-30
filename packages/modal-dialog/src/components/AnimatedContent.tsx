import { Spacing } from '@tablecheck/tablekit-theme';
import { useTransition } from 'react-spring';

import { ModalContent, ModalOverlay } from '../styled';
import { BaseModalProps } from '../types';

export const AnimatedContent = (
  props: Pick<
    BaseModalProps,
    | 'children'
    | 'height'
    | 'width'
    | 'isChromeless'
    | 'isOpen'
    | 'onOpenAutoFocus'
    | 'onCloseAutoFocus'
    | 'onEscapeKeyDown'
    | 'onPointerDownOutside'
    | 'shouldPreventCloseOutside'
    | 'maxWidth'
    | 'maxHeight'
    | 'data-testid'
  >
): JSX.Element => {
  const {
    children,
    height,
    width,
    maxHeight,
    maxWidth,
    isChromeless,
    isOpen,
    onEscapeKeyDown,
    onOpenAutoFocus,
    onCloseAutoFocus,
    shouldPreventCloseOutside,
    onPointerDownOutside,
    'data-testid': testId
  } = props;
  const transition = useTransition(isOpen, {
    from: { opacity: 0, top: Spacing.L6 },
    enter: { opacity: 1, top: `${parseInt(Spacing.L6, 10) / 2}px` },
    leave: { opacity: 0, top: `${parseInt(Spacing.L6, 10) * 2}px` }
  });
  return (
    <>
      {transition((styles, item) => {
        if (!item) {
          return null;
        }
        return (
          <>
            <ModalOverlay
              forceMount
              style={{
                opacity: styles.opacity
              }}
            />
            <ModalContent
              forceMount
              height={height}
              width={width}
              maxWidth={maxWidth}
              maxHeight={maxHeight}
              style={{
                opacity: styles.opacity,
                top: styles.top
              }}
              isChromeless={isChromeless}
              onEscapeKeyDown={onEscapeKeyDown}
              onCloseAutoFocus={onCloseAutoFocus}
              onOpenAutoFocus={onOpenAutoFocus}
              onPointerDownOutside={(e: TouchEvent | MouseEvent) => {
                if (onPointerDownOutside) {
                  onPointerDownOutside(e);
                }
                if (shouldPreventCloseOutside) {
                  e.preventDefault();
                }
              }}
              data-testid={testId}
            >
              {children}
            </ModalContent>
          </>
        );
      })}
    </>
  );
};
