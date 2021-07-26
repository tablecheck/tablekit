import { useState, useEffect, useRef } from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import { Container, InlineDialogContainer } from './styled';
import { InlineDialogProps } from './types';

export function InlineDialog<
  TriggerElement extends HTMLElement = HTMLButtonElement
>({
  children,
  popperProps = { placement: 'bottom-start' },
  containerCss,
  className,
  renderTrigger,
  onClose,
  isOpen: isOpenOuter,
  isControllable,
  ...restProps
}: InlineDialogProps<TriggerElement>): JSX.Element {
  const [isOpenInner, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>();
  const triggerRef = useRef<HTMLElement>();
  const isOpen = !!(isControllable ? isOpenOuter : isOpenInner);
  const handleClose =
    isControllable && onClose ? onClose : () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !dialogRef.current?.contains(event.target as Node) &&
      !triggerRef.current?.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  const correctedPopperProps: InlineDialogProps<TriggerElement>['popperProps'] =
    {
      strategy: 'fixed',
      ...popperProps
    };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, false);
    } else {
      document.removeEventListener('mousedown', handleClickOutside, false);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [isOpen]);

  return (
    <InlineDialogContainer className={className}>
      <Manager>
        <Reference>
          {({ ref }) => {
            if (!renderTrigger) return null;
            const commonParams = {
              ref: (node: TriggerElement) => {
                if (typeof ref === 'function') ref(node);
                triggerRef.current = node;
              },
              onClick: isControllable ? () => {} : () => setIsOpen(!isOpen),
              isOpen
            };
            return renderTrigger(commonParams);
          }}
        </Reference>
        {isOpen && (
          <Popper {...correctedPopperProps}>
            {({ ref, style }) => (
              <Container
                {...restProps}
                css={containerCss}
                ref={(node: HTMLDivElement) => {
                  if (typeof ref === 'function') ref(node);
                  dialogRef.current = node;
                }}
                style={style}
              >
                {typeof children === 'function'
                  ? children({ isOpen, onClose: handleClose })
                  : children}
              </Container>
            )}
          </Popper>
        )}
      </Manager>
    </InlineDialogContainer>
  );
}
