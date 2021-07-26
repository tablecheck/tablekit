import { forwardRef } from 'react';

import {
  TitleContainer,
  TitleText,
  ItemGroupContainer,
  ItemGroupContent
} from './styled/ItemGroup';
import { ItemGroupOrientation, ItemGroupProps } from './types';

export const ItemGroup = forwardRef<HTMLDivElement, ItemGroupProps>(
  (
    {
      children,
      role = 'group',
      orientation = ItemGroupOrientation.Vertical,
      hasIndent = false,
      headingComponent,
      headingText,
      headingStyles,
      minWidth,
      className,
      isUppercase,
      shouldWrap
    }: ItemGroupProps,
    ref
  ) => {
    let heading: ItemGroupProps['headingComponent'] = headingComponent || null;

    if (headingText) {
      heading = (
        <TitleContainer>
          <TitleText headingStyles={headingStyles} isUppercase={isUppercase}>
            {headingText}
          </TitleText>
        </TitleContainer>
      );
    }

    return (
      <ItemGroupContainer
        role={role}
        minWidth={minWidth}
        className={className}
        ref={ref}
      >
        {heading}
        <div>
          <ItemGroupContent
            orientation={orientation}
            hasIndent={hasIndent}
            shouldWrap={shouldWrap}
          >
            {children}
          </ItemGroupContent>
        </div>
      </ItemGroupContainer>
    );
  }
);
