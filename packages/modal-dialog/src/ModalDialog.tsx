import { Trigger as RxTrigger } from '@radix-ui/react-dialog';
import { useCallback, useState } from 'react';

import { AnimatedContent } from './components/AnimatedContent';
import { ModalHeader } from './components/ModalHeader';
import { FooterWrapper, ModalBody, ModalRoot, ModalTitle } from './styled';
import { BaseModalProps } from './types';

export const ModalDialog = (props: BaseModalProps): JSX.Element => {
  const {
    children,
    headerContent,
    height,
    width,
    maxWidth,
    maxHeight,
    footerContent,
    headerAppearance,
    hasCloseIcon,
    hasKeylines,
    isChromeless,
    shouldHideGutters,
    onOpenChange,
    isOpen,
    shouldPreventCloseOutside,
    onPointerDownOutside,
    onOpenAutoFocus,
    onEscapeKeyDown,
    onCloseAutoFocus,
    'data-testid': testId
  } = props;
  // internal state of uncontrolled modal, needed for animation
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  // eslint-disable-next-line react/destructuring-assignment
  const trigger = !props.onOpenChange ? props.trigger : null;

  const isModalOpen = typeof isOpen === 'undefined' ? isOpenInternal : isOpen;
  const onOpenChangeHandler = useCallback(
    (state) => {
      if (onOpenChange) {
        onOpenChange(state);
      } else {
        setIsOpenInternal(state);
      }
    },
    [onOpenChange]
  );

  return (
    <ModalRoot onOpenChange={onOpenChangeHandler} open={isModalOpen}>
      {trigger ? <RxTrigger asChild>{trigger}</RxTrigger> : null}
      <AnimatedContent
        isOpen={isModalOpen}
        height={height}
        width={width}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        onOpenAutoFocus={onOpenAutoFocus}
        onEscapeKeyDown={onEscapeKeyDown}
        onCloseAutoFocus={onCloseAutoFocus}
        onPointerDownOutside={onPointerDownOutside}
        isChromeless={isChromeless}
        shouldPreventCloseOutside={shouldPreventCloseOutside}
        data-testid={testId}
      >
        {typeof headerContent !== 'undefined' ? (
          <ModalHeader
            hasKeyline={hasKeylines}
            hasCloseIcon={hasCloseIcon}
            appearance={headerAppearance}
          >
            {typeof headerContent === 'string' ? (
              <ModalTitle>{headerContent}</ModalTitle>
            ) : (
              headerContent
            )}
          </ModalHeader>
        ) : null}
        <ModalBody hasGutters={!shouldHideGutters} isScrollable>
          {children}
        </ModalBody>
        {footerContent ? (
          <FooterWrapper hasKeyline={hasKeylines}>
            {footerContent}
          </FooterWrapper>
        ) : null}
      </AnimatedContent>
    </ModalRoot>
  );
};
