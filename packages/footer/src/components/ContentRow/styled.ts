import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { animated } from 'react-spring';

import { DEFAULT_MOBILE_BREAKPOINT } from '../../styled';
import { StyleProps } from '../../types';

function columnWidth(columns: number) {
  // to fix to 2 decimal places
  return Math.floor((columns / 12) * 10000) / 100;
}

export const MobileIcon = styled(Icon)<StyleProps>`
  display: flex;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    display: none;
  }
`;

export const StaticColumnHeader = styled.div<StyleProps>`
  white-space: nowrap;
  font-weight: bold;
  margin-bottom: ${Spacing.L3};
  ${Typography.Heading3};

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    ${Typography.Heading3};
  }
`;

export const ColumnHeaderWrapper = styled(StaticColumnHeader)<StyleProps>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  padding-bottom: ${Spacing.L2};
  border-bottom: 1px solid white;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    border-bottom: none;
    padding-bottom: 0;
    cursor: auto;
  }
`;

export const ColumnContent = animated(styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    height: auto !important;
  }
`);

export const Column = styled.div<
  StyleProps & {
    isSelected: boolean;
  }
>`
  display: flex;
  flex-direction: column;
  flex: 0 1 ${columnWidth(2)}%;
  width: 100%;
  margin: 0 0 ${Spacing.L2};

  & > ${ColumnHeaderWrapper} > ${MobileIcon} {
    transition: transform 0.3s ease-in-out;
    ${({ isSelected }) =>
      isSelected
        ? css`
            transform: rotate(180deg);
          `
        : css`
            transform: rotate(0deg);
          `}
  }
  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    width: auto;
    margin: 0 ${Spacing.L5} ${Spacing.L6};
  }
`;

export const ActionButtonsColumn = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  flex: 1 1 100%;
  padding: ${Spacing.L4} 0 0 0;
  margin: 0;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    justify-content: flex-start;
    flex: 0 1 ${columnWidth(2)}%;
    margin: 0 ${Spacing.L5};
    padding: 0;
  }
`;

export const ActionButton = styled(Button)`
  margin-bottom: ${Spacing.L6} !important;
  &:visited {
    color: white;
  }
  justify-content: center;
`;

export const socialMediaIconSize = 32;

export const imageHover = css`
  &:hover {
    opacity: 0.8;
  }
`;

export const SocialMediaRow = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;

  > a:not(:last-of-type) {
    margin-right: ${Spacing.L4};
    @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
      margin-right: ${Spacing.L3};
    }
  }

  svg {
    height: ${socialMediaIconSize}px;
    width: ${socialMediaIconSize}px;
    ${imageHover};
  }
`;

export const SocialImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const ContentRow = styled.div<StyleProps>`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  margin: 0 auto;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const ContentColumns = styled.div<StyleProps>`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin: 0;

  @media (min-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint || DEFAULT_MOBILE_BREAKPOINT}) {
    margin: 0 -${Spacing.L5};
    align-items: flex-start;
  }
`;

export const LeftContentColumns = styled(ContentColumns)<StyleProps>`
  flex: 1 1 100%;
  flex-direction: column;

  @media (min-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint || DEFAULT_MOBILE_BREAKPOINT}) {
    padding-right: ${Spacing.L5};
  }

  @media (min-width: 1020px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const RightContentColumns = styled(ContentColumns)`
  justify-content: flex-start;
  flex-direction: column;
`;

export const closedColumnStyle = {
  height: 0
};

export const openColumnStyle = {
  height: 'auto'
};

export function getColumnSpringProps(isOpen: boolean): {
  native: true;
  from: typeof closedColumnStyle;
  to: typeof closedColumnStyle | typeof openColumnStyle;
} {
  return {
    native: true,
    from: closedColumnStyle,
    to: isOpen ? openColumnStyle : closedColumnStyle
  };
}
