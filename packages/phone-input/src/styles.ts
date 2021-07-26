import { CSSObject, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { InputSize } from '@tablecheck/tablekit-input';
import {
  BORDER_RADIUS,
  FieldHeight,
  Spacing
} from '@tablecheck/tablekit-theme';
import { margin, mediaQuery } from '@tablecheck/tablekit-utils';
import { ReactNode } from 'react';

import { FlagSelectProps, SelectType } from './types';

const getFlagSelectHeight = (size: InputSize): string => {
  switch (size) {
    case InputSize.Large:
      return FieldHeight.Large;
    case InputSize.Regular2:
      return FieldHeight.Regular2;
    case InputSize.Small:
      return FieldHeight.Small;
    default:
      return FieldHeight.Regular;
  }
};

export const getFlagSelectStyles = ({
  theme,
  size
}: {
  theme: Theme;
  size: FlagSelectProps['size'];
}): React.ComponentProps<SelectType>['styles'] => ({
  control: (style: CSSObject) => ({
    ...style,
    height: mediaQuery(
      'size',
      getFlagSelectHeight
    )({ theme, size }) as unknown as string,
    minHeight: 'initial',
    transition:
      'background-color 200ms ease-in-out, border-color 200ms ease-in-out, width 100ms',
    borderRadius: theme.isRtl
      ? `0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`
      : `${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px`
  }),
  dropdownIndicator: (style: CSSObject) => ({
    ...style,
    paddingBottom: '0',
    paddingTop: '0',
    ...(theme.isRtl ? { paddingRight: '0' } : { paddingLeft: '0' })
  }),
  menu: (style: CSSObject) => ({
    ...style,
    width: '200px',
    ...(theme.isRtl && { marginLeft: 'calc(70px - 200px)' })
  }),
  singleValue: (style) => ({
    ...style,
    maxWidth: undefined,
    position: 'relative',
    transform: 'none',
    top: 0,
    overflow: 'unset'
  }),
  valueContainer: (style: CSSObject) => ({
    ...style,
    paddingRight: Spacing.L1,
    overflow: 'hidden',
    flexWrap: 'nowrap'
  }),
  container: (style: CSSObject) => ({
    ...style,
    width: undefined
  }),
  groupHeading: (style: CSSObject) => ({
    ...style,
    ...(theme.isRtl && { direction: 'rtl' })
  }),
  option: (style: CSSObject) => ({
    ...style,
    ...(theme.isRtl && {
      '&>div': {
        direction: 'rtl'
      }
    })
  })
});

export const Label = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  line-height: 1.2;
`;

export const FlagWrap = styled.span<{ children: ReactNode | null }>`
  margin-top: 1px;
  margin-bottom: 1px;
  ${margin({ right: 8, left: 1 })};
  display: flex;
  span {
    max-width: 100%;
    max-height: 100%;
  }
`;
