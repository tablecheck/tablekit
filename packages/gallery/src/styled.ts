import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { COLORS, ZIndex, Spacing } from '@tablecheck/tablekit-theme';
import { ElementType } from 'react';
import { animated } from 'react-spring';

type OuterProps = {
  isOpen: boolean;
};

type ContainerProps = {
  hasSingleImage: boolean;
};

export const GalleryOuter = animated<ElementType>(styled.div<OuterProps>`
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.GRAY_TRANSLUCENT.L9};
  z-index: ${ZIndex.Blanket};
`);

export const GalleryContainer = styled.div<ContainerProps>`
  height: 100vh;
  overflow: scroll;
  overscroll-behavior: none;
  display: flex;
  flex-direction: column;

  ${({ hasSingleImage }) =>
    hasSingleImage &&
    `
      align-items: center;
      justify-content: center;
  `}

  img {
    max-width: 100%;
    margin-bottom: ${Spacing.L1};
  }
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: ${Spacing.L5};
  right: ${Spacing.L5};
`;
