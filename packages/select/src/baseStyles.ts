import { Theme, CSSObject } from '@emotion/react';
import { INPUT_WIDTHS, InputSize } from '@tablecheck/tablekit-input';
import { COLORS, Spacing, FieldHeight, Size } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';
import chroma from 'chroma-js/chroma-tablekit';
import { StylesConfig, OptionTypeBase, GroupTypeBase } from 'react-select';

import { selectClassicTheme, selectThemeNamespace } from './themes';

const inputSizes = {
  [InputSize.Large]: {
    height: FieldHeight.Large,
    font: Typography.Heading3,
    spacing: '18px'
  },
  [InputSize.Regular]: {
    height: FieldHeight.Regular,
    font: Typography.Heading4,
    spacing: Spacing.L3
  },
  [InputSize.Regular2]: {
    height: FieldHeight.Regular2,
    font: Typography.Heading4,
    spacing: Spacing.L3
  },
  [InputSize.Small]: {
    height: FieldHeight.Small,
    font: Typography.Heading4,
    spacing: '10px'
  }
};

function getSizeStyles(size: InputSize) {
  return inputSizes[size] || inputSizes[InputSize.Regular];
}

export function baseStyles<
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  theme: Theme,
  isInvalid?: boolean,
  isWarning?: boolean,
  isSuccess?: boolean
): StylesConfig<OptionType, IsMulti, GroupType> {
  return {
    container: (
      css,
      { selectProps: { shouldFitContainer, isButtonDropDown, width, size } }
    ) => {
      const { height } = getSizeStyles(size);
      const styles: CSSObject = {
        ...css,
        pointerEvents: 'auto',
        height
      };

      // default styles inherited from react-select stretch the select out
      if (!shouldFitContainer && !isButtonDropDown) {
        styles.width = width
          ? INPUT_WIDTHS[width as Size]
          : INPUT_WIDTHS[Size.Regular];
      }
      return styles;
    },
    valueContainer: (css, { selectProps: { size } }) => {
      const { spacing } = getSizeStyles(size);
      return {
        ...css,
        padding: `0 ${spacing}`,
        whiteSpace: 'nowrap'
      };
    },
    control: (css, props) => {
      const {
        isFocused,
        isDisabled,
        selectProps: { size }
      } = props;

      let borderColor = getThemeValue(
        `${selectThemeNamespace}.common.borderColor`,
        selectClassicTheme?.common?.borderColor
      )({ theme });
      if (!isDisabled) {
        if (isFocused) borderColor = theme.colors.secondary;
        if (isInvalid) {
          borderColor = theme.colors.danger;
        } else if (isWarning) {
          borderColor = theme.colors.warning;
        } else if (isSuccess) {
          borderColor = theme.colors.success;
        }
      }

      const borderColorHover = theme.colors.primary;

      const isLargeBorder = isFocused || isInvalid || isSuccess || isWarning;
      const transitionDuration = '200ms';

      const { height, font } = getSizeStyles(size);

      return {
        ...css,
        borderColor: borderColor as string,
        borderStyle: 'solid',
        borderWidth: isLargeBorder ? 2 : 1,
        boxShadow: 'none',
        padding: isLargeBorder ? 0 : 1,
        minHeight: height,
        fontSize: font.fontSize,
        lineHeight: font.lineHeight,
        opacity: isDisabled ? 0.5 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
        transition: `background-color ${transitionDuration} ease-in-out,
        border-color ${transitionDuration} ease-in-out`,
        color: theme.colors.text,
        cursor: isDisabled ? 'not-allowed' : 'pointer',

        ':hover': {
          borderColor: borderColorHover as string,
          borderWidth: 2,
          padding: 0
        }
      };
    },
    dropdownIndicator: (
      css: CSSObject,
      { isFocused, selectProps: { size } }
    ) => {
      const defaultColor = getThemeValue(
        `${selectThemeNamespace}.dropdownIndicator.default.color`,
        selectClassicTheme?.dropdownIndicator?.default?.color
      )({ theme }) as string;
      const focusedColor = getThemeValue(
        `${selectThemeNamespace}.dropdownIndicator.focused.color`,
        selectClassicTheme?.dropdownIndicator?.focused?.color
      )({ theme }) as string;
      const hoveredColor = getThemeValue(
        `${selectThemeNamespace}.dropdownIndicator.hovered.color`,
        selectClassicTheme?.dropdownIndicator?.hovered?.color
      )({ theme }) as string;

      const { spacing } = getSizeStyles(size);

      return {
        ...css,
        padding: `0 ${spacing}`,
        color: isFocused ? focusedColor : defaultColor,
        ':hover': {
          color: hoveredColor
        }
      };
    },
    clearIndicator: (css: CSSObject, { isFocused }) => {
      const defaultColor = getThemeValue(
        `${selectThemeNamespace}.clearIndicator.default.color`,
        selectClassicTheme?.clearIndicator?.default?.color
      )({ theme }) as string;
      const focusedColor = getThemeValue(
        `${selectThemeNamespace}.clearIndicator.focused.color`,
        selectClassicTheme?.clearIndicator?.focused?.color
      )({ theme }) as string;
      const hoveredColor = getThemeValue(
        `${selectThemeNamespace}.clearIndicator.hovered.color`,
        selectClassicTheme?.clearIndicator?.hovered?.color
      )({ theme }) as string;

      return {
        ...css,
        color: isFocused ? focusedColor : defaultColor,
        ':hover': {
          color: hoveredColor
        }
      };
    },
    option: (
      css,
      { data, isDisabled, isFocused, isSelected, selectProps: { size } }
    ) => {
      const { font } = getSizeStyles(size);
      const styles = {
        ...css,
        fontSize: font.fontSize,
        lineHeight: font.lineHeight,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1
      };

      if (data.color) {
        const tagColor = data.color;
        if (isSelected) {
          return {
            ...styles,
            backgroundColor: chroma.mix(tagColor, COLORS.PURPLE.L1, 0.6).css(),
            color: theme.colors.text
          };
        }
        if (isFocused) {
          const activeBackgroundChroma = chroma(tagColor)
            .brighten(0.4)
            .alpha(0.4);
          const activeColor = chroma(tagColor);
          return {
            ...styles,
            backgroundColor: activeBackgroundChroma.css(),
            color: activeColor
          };
        }
        return {
          ...styles,
          color: tagColor
        };
      }

      let backgroundColor: string | undefined;
      let boxShadow;

      if (isSelected) {
        backgroundColor = getThemeValue(
          `${selectThemeNamespace}.option.selected.backgroundColor`,
          selectClassicTheme?.option?.selected?.backgroundColor
        )({ theme }) as string;

        const borderColor = getThemeValue(
          `${selectThemeNamespace}.option.selected.borderColor`,
          selectClassicTheme?.option?.selected?.borderColor
        )({ theme }) as string;

        boxShadow = `inset 3px 0 0 -1px ${borderColor}`;
      } else if (isFocused && !isDisabled) {
        backgroundColor = getThemeValue(
          `${selectThemeNamespace}.option.hovered.backgroundColor`,
          selectClassicTheme?.option?.hovered?.backgroundColor
        )({ theme }) as string;
      }

      if (!isDisabled) {
        // override the active state not to show primary background color on :selected:active
        const activeBackgroundColor = getThemeValue(
          `${selectThemeNamespace}.option.active.backgroundColor`,
          selectClassicTheme?.option?.active?.backgroundColor
        )({ theme }) as string;

        styles[':active'] = styles[':active'] || {};
        styles[':active'].backgroundColor = isSelected
          ? backgroundColor
          : activeBackgroundColor;
      }

      return {
        ...styles,
        backgroundColor,
        color: theme.colors.text,
        boxShadow
      };
    },
    placeholder: (css, { selectProps: { size } }) => {
      const { spacing } = getSizeStyles(size);
      return {
        ...css,
        maxWidth: `calc(100% - ${spacing})`,
        color: theme.colors.text
      };
    },
    singleValue: (css, { selectProps: { size } }) => {
      const { spacing } = getSizeStyles(size);
      return {
        ...css,
        maxWidth: `calc(100% - ${spacing})`,
        color: theme.colors.text
      };
    },
    menu: (css, { selectProps: { isButtonDropDown, width } }) => {
      const styles = {
        ...css,
        marginTop: '1px',
        color: theme.colors.text
      };

      if (isButtonDropDown) {
        styles.width = width
          ? INPUT_WIDTHS[width as Size]
          : INPUT_WIDTHS[Size.Regular];
      }

      return styles;
    },
    multiValueRemove: (css) => ({
      ...css,
      ':hover': {
        backgroundColor: theme.colors.hoverNeutralBackground,
        color: theme.colors.text
      }
    }),
    multiValueLabel: (css) => ({
      ...css,
      ...Typography.Heading4
    })
  };
}
