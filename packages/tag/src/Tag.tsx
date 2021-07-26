import { ThemeProvider, useTheme } from '@emotion/react';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { DARK_COLORS, CLASSIC_COLORS } from '@tablecheck/tablekit-theme';
import chroma from 'chroma-js/chroma-tablekit';
import { ButtonHTMLAttributes } from 'react';

import { StyledTag, TagWrapper, RemoveIconWrapper, TagContent } from './styled';
import { tagThemeNamespace } from './themes';
import { TagSize, TagAppearance } from './types';
import { isDarkColor } from './utils';

export type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Appearance of a tag. By default is `outline` */
  appearance?: TagAppearance;

  /** Standard react class for general container */
  className?: string;

  /** The color of the tag, should be either a hex, rgb or rgba value.
   * Color names are not supported */
  color?: string;

  /** If true show the X icon on the right hand side of the tag */
  isSelected?: boolean;

  /** Size of a tag. By default is `regular` */
  size?: TagSize;
};

export const Tag = ({
  color: tagColor,
  children,
  isSelected = false,
  className,
  appearance = TagAppearance.Outline,
  size = TagSize.Regular,
  ...props
}: PropsType): JSX.Element => {
  const parentTheme = useTheme();

  const tag = (
    <StyledTag
      {...props}
      appearance={appearance}
      size={size}
      className={className}
      isSelected={isSelected}
    >
      <TagWrapper>
        {children ? (
          <TagContent isSelected={isSelected}>{children}</TagContent>
        ) : null}
        {isSelected ? (
          <RemoveIconWrapper>
            <Icon icon={getIcon('close')} />
          </RemoveIconWrapper>
        ) : null}
      </TagWrapper>
    </StyledTag>
  );

  if (!tagColor) {
    return tag;
  }

  const textColor = isDarkColor(tagColor)
    ? DARK_COLORS.text
    : CLASSIC_COLORS.text;
  const selectedSolidBgColor = chroma(tagColor).darken(2).hex();
  const selectedSolidTextColor = isDarkColor(selectedSolidBgColor)
    ? DARK_COLORS.text
    : CLASSIC_COLORS.text;

  return (
    <ThemeProvider
      theme={{
        [tagThemeNamespace]: {
          common: {
            borderColor: tagColor
          },
          outline: {
            textColor: parentTheme.colors.text,
            backgroundColor: 'transparent',
            hoverBackgroundColor: chroma(tagColor).alpha(0.2).css(),
            selectedBackgroundColor: tagColor,
            hoverSelectedBackgroundColor: chroma(tagColor).darken(0.7).css(),
            selectedTextColor: textColor
          },
          solid: {
            textColor,
            backgroundColor: tagColor,
            hoverBackgroundColor: chroma(tagColor).darken(0.7).css(),
            selectedBackgroundColor: selectedSolidBgColor,
            selectedTextColor: selectedSolidTextColor,
            hoverSelectedBackgroundColor: chroma(selectedSolidBgColor)
              .brighten(0.7)
              .css()
          }
        }
      }}
    >
      {tag}
    </ThemeProvider>
  );
};
