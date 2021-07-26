import { ButtonAppearance, ButtonShape } from '@tablecheck/tablekit-button';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { forwardRef, useEffect } from 'react';
import { useTransition } from 'react-spring';

import { GalleryContainer, GalleryOuter, CloseButton } from './styled';
import { Props } from './types';

export const Gallery = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      images,
      isOpen,
      onClose,
      currentImageRef,
      ...restProps
    }: Props,
    ref
  ): JSX.Element => {
    useEffect(() => {
      const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && onClose) onClose();
      };

      document.addEventListener('keydown', keyPressHandler);
      return () => {
        document.removeEventListener('keydown', keyPressHandler);
      };
    }, [onClose]);

    const transition = useTransition(isOpen, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    });

    useEffect(() => {
      if (currentImageRef && currentImageRef.current) {
        currentImageRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [currentImageRef]);

    return (
      <>
        {transition((styles, item) => {
          if (!item) {
            return null;
          }
          return (
            <GalleryOuter
              {...restProps}
              className={className}
              ref={ref}
              style={styles}
              isOpen={isOpen}
            >
              <GalleryContainer hasSingleImage={images.length === 1}>
                {images.map((image, index) => (
                  <picture
                    data-value={image.caption || image.large || index}
                    key={image.large}
                    ref={image.ref}
                  >
                    <source media="(min-width: 1024px)" srcSet={image.large} />
                    <source media="(min-width: 640px)" srcSet={image.medium} />
                    <source media="(min-width: 320px)" srcSet={image.small} />
                    <img src={image.large} alt={image.caption} />
                  </picture>
                ))}
                <CloseButton
                  appearance={ButtonAppearance.Inverse}
                  shape={ButtonShape.Circular}
                  iconBefore={() => <Icon icon={getIcon('close')} />}
                  tabIndex={-1}
                  onClick={() => onClose && onClose()}
                />
              </GalleryContainer>
            </GalleryOuter>
          );
        })}
      </>
    );
  }
);
