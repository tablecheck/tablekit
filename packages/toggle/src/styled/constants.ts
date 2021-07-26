import { Spacing } from '@tablecheck/tablekit-theme';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { toggleClassicTheme, toggleThemeNamespace } from '../themes';

export const borderWidth = 2;
export const innerPadding = 4;
export const transitionDuration = '0.2s';
export const regularBaseHeight = Spacing.L6;
export const regularBaseWidth = '64px';

export const colorOptions = {
  backgroundChecked: getThemeValue(
    `${toggleThemeNamespace}.checked.backgroundColor`,
    toggleClassicTheme.checked.backgroundColor
  ),
  backgroundCheckedHover: getThemeValue(
    `${toggleThemeNamespace}.checked.backgroundColorHover`,
    toggleClassicTheme.checked.backgroundColorHover
  ),
  backgroundCheckedDisabled: getThemeValue(
    `${toggleThemeNamespace}.checked.backgroundColorDisabled`,
    toggleClassicTheme.checked.backgroundColorDisabled
  ),

  backgroundUnchecked: getThemeValue(
    `${toggleThemeNamespace}.unchecked.backgroundColor`,
    toggleClassicTheme.unchecked.backgroundColor
  ),
  backgroundUncheckedHover: getThemeValue(
    `${toggleThemeNamespace}.unchecked.backgroundColorHover`,
    toggleClassicTheme.unchecked.backgroundColorHover
  ),
  backgroundUncheckedDisabled: getThemeValue(
    `${toggleThemeNamespace}.unchecked.backgroundColorDisabled`,
    toggleClassicTheme.unchecked.backgroundColorDisabled
  )
};
