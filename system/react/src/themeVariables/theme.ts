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
  --field: rgba(255, 255, 255, 1);
  --secondary: rgba(41, 41, 41, 1);
  --secondary-active: rgba(40, 40, 40, 1);
  --secondary-hover: rgba(37, 37, 37, 1);
  --surface: rgba(255, 255, 255, 1);
  --surface-active: rgba(0, 0, 0, 0.15);
  --surface-disabled: rgba(229, 229, 229, 1);
  --surface-hover: rgba(0, 0, 0, 0.07);
  --surface-hover-transparent: rgba(0, 0, 0, 0.1);
  --text: rgba(41, 41, 41, 1);
  --text-contrast: rgba(255, 255, 255, 1);
  --text-disabled: rgba(206, 206, 206, 1);
  --text-placeholder: rgba(191, 191, 191, 1);
  --text-subtle: rgba(152, 152, 152, 1);
  --grey-900: rgba(41, 41, 41, 1);
  --grey-800: rgba(101, 101, 101, 1);
  --grey-700: rgba(152, 152, 152, 1);
  --grey-600: rgba(191, 191, 191, 1);
  --grey-500: rgba(206, 206, 206, 1);
  --grey-400: rgba(219, 219, 219, 1);
  --grey-300: rgba(229, 229, 229, 1);
  --grey-200: rgba(238, 238, 238, 1);
  --grey-100: rgba(249, 249, 249, 1);
`;

export const lightColorsObject = {
  border: 'rgba(229, 229, 229, 1)',
  'border-active': 'rgba(41, 41, 41, 1)',
  'border-transparent': 'rgba(0, 0, 0, 0.1)',
  field: 'rgba(255, 255, 255, 1)',
  secondary: 'rgba(41, 41, 41, 1)',
  'secondary-active': 'rgba(40, 40, 40, 1)',
  'secondary-hover': 'rgba(37, 37, 37, 1)',
  surface: 'rgba(255, 255, 255, 1)',
  'surface-active': 'rgba(0, 0, 0, 0.15)',
  'surface-disabled': 'rgba(229, 229, 229, 1)',
  'surface-hover': 'rgba(0, 0, 0, 0.07)',
  'surface-hover-transparent': 'rgba(0, 0, 0, 0.1)',
  text: 'rgba(41, 41, 41, 1)',
  'text-contrast': 'rgba(255, 255, 255, 1)',
  'text-disabled': 'rgba(206, 206, 206, 1)',
  'text-placeholder': 'rgba(191, 191, 191, 1)',
  'text-subtle': 'rgba(152, 152, 152, 1)',
  'grey-900': 'rgba(41, 41, 41, 1)',
  'grey-800': 'rgba(101, 101, 101, 1)',
  'grey-700': 'rgba(152, 152, 152, 1)',
  'grey-600': 'rgba(191, 191, 191, 1)',
  'grey-500': 'rgba(206, 206, 206, 1)',
  'grey-400': 'rgba(219, 219, 219, 1)',
  'grey-300': 'rgba(229, 229, 229, 1)',
  'grey-200': 'rgba(238, 238, 238, 1)',
  'grey-100': 'rgba(249, 249, 249, 1)'
};

export const darkColors = css`
  color-scheme: dark;
  --border: rgba(51, 51, 51, 1);
  --border-active: rgba(255, 255, 255, 1);
  --border-transparent: rgba(255, 255, 255, 0.2);
  --field: rgba(41, 41, 41, 1);
  --secondary: rgba(255, 255, 255, 1);
  --secondary-active: rgba(204, 204, 204, 1);
  --secondary-hover: rgba(229, 229, 229, 1);
  --subtle-text: rgba(190, 190, 190, 1);
  --surface: rgba(18, 18, 18, 1);
  --surface-active: rgba(255, 255, 255, 0.2);
  --surface-disabled: rgba(101, 101, 101, 1);
  --surface-hover: rgba(41, 41, 41, 1);
  --surface-hover-transparent: rgba(255, 255, 255, 0.09);
  --text: rgba(253, 253, 253, 1);
  --text-contrast: rgba(18, 18, 18, 1);
  --text-disabled: rgba(152, 152, 152, 1);
  --text-placeholder: rgba(152, 152, 152, 1);
  --grey-900: rgba(249, 249, 249, 1);
  --grey-800: rgba(238, 238, 238, 1);
  --grey-700: rgba(229, 229, 229, 1);
  --grey-600: rgba(219, 219, 219, 1);
  --grey-500: rgba(206, 206, 206, 1);
  --grey-400: rgba(191, 191, 191, 1);
  --grey-300: rgba(152, 152, 152, 1);
  --grey-200: rgba(101, 101, 101, 1);
  --grey-100: rgba(41, 41, 41, 1);
`;

export const darkColorsObject = {
  border: 'rgba(51, 51, 51, 1)',
  'border-active': 'rgba(255, 255, 255, 1)',
  'border-transparent': 'rgba(255, 255, 255, 0.2)',
  field: 'rgba(41, 41, 41, 1)',
  secondary: 'rgba(255, 255, 255, 1)',
  'secondary-active': 'rgba(204, 204, 204, 1)',
  'secondary-hover': 'rgba(229, 229, 229, 1)',
  'subtle-text': 'rgba(190, 190, 190, 1)',
  surface: 'rgba(18, 18, 18, 1)',
  'surface-active': 'rgba(255, 255, 255, 0.2)',
  'surface-disabled': 'rgba(101, 101, 101, 1)',
  'surface-hover': 'rgba(41, 41, 41, 1)',
  'surface-hover-transparent': 'rgba(255, 255, 255, 0.09)',
  text: 'rgba(253, 253, 253, 1)',
  'text-contrast': 'rgba(18, 18, 18, 1)',
  'text-disabled': 'rgba(152, 152, 152, 1)',
  'text-placeholder': 'rgba(152, 152, 152, 1)',
  'grey-900': 'rgba(249, 249, 249, 1)',
  'grey-800': 'rgba(238, 238, 238, 1)',
  'grey-700': 'rgba(229, 229, 229, 1)',
  'grey-600': 'rgba(219, 219, 219, 1)',
  'grey-500': 'rgba(206, 206, 206, 1)',
  'grey-400': 'rgba(191, 191, 191, 1)',
  'grey-300': 'rgba(152, 152, 152, 1)',
  'grey-200': 'rgba(101, 101, 101, 1)',
  'grey-100': 'rgba(41, 41, 41, 1)'
};

export const sentimentColors = css`
  --error: rgba(204, 0, 0, 1);
  --error-surface: rgba(254, 223, 223, 1);
  --info: rgba(0, 102, 204, 1);
  --info-surface: rgba(223, 239, 254, 1);
  --neutral: rgba(101, 101, 101, 1);
  --neutral-surface: rgba(238, 238, 238, 1);
  --primary: rgba(121, 53, 210, 1);
  --primary-active: rgba(109, 48, 189, 1);
  --primary-hover: rgba(109, 48, 189, 1);
  --primary-surface: rgba(230, 219, 243, 1);
  --success: rgba(6, 121, 0, 1);
  --success-surface: rgba(233, 254, 223, 1);
  --warning: rgba(146, 107, 7, 1);
  --warning-surface: rgba(255, 250, 223, 1);
`;

export const sentimentColorsObject = {
  error: 'rgba(204, 0, 0, 1)',
  'error-surface': 'rgba(254, 223, 223, 1)',
  info: 'rgba(0, 102, 204, 1)',
  'info-surface': 'rgba(223, 239, 254, 1)',
  neutral: 'rgba(101, 101, 101, 1)',
  'neutral-surface': 'rgba(238, 238, 238, 1)',
  primary: 'rgba(121, 53, 210, 1)',
  'primary-active': 'rgba(109, 48, 189, 1)',
  'primary-hover': 'rgba(109, 48, 189, 1)',
  'primary-surface': 'rgba(230, 219, 243, 1)',
  success: 'rgba(6, 121, 0, 1)',
  'success-surface': 'rgba(233, 254, 223, 1)',
  warning: 'rgba(146, 107, 7, 1)',
  'warning-surface': 'rgba(255, 250, 223, 1)'
};

export const utilityColors = css`
  --black: rgba(0, 0, 0, 1);
  --focus: rgba(39, 107, 229, 1);
  --grey: rgba(18, 18, 18, 1);
`;

export const utilityColorsObject = {
  black: 'rgba(0, 0, 0, 1)',
  focus: 'rgba(39, 107, 229, 1)',
  grey: 'rgba(18, 18, 18, 1)'
};

export const effectStyles = css`
  --elevation-large: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  --elevation-medium: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  --elevation-small: 0 0 3px 0 rgba(0, 0, 0, 0.1);
`;

export const theme = css`
  [data-theme='light'],
  :root {
    ${lightColors};
  }
  @media (prefers-color-scheme: dark) {
    :root {
      ${darkColors}
    }
  }
  [data-theme='dark'] {
    ${darkColors}
  }
  :root {
    ${sentimentColors}
    ${utilityColors}
    ${effectStyles};
  }
`;
