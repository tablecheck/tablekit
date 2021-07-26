import {
  ThemeOnlyProps,
  getThemeValue,
  PackageThemeValue
} from '@tablecheck/tablekit-utils';

import {
  buttonThemeNamespace,
  buttonClassicTheme,
  ColorTheme
} from '../../themes';
import { Color } from '../../types';

export type VariantProps = ThemeOnlyProps & {
  color: Color;
};

export const borderWidth = 2;

export function resolveColor(
  targetValue: keyof ColorTheme,
  props: ThemeOnlyProps & { color: Color }
): string {
  const themeObject = getThemeValue(
    `${buttonThemeNamespace}.${props.color}`,
    buttonClassicTheme[props.color]
  )(props) as unknown as ColorTheme;
  if (!themeObject) return '';
  let colorValue;
  if (themeObject[targetValue]) {
    colorValue = themeObject[targetValue];
  } else if (targetValue.indexOf('Transparent') > -1) {
    colorValue =
      themeObject[targetValue.replace('Transparent', '') as keyof ColorTheme];
  }
  let evalColorValue = colorValue || themeObject.main;
  if (!evalColorValue) return '';
  while (typeof evalColorValue === 'function') {
    evalColorValue = evalColorValue(
      props as Record<string, unknown> & ThemeOnlyProps & { color: Color }
    ) as PackageThemeValue;
  }
  return evalColorValue as string;
}
