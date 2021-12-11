import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Content as RxContent,
  Overlay as RxOverlay,
  Root as RxRoot
} from '@radix-ui/react-dialog';
import {
  BORDER_RADIUS,
  COLORS,
  DEPTH,
  Size,
  Spacing,
  ZIndex
} from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import {
  getThemeValue,
  padding,
  ThemeOnlyProps,
  mediaQuery
} from '@tablecheck/tablekit-utils';
import { ElementType } from 'react';
import { animated } from 'react-spring';

import { modalClassicTheme, modalThemeNamespace } from './themes';
import {
  AllowedModalWidth,
  BaseModalProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalTitleProps
} from './types';

export const ModalRoot = RxRoot;

const ALLOWED_WIDTH: AllowedModalWidth[] = [
  Size.Large,
  Size.XLarge,
  Size.Regular,
  Size.Small
];

const WIDTHS: { [key in AllowedModalWidth]: number } = {
  [Size.Small]: 400,
  [Size.Regular]: 600,
  [Size.Large]: 800,
  [Size.XLarge]: 968
};

const isAllowedModalWidth = (width: string): width is AllowedModalWidth =>
  ALLOWED_WIDTH.indexOf(width as AllowedModalWidth) !== -1;

export const ModalOverlay = animated<ElementType>(styled(RxOverlay)`
  background-color: ${COLORS.GRAY_TRANSLUCENT.L6};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  pointer-events: auto;
  z-index: ${ZIndex.Modal};
`);

export const ModalContent = animated<ElementType>(styled(RxContent, {
  shouldForwardProp: (prop: string) =>
    [
      'shouldPreventOverflow',
      'height',
      'maxHeight',
      'width',
      'maxWidth',
      'isChromeless'
    ].indexOf(prop) === -1
})<
  Pick<
    BaseModalProps,
    'height' | 'width' | 'isChromeless' | 'maxWidth' | 'maxHeight'
  > & {
    shouldPreventOverflow?: boolean;
  }
>`
  background-color: ${getThemeValue(
    `${modalThemeNamespace}.body.backgroundColor`,
    modalClassicTheme.body.backgroundColor
  )};
  color: ${({ theme }) => theme.colors.text};
  outline: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: calc(${Spacing.L6} / 2);
  left: 50%;
  transform: translateX(-50%);
  z-index: ${ZIndex.Modal};
  ${mediaQuery('maxWidth', (currentSize = `calc(100% - ${Spacing.L6})`) =>
    typeof currentSize === 'string'
      ? `max-width: ${currentSize};`
      : `max-width: ${currentSize}px;`
  )}
  ${mediaQuery('maxHeight', (currentSize = `calc(100% - ${Spacing.L5})`) =>
    typeof currentSize === 'string'
      ? `max-height: ${currentSize};`
      : `max-height: ${currentSize}px;`
  )}
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};
  width: ${({ width }) => {
    if (!width) {
      return 'auto';
    }

    if (typeof width === 'number') {
      return `${width}px`;
    }

    if (isAllowedModalWidth(width)) {
      return `${WIDTHS[width]}px`;
    }

    return width;
  }};

  ${({ isChromeless }) =>
    !isChromeless
      ? css`
          border-radius: ${BORDER_RADIUS}px;
          ${DEPTH.FIXED};
        `
      : ''}

  ${({ shouldPreventOverflow }) =>
    shouldPreventOverflow
      ? css`
          overflow: hidden;
        `
      : ''}
`);

export const ModalBody = styled('div', {
  shouldForwardProp: (prop: string) =>
    ['hasGutters', 'isScrollable'].indexOf(prop) === -1
})<ModalBodyProps>`
  flex: 1 1 auto;
  padding: ${({ hasGutters }) => (hasGutters ? `0 ${Spacing.L5}` : 0)};
  margin: ${({ hasGutters }) => (hasGutters ? `${Spacing.L2} 0` : 0)};

  ${({ isScrollable }) =>
    isScrollable
      ? css`
          overflow-y: auto;
          overflow-x: hidden;
          max-height: 100%;
        `
      : ''}
`;

export const ModalTitle = styled('h4', {
  shouldForwardProp: (prop: string) => prop !== 'isMultiline'
})<ModalTitleProps>`
  ${Typography.Heading2};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  line-height: 37px;
  letter-spacing: -0.008em;
  flex: 1;
  ${({ isMultiline }) =>
    isMultiline
      ? css`
          word-wrap: break-word;
          width: 100%;
        `
      : css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
`;

const BaseWrapper = styled.div`
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: ${({ theme: { isRtl } }) => (isRtl ? 'row-reverse' : 'row')};
  flex: 0 0 auto;
  min-height: 56px;
  padding: ${Spacing.L3} ${Spacing.L5};
  width: 100%;
`;

const getKeyline =
  (position: 'top' | 'bottom') =>
  ({ hasKeyline, theme }: { hasKeyline?: boolean } & ThemeOnlyProps) => {
    if (hasKeyline) {
      const color = getThemeValue(
        `${modalThemeNamespace}.keylineColor`,
        modalClassicTheme.keylineColor
      )({ theme });
      const height = getThemeValue(
        `${modalThemeNamespace}.keylineHeight`,
        modalClassicTheme.keylineHeight
      )({ theme });

      return css`
        z-index: 1;
        box-shadow: 0 ${position === 'top' ? '-' : ''}${height} 0 0 ${color};
      `;
    }
    return '';
  };

export const HeaderWrapper = styled(BaseWrapper, {
  shouldForwardProp: (prop: string) =>
    ['hasCloseIcon', 'hasKeyline'].indexOf(prop) === -1
})<ModalHeaderProps>`
  ${({ hasCloseIcon, ...props }) =>
    hasCloseIcon
      ? css`
          ${padding({
            top: Spacing.L3,
            bottom: Spacing.L3,
            left: Spacing.L5,
            right: Spacing.L4
          })(props)}
        `
      : ''};
  justify-content: space-between;
  ${getKeyline('bottom')}
`;

export const FooterWrapper = styled(BaseWrapper, {
  shouldForwardProp: (prop: string) => prop !== 'hasKeyline'
})<ModalFooterProps>`
  justify-content: flex-end;
  ${getKeyline('top')}
`;
