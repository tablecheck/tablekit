// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { css } from '@emotion/react';

/**
 * DO NOT EDIT; File is generated from figma, see './updateFromFigma.mjs' for update instructions
 */

export type SentimentColors =
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'success'
  | 'warning';

// The following are duplicated as extensions and plugins need the '--name' format
// but we need objects exported for usage with certain 3rd party libraries or when computing colours

export const lightColors = css`
  color-scheme: light;
  --border: rgba(229, 229, 229, 1);
  --border-active: rgba(41, 41, 41, 1);
  --border-transparent: rgba(0, 0, 0, 0.1);
  --error: rgba(204, 0, 0, 1);
  --error-surface: rgba(254, 223, 223, 1);
  --error-surface-hover: rgba(254, 205, 205, 1);
  --error-text: rgba(204, 0, 0, 1);
  --field: rgba(255, 255, 255, 1);
  --focus: rgba(0, 23, 231, 1);
  --info: rgba(0, 102, 204, 1);
  --info-surface: rgba(223, 239, 254, 1);
  --info-surface-hover: rgba(205, 229, 254, 1);
  --info-text: rgba(0, 102, 204, 1);
  --link: rgba(0, 102, 204, 1);
  --link-disabled: rgba(206, 206, 206, 1);
  --link-hover: rgba(27, 126, 225, 1);
  --link-visited: rgba(200, 0, 204, 1);
  --neutral: rgba(75, 75, 75, 1);
  --neutral-surface: rgba(238, 238, 238, 1);
  --neutral-surface-hover: rgba(229, 229, 229, 1);
  --neutral-text: rgba(75, 75, 75, 1);
  --purple-surface: rgba(245, 216, 255, 1);
  --purple-text: rgba(113, 0, 153, 1);
  --secondary: rgba(41, 41, 41, 1);
  --secondary-active: rgba(75, 75, 75, 1);
  --secondary-hover: rgba(102, 102, 102, 1);
  --secondary-surface: rgba(249, 249, 249, 1);
  --success: rgba(6, 121, 0, 1);
  --success-surface: rgba(233, 254, 223, 1);
  --success-surface-hover: rgba(220, 254, 205, 1);
  --success-text: rgba(6, 121, 0, 1);
  --surface: rgba(255, 255, 255, 1);
  --surface-active: rgba(0, 0, 0, 0.14);
  --surface-alt: rgba(252, 252, 252, 1);
  --surface-alt-active: rgba(243, 242, 255, 1);
  --surface-alt-hover: rgba(249, 249, 249, 1);
  --surface-alt-hover-transparent: rgba(0, 0, 0, 0.03);
  --surface-disabled: rgba(238, 238, 238, 1);
  --surface-hover: rgba(238, 238, 238, 1);
  --surface-hover-transparent: rgba(0, 0, 0, 0.06);
  --text: rgba(41, 41, 41, 1);
  --text-contrast: rgba(255, 255, 255, 1);
  --text-disabled: rgba(206, 206, 206, 1);
  --text-placeholder: rgba(191, 191, 191, 1);
  --text-subtle: rgba(152, 152, 152, 1);
  --warning: rgba(232, 183, 47, 1);
  --warning-surface: rgba(255, 250, 223, 1);
  --warning-surface-hover: rgba(255, 248, 212, 1);
  --warning-text: rgba(146, 107, 7, 1);
  --grey-950: rgba(30, 30, 30, 1);
  --grey-900: rgba(41, 41, 41, 1);
  --grey-850: rgba(58, 58, 58, 1);
  --grey-800: rgba(75, 75, 75, 1);
  --grey-750: rgba(102, 102, 102, 1);
  --grey-700: rgba(152, 152, 152, 1);
  --grey-600: rgba(191, 191, 191, 1);
  --grey-500: rgba(206, 206, 206, 1);
  --grey-400: rgba(219, 219, 219, 1);
  --grey-300: rgba(229, 229, 229, 1);
  --grey-200: rgba(238, 238, 238, 1);
  --grey-100: rgba(249, 249, 249, 1);
  --grey-50: rgba(253, 253, 253, 1);
`;

export const lightColorsObject = {
  border: 'rgba(229, 229, 229, 1)',
  'border-active': 'rgba(41, 41, 41, 1)',
  'border-transparent': 'rgba(0, 0, 0, 0.1)',
  error: 'rgba(204, 0, 0, 1)',
  'error-surface': 'rgba(254, 223, 223, 1)',
  'error-surface-hover': 'rgba(254, 205, 205, 1)',
  'error-text': 'rgba(204, 0, 0, 1)',
  field: 'rgba(255, 255, 255, 1)',
  focus: 'rgba(0, 23, 231, 1)',
  info: 'rgba(0, 102, 204, 1)',
  'info-surface': 'rgba(223, 239, 254, 1)',
  'info-surface-hover': 'rgba(205, 229, 254, 1)',
  'info-text': 'rgba(0, 102, 204, 1)',
  link: 'rgba(0, 102, 204, 1)',
  'link-disabled': 'rgba(206, 206, 206, 1)',
  'link-hover': 'rgba(27, 126, 225, 1)',
  'link-visited': 'rgba(200, 0, 204, 1)',
  neutral: 'rgba(75, 75, 75, 1)',
  'neutral-surface': 'rgba(238, 238, 238, 1)',
  'neutral-surface-hover': 'rgba(229, 229, 229, 1)',
  'neutral-text': 'rgba(75, 75, 75, 1)',
  'purple-surface': 'rgba(245, 216, 255, 1)',
  'purple-text': 'rgba(113, 0, 153, 1)',
  secondary: 'rgba(41, 41, 41, 1)',
  'secondary-active': 'rgba(75, 75, 75, 1)',
  'secondary-hover': 'rgba(102, 102, 102, 1)',
  'secondary-surface': 'rgba(249, 249, 249, 1)',
  success: 'rgba(6, 121, 0, 1)',
  'success-surface': 'rgba(233, 254, 223, 1)',
  'success-surface-hover': 'rgba(220, 254, 205, 1)',
  'success-text': 'rgba(6, 121, 0, 1)',
  surface: 'rgba(255, 255, 255, 1)',
  'surface-active': 'rgba(0, 0, 0, 0.14)',
  'surface-alt': 'rgba(252, 252, 252, 1)',
  'surface-alt-active': 'rgba(243, 242, 255, 1)',
  'surface-alt-hover': 'rgba(249, 249, 249, 1)',
  'surface-alt-hover-transparent': 'rgba(0, 0, 0, 0.03)',
  'surface-disabled': 'rgba(238, 238, 238, 1)',
  'surface-hover': 'rgba(238, 238, 238, 1)',
  'surface-hover-transparent': 'rgba(0, 0, 0, 0.06)',
  text: 'rgba(41, 41, 41, 1)',
  'text-contrast': 'rgba(255, 255, 255, 1)',
  'text-disabled': 'rgba(206, 206, 206, 1)',
  'text-placeholder': 'rgba(191, 191, 191, 1)',
  'text-subtle': 'rgba(152, 152, 152, 1)',
  warning: 'rgba(232, 183, 47, 1)',
  'warning-surface': 'rgba(255, 250, 223, 1)',
  'warning-surface-hover': 'rgba(255, 248, 212, 1)',
  'warning-text': 'rgba(146, 107, 7, 1)',
  'grey-950': 'rgba(30, 30, 30, 1)',
  'grey-900': 'rgba(41, 41, 41, 1)',
  'grey-850': 'rgba(58, 58, 58, 1)',
  'grey-800': 'rgba(75, 75, 75, 1)',
  'grey-750': 'rgba(102, 102, 102, 1)',
  'grey-700': 'rgba(152, 152, 152, 1)',
  'grey-600': 'rgba(191, 191, 191, 1)',
  'grey-500': 'rgba(206, 206, 206, 1)',
  'grey-400': 'rgba(219, 219, 219, 1)',
  'grey-300': 'rgba(229, 229, 229, 1)',
  'grey-200': 'rgba(238, 238, 238, 1)',
  'grey-100': 'rgba(249, 249, 249, 1)',
  'grey-50': 'rgba(253, 253, 253, 1)'
};

export const darkColors = css`
  color-scheme: dark;
  --border: rgba(58, 58, 58, 1);
  --border-active: rgba(255, 255, 255, 1);
  --border-transparent: rgba(255, 255, 255, 0.17);
  --error: rgba(239, 72, 72, 1);
  --error-surface: rgba(140, 0, 0, 1);
  --error-surface-hover: rgba(159, 0, 0, 1);
  --error-text: rgba(254, 223, 223, 1);
  --field: rgba(41, 41, 41, 1);
  --focus: rgba(104, 119, 253, 1);
  --info: rgba(72, 155, 239, 1);
  --info-surface: rgba(0, 70, 140, 1);
  --info-surface-hover: rgba(0, 88, 175, 1);
  --info-text: rgba(223, 239, 254, 1);
  --link: rgba(72, 155, 239, 1);
  --link-disabled: rgba(152, 152, 152, 1);
  --link-hover: rgba(27, 126, 225, 1);
  --link-visited: rgba(181, 11, 215, 1);
  --neutral: rgba(102, 102, 102, 1);
  --neutral-surface: rgba(58, 58, 58, 1);
  --neutral-surface-hover: rgba(41, 41, 41, 1);
  --neutral-text: rgba(219, 219, 219, 1);
  --purple-surface: rgba(113, 0, 153, 1);
  --purple-text: rgba(245, 216, 255, 1);
  --secondary: rgba(255, 255, 255, 1);
  --secondary-active: rgba(206, 206, 206, 1);
  --secondary-hover: rgba(229, 229, 229, 1);
  --secondary-surface: rgba(41, 41, 41, 1);
  --success: rgba(20, 175, 0, 1);
  --success-surface: rgba(3, 102, 0, 1);
  --success-surface-hover: rgba(6, 121, 0, 1);
  --success-text: rgba(233, 254, 223, 1);
  --surface: rgba(18, 18, 18, 1);
  --surface-active: rgba(255, 255, 255, 0.17);
  --surface-alt: rgba(30, 30, 30, 1);
  --surface-alt-active: rgba(56, 39, 80, 1);
  --surface-alt-hover: rgba(41, 41, 41, 1);
  --surface-alt-hover-transparent: rgba(255, 255, 255, 0.09);
  --surface-disabled: rgba(75, 75, 75, 1);
  --surface-hover: rgba(41, 41, 41, 1);
  --surface-hover-transparent: rgba(255, 255, 255, 0.09);
  --text: rgba(253, 253, 253, 1);
  --text-contrast: rgba(18, 18, 18, 1);
  --text-disabled: rgba(152, 152, 152, 1);
  --text-placeholder: rgba(152, 152, 152, 1);
  --text-subtle: rgba(191, 191, 191, 1);
  --warning: rgba(239, 194, 72, 1);
  --warning-surface: rgba(140, 103, 0, 1);
  --warning-surface-hover: rgba(159, 116, 0, 1);
  --warning-text: rgba(254, 246, 223, 1);
  --grey-950: rgba(253, 253, 253, 1);
  --grey-900: rgba(249, 249, 249, 1);
  --grey-800: rgba(238, 238, 238, 1);
  --grey-700: rgba(229, 229, 229, 1);
  --grey-600: rgba(219, 219, 219, 1);
  --grey-500: rgba(206, 206, 206, 1);
  --grey-400: rgba(191, 191, 191, 1);
  --grey-300: rgba(152, 152, 152, 1);
  --grey-250: rgba(102, 102, 102, 1);
  --grey-200: rgba(75, 75, 75, 1);
  --grey-150: rgba(58, 58, 58, 1);
  --grey-100: rgba(41, 41, 41, 1);
  --grey-50: rgba(30, 30, 30, 1);
`;

export const darkColorsObject = {
  border: 'rgba(58, 58, 58, 1)',
  'border-active': 'rgba(255, 255, 255, 1)',
  'border-transparent': 'rgba(255, 255, 255, 0.17)',
  error: 'rgba(239, 72, 72, 1)',
  'error-surface': 'rgba(140, 0, 0, 1)',
  'error-surface-hover': 'rgba(159, 0, 0, 1)',
  'error-text': 'rgba(254, 223, 223, 1)',
  field: 'rgba(41, 41, 41, 1)',
  focus: 'rgba(104, 119, 253, 1)',
  info: 'rgba(72, 155, 239, 1)',
  'info-surface': 'rgba(0, 70, 140, 1)',
  'info-surface-hover': 'rgba(0, 88, 175, 1)',
  'info-text': 'rgba(223, 239, 254, 1)',
  link: 'rgba(72, 155, 239, 1)',
  'link-disabled': 'rgba(152, 152, 152, 1)',
  'link-hover': 'rgba(27, 126, 225, 1)',
  'link-visited': 'rgba(181, 11, 215, 1)',
  neutral: 'rgba(102, 102, 102, 1)',
  'neutral-surface': 'rgba(58, 58, 58, 1)',
  'neutral-surface-hover': 'rgba(41, 41, 41, 1)',
  'neutral-text': 'rgba(219, 219, 219, 1)',
  'purple-surface': 'rgba(113, 0, 153, 1)',
  'purple-text': 'rgba(245, 216, 255, 1)',
  secondary: 'rgba(255, 255, 255, 1)',
  'secondary-active': 'rgba(206, 206, 206, 1)',
  'secondary-hover': 'rgba(229, 229, 229, 1)',
  'secondary-surface': 'rgba(41, 41, 41, 1)',
  success: 'rgba(20, 175, 0, 1)',
  'success-surface': 'rgba(3, 102, 0, 1)',
  'success-surface-hover': 'rgba(6, 121, 0, 1)',
  'success-text': 'rgba(233, 254, 223, 1)',
  surface: 'rgba(18, 18, 18, 1)',
  'surface-active': 'rgba(255, 255, 255, 0.17)',
  'surface-alt': 'rgba(30, 30, 30, 1)',
  'surface-alt-active': 'rgba(56, 39, 80, 1)',
  'surface-alt-hover': 'rgba(41, 41, 41, 1)',
  'surface-alt-hover-transparent': 'rgba(255, 255, 255, 0.09)',
  'surface-disabled': 'rgba(75, 75, 75, 1)',
  'surface-hover': 'rgba(41, 41, 41, 1)',
  'surface-hover-transparent': 'rgba(255, 255, 255, 0.09)',
  text: 'rgba(253, 253, 253, 1)',
  'text-contrast': 'rgba(18, 18, 18, 1)',
  'text-disabled': 'rgba(152, 152, 152, 1)',
  'text-placeholder': 'rgba(152, 152, 152, 1)',
  'text-subtle': 'rgba(191, 191, 191, 1)',
  warning: 'rgba(239, 194, 72, 1)',
  'warning-surface': 'rgba(140, 103, 0, 1)',
  'warning-surface-hover': 'rgba(159, 116, 0, 1)',
  'warning-text': 'rgba(254, 246, 223, 1)',
  'grey-950': 'rgba(253, 253, 253, 1)',
  'grey-900': 'rgba(249, 249, 249, 1)',
  'grey-800': 'rgba(238, 238, 238, 1)',
  'grey-700': 'rgba(229, 229, 229, 1)',
  'grey-600': 'rgba(219, 219, 219, 1)',
  'grey-500': 'rgba(206, 206, 206, 1)',
  'grey-400': 'rgba(191, 191, 191, 1)',
  'grey-300': 'rgba(152, 152, 152, 1)',
  'grey-250': 'rgba(102, 102, 102, 1)',
  'grey-200': 'rgba(75, 75, 75, 1)',
  'grey-150': 'rgba(58, 58, 58, 1)',
  'grey-100': 'rgba(41, 41, 41, 1)',
  'grey-50': 'rgba(30, 30, 30, 1)'
};

export const brandColors = css`
  --primary: rgba(121, 53, 210, 1);
  --primary-active: rgba(109, 48, 189, 1);
  --primary-hover: rgba(109, 48, 189, 1);
  --primary-surface: rgba(230, 219, 243, 1);
  --primary-text: rgba(255, 255, 255, 1);
`;

export const brandColorsObject = {
  primary: 'rgba(121, 53, 210, 1)',
  'primary-active': 'rgba(109, 48, 189, 1)',
  'primary-hover': 'rgba(109, 48, 189, 1)',
  'primary-surface': 'rgba(230, 219, 243, 1)',
  'primary-text': 'rgba(255, 255, 255, 1)'
};

export const utilityColors = css`
  --black: rgba(0, 0, 0, 1);
  --grey: rgba(18, 18, 18, 1);
  --white: rgba(255, 255, 255, 1);
`;

export const utilityColorsObject = {
  black: 'rgba(0, 0, 0, 1)',
  grey: 'rgba(18, 18, 18, 1)',
  white: 'rgba(255, 255, 255, 1)'
};

export const lightEffectStyles = css`
  --elevation-large: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  --elevation-medium: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  --elevation-small: 0 0 3px 0 rgba(0, 0, 0, 0.1);
`;

export const darkEffectStyles = css`
  --elevation-large: 0 0 12px 0 rgba(255, 255, 255, 0.1);
  --elevation-medium: 0 0 6px 0 rgba(255, 255, 255, 0.1);
  --elevation-small: 0 0 3px 0 rgba(255, 255, 255, 0.1);
`;

export const theme = css`
  [data-theme='light'],
  :root {
    ${lightColors};
    ${lightEffectStyles}
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) {
      ${darkColors}
      ${darkEffectStyles}
    }
  }
  [data-theme='dark'] {
    ${darkColors}
    ${darkEffectStyles}
  }
  :root {
    ${brandColors}
    ${utilityColors}
  }
`;
