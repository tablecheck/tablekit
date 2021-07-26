import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Size, Spacing } from '@tablecheck/tablekit-theme';
import { variant, ThemeOnlyProps } from '@tablecheck/tablekit-utils';
import { ReactChild } from 'react';

import { HeaderWrapper } from '../styled';
import { HeaderAppearance } from '../types';

import { ModalCloseButton } from './ModalCloseButton';

export const HeaderIconWrapper = styled.span<{
  appearance: HeaderAppearance;
}>`
  ${variant<
    HeaderAppearance | 'default',
    SerializedStyles,
    {
      appearance: HeaderAppearance;
    }
  >({
    prop: 'appearance',
    default: 'default',
    variants: {
      default: css`
        color: currentColor;
      `,
      [HeaderAppearance.Danger]: ({ theme }: ThemeOnlyProps) =>
        css`
          color: ${theme.colors.danger};
        `,
      [HeaderAppearance.Warning]: ({ theme }: ThemeOnlyProps) =>
        css`
          color: ${theme.colors.warning};
        `
    }
  })};
  margin-right: ${Spacing.L2};
  flex: 0 0 auto;
  padding: calc(${Spacing.L3} / 2) 0;
`;

export const ModalHeader = ({
  appearance,
  hasCloseIcon,
  children,
  hasKeyline
}: {
  appearance?: HeaderAppearance;
  hasCloseIcon?: boolean;
  children?: ReactChild;
  hasKeyline?: boolean;
}): JSX.Element => (
  <HeaderWrapper hasKeyline={hasKeyline} hasCloseIcon={hasCloseIcon}>
    {appearance ? (
      <HeaderIconWrapper appearance={appearance}>
        <Icon icon={getIcon(appearance)} size={Size.Regular2} />
      </HeaderIconWrapper>
    ) : null}
    {children}
    {hasCloseIcon ? (
      <ModalCloseButton
        iconBefore={() => <Icon icon={getIcon('close')} />}
        tabIndex={-1}
      />
    ) : null}
  </HeaderWrapper>
);
