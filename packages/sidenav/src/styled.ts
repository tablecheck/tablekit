import { css, SerializedStyles } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import styled from '@emotion/styled';
import { Item, ItemProps } from '@tablecheck/tablekit-item';
import { FieldHeight, Size, Spacing, ZIndex } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, padding, variant } from '@tablecheck/tablekit-utils';
import { ReactElement, Ref } from 'react';

import { sidenavClassicTheme, sidenavThemeNamespace } from './themes';
import {
  BaseSideNavItemProps,
  SideNavContextState,
  SideNavSectionProps
} from './types';
import {
  BORDER_WIDTH,
  getSideNavLargeWidth,
  getSideNavRegularWidth,
  slideIn
} from './utils';

export const SideNavBody = styled('div', {
  shouldForwardProp: (
    prop: keyof Pick<SideNavContextState, 'isExpanded' | 'size'>
  ) => ['isExpanded'].indexOf(prop) === -1
})<Pick<SideNavContextState, 'isExpanded' | 'size'>>`
  border-right: 1px solid
    ${getThemeValue(
      `${sidenavThemeNamespace}.body.default.fillColor`,
      sidenavClassicTheme.body.default.fillColor
    )};
  background-color: ${getThemeValue(
    `${sidenavThemeNamespace}.body.default.background`,
    sidenavClassicTheme.body.default.background
  )};
  color: ${getThemeValue(
    `${sidenavThemeNamespace}.body.default.textColor`,
    sidenavClassicTheme.body.default.textColor
  )};
  display: flex;
  flex-direction: column;
  transition: all ${slideIn};
  z-index: ${ZIndex.Sidenav};
  ${variant<
    SideNavContextState['size'],
    SerializedStyles,
    Pick<SideNavContextState, 'isExpanded' | 'size'>
  >({
    prop: 'size',
    default: Size.Regular,
    variants: {
      [Size.Regular]: (props) => css`
        max-width: ${getSideNavRegularWidth(props)}px;
        min-width: ${getSideNavRegularWidth(props)}px;
        flex: 1;
        height: 100%;
        min-height: 0;
      `,
      [Size.Large]: (props) => css`
        max-width: ${getSideNavLargeWidth(props)}px;
        min-width: ${getSideNavLargeWidth(props)}px;
        flex: 1;
        height: 100%;
        min-height: 0;
      `
    }
  })}
`;

export const SideNavContentContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

export const SideNavFooterContainer = styled.div<
  Pick<SideNavContextState, 'size'>
>`
  align-items: center;
  cursor: pointer;
  display: flex;
  border-top: 1px solid
    ${getThemeValue(
      `${sidenavThemeNamespace}.body.default.fillColor`,
      sidenavClassicTheme.body.default.fillColor
    )};

  ${variant<
    SideNavContextState['size'],
    SerializedStyles,
    Pick<SideNavContextState, 'size'>
  >({
    prop: 'size',
    default: Size.Regular,
    variants: {
      [Size.Regular]: css`
        padding: ${Spacing.L2} 20px;
        min-height: ${FieldHeight.Regular};
        max-height: ${FieldHeight.Regular};
        width: 100%;
      `,
      [Size.Large]: css`
        padding: ${Spacing.L3} ${Spacing.L5};
        min-height: ${FieldHeight.Large};
        max-height: ${FieldHeight.Large};
        width: 100%;
      `
    }
  })}
  &:hover {
    background-color: ${getThemeValue(
      `${sidenavThemeNamespace}.navFooter.hoverBackground`,
      sidenavClassicTheme.navFooter.hoverBackground
    )};
  }
`;

export const SideNavFooterLabel = styled.div<{
  size: SideNavContextState['size'];
}>`
  cursor: pointer;
  overflow: hidden;
  padding-left: ${Spacing.L2};
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  ${({ size }) =>
    size === Size.Large ? Typography.Heading4 : Typography.Body2};
`;

export type IndentedNavItemProps = Pick<
  SideNavContextState,
  'size' | 'isExpanded'
> &
  Pick<BaseSideNavItemProps, 'isNested'>;

// Styling issues with this should be resolved in the @tablecheck/tablekit-item package if possible.
export const IndentedNavItem: (
  props: IndentedNavItemProps & ItemProps<'div'> & { ref?: Ref<HTMLDivElement> }
) => ReactElement | null = styled(Item, {
  shouldForwardProp: (prop: keyof IndentedNavItemProps) =>
    ['isNested', 'isExpanded'].indexOf(prop) === -1
})<IndentedNavItemProps>`
  ${(props) => {
    let leftIndent = props.size === Size.Large ? 24 : 20;
    if (props.size === Size.Large && props.isNested) {
      leftIndent += 24; // 24 is width of large icon
    } else if (props.isNested) {
      leftIndent += 16; // 16 is indent width of icon
    }
    return padding({
      right: props.isExpanded && props.isNested ? undefined : leftIndent,
      left: leftIndent
    })(props);
  }};
`;

export const NavItemLabel = styled.div<Pick<SideNavContextState, 'size'>>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  ${({ size }) =>
    size === Size.Large ? Typography.Heading3 : Typography.Body2};

  &:only-child {
    padding-left: 0;
  }
`;

export const NavSectionContainer = styled('div', {
  shouldForwardProp: (
    prop: keyof Pick<SideNavSectionProps<'div'>, 'isOpened' | 'isSelected'>
  ) => ['isOpened', 'isSelected'].indexOf(prop) === -1
})<Pick<SideNavSectionProps<'div'>, 'isOpened' | 'isSelected'>>`
  ${({ isOpened, isSelected, ...props }) => {
    let borderColor: CSSInterpolation = '';
    let backgroundColor: CSSInterpolation = '';
    if (isOpened) {
      borderColor = getThemeValue(
        `${sidenavThemeNamespace}.navSection.opened.fillColor`,
        sidenavClassicTheme.navSection.opened.fillColor
      )(props);
      backgroundColor = css`
        background-color: ${getThemeValue(
          `${sidenavThemeNamespace}.navSection.opened.background`,
          sidenavClassicTheme.navSection.opened.background
        )(props)};
      `;
    }
    if (isSelected) {
      borderColor = getThemeValue(
        `${sidenavThemeNamespace}.navSection.selectedBorderColor`,
        sidenavClassicTheme.navSection.selectedBorderColor
      )(props);
    }
    return css`
      ${backgroundColor}
      ${borderColor
        ? css`
            position: relative;

            &::before {
              position: absolute;
              top: 0;
              bottom: 0;
              content: '';
              left: 0;
              width: ${BORDER_WIDTH}px;
              background-color: ${borderColor};
              transition: background-color 0.3s ease-in-out;
            }
          `
        : ''}
    `;
  }}
`;

export const NavSectionChildrenContainer = styled('div', {
  shouldForwardProp: (
    prop: keyof Pick<SideNavSectionProps<'div'>, 'isOpened' | 'childrenCount'> &
      Pick<SideNavContextState, 'size'>
  ) => ['isOpened', 'childrenCount'].indexOf(prop) === -1
})<
  Pick<SideNavSectionProps<'div'>, 'isOpened' | 'childrenCount'> &
    Pick<SideNavContextState, 'size'>
>`
  overflow: hidden;
  transition: max-height ${slideIn};
  max-height: ${({ isOpened, childrenCount, size }) => {
    if (isOpened) {
      if (typeof childrenCount === 'number') {
        const childHeight = parseFloat(
          size === Size.Large ? FieldHeight.Large : FieldHeight.Regular
        );
        return `${childHeight * childrenCount}px`;
      }
      return 'fit-content';
    }
    return 0;
  }};
`;
