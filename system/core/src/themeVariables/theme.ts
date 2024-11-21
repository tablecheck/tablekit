// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { css, themedCss } from '../utils';

/**
 * DO NOT EDIT; File is generated from figma, see './updateFromFigma.ts' for update instructions
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
  --border: var(--grey-300);
  --border-active: var(--grey-900);
  --border-transparent: rgba(0, 0, 0, 0.1);
  --brand-primary: var(--purple-600);
  --brand-primary-active: var(--purple-500);
  --brand-primary-hover: var(--purple-500);
  --brand-primary-text: var(--white);
  --brand-secondary: var(--purple-150);
  --brand-secondary-active: var(--purple-200);
  --brand-secondary-hover: var(--purple-200);
  --error: rgba(204, 0, 0, 1);
  --error-border: var(--danger-200);
  --error-surface: var(--danger-100);
  --error-surface-hover: rgba(254, 205, 205, 1);
  --error-text: var(--danger-700);
  --field: var(--white);
  --focus: rgba(0, 23, 231, 1);
  --info: rgba(0, 102, 204, 1);
  --info-border: var(--info-300);
  --info-surface: var(--info-100);
  --info-surface-hover: rgba(205, 229, 254, 1);
  --info-text: var(--info-700);
  --link: var(--purple-600);
  --link-disabled: var(--grey-500);
  --link-hover: var(--purple-500);
  --link-visited: rgba(200, 0, 204, 1);
  --neutral: var(--grey-800);
  --neutral-border: var(--grey-400);
  --neutral-surface: var(--grey-200);
  --neutral-surface-hover: var(--grey-300);
  --neutral-text: var(--grey-800);
  --orange-border: var(--orange-300);
  --orange-surface: var(--orange-100);
  --orange-surface-hover: rgba(252, 230, 187, 1);
  --orange-text: var(--orange-700);
  --purple-border: var(--purple-200);
  --purple-surface: var(--purple-100);
  --purple-surface-hover: rgba(240, 198, 254, 1);
  --purple-text: var(--purple-700);
  --success: rgba(6, 121, 0, 1);
  --success-border: var(--success-300);
  --success-surface: var(--success-100);
  --success-surface-hover: rgba(220, 254, 205, 1);
  --success-text: var(--success-700);
  --surface: var(--white);
  --surface-active: var(--grey-200);
  --surface-disabled: var(--grey-150);
  --surface-hover: var(--grey-200);
  --surface-hover-transparent: rgba(0, 0, 0, 0.04);
  --surface-low: var(--grey-50);
  --surface-low-active: var(--purple-50);
  --surface-low-hover: var(--grey-200);
  --surface-low-hover-transparent: rgba(0, 0, 0, 0.03);
  --surface-raised: var(--grey-100);
  --surface-raised-active: var(--purple-50);
  --surface-raised-hover: var(--grey-200);
  --surface-raised-hover-transparent: rgba(0, 0, 0, 0.03);
  --surface-secondary: var(--grey-900);
  --surface-secondary-active: var(--grey-800);
  --surface-secondary-hover: var(--grey-800);
  --text: var(--grey-900);
  --text-active: var(--purple-700);
  --text-disabled: var(--grey-600);
  --text-placeholder: var(--grey-700);
  --text-secondary: var(--white);
  --text-subtle: var(--grey-750);
  --toggle-disabled: var(--grey-200);
  --toggle-inactive: var(--grey-500);
  --warning: rgba(232, 183, 47, 1);
  --warning-border: var(--warning-300);
  --warning-surface: var(--warning-100);
  --warning-surface-hover: rgba(255, 248, 212, 1);
  --warning-text: var(--warning-700);
`;

export const lightColorsObject = {
  border: 'var(--grey-300)',
  'border-active': 'var(--grey-900)',
  'border-transparent': 'rgba(0, 0, 0, 0.1)',
  'brand-primary': 'var(--purple-600)',
  'brand-primary-active': 'var(--purple-500)',
  'brand-primary-hover': 'var(--purple-500)',
  'brand-primary-text': 'var(--white)',
  'brand-secondary': 'var(--purple-150)',
  'brand-secondary-active': 'var(--purple-200)',
  'brand-secondary-hover': 'var(--purple-200)',
  error: 'rgba(204, 0, 0, 1)',
  'error-border': 'var(--danger-200)',
  'error-surface': 'var(--danger-100)',
  'error-surface-hover': 'rgba(254, 205, 205, 1)',
  'error-text': 'var(--danger-700)',
  field: 'var(--white)',
  focus: 'rgba(0, 23, 231, 1)',
  info: 'rgba(0, 102, 204, 1)',
  'info-border': 'var(--info-300)',
  'info-surface': 'var(--info-100)',
  'info-surface-hover': 'rgba(205, 229, 254, 1)',
  'info-text': 'var(--info-700)',
  link: 'var(--purple-600)',
  'link-disabled': 'var(--grey-500)',
  'link-hover': 'var(--purple-500)',
  'link-visited': 'rgba(200, 0, 204, 1)',
  neutral: 'var(--grey-800)',
  'neutral-border': 'var(--grey-400)',
  'neutral-surface': 'var(--grey-200)',
  'neutral-surface-hover': 'var(--grey-300)',
  'neutral-text': 'var(--grey-800)',
  'orange-border': 'var(--orange-300)',
  'orange-surface': 'var(--orange-100)',
  'orange-surface-hover': 'rgba(252, 230, 187, 1)',
  'orange-text': 'var(--orange-700)',
  'purple-border': 'var(--purple-200)',
  'purple-surface': 'var(--purple-100)',
  'purple-surface-hover': 'rgba(240, 198, 254, 1)',
  'purple-text': 'var(--purple-700)',
  success: 'rgba(6, 121, 0, 1)',
  'success-border': 'var(--success-300)',
  'success-surface': 'var(--success-100)',
  'success-surface-hover': 'rgba(220, 254, 205, 1)',
  'success-text': 'var(--success-700)',
  surface: 'var(--white)',
  'surface-active': 'var(--grey-200)',
  'surface-disabled': 'var(--grey-150)',
  'surface-hover': 'var(--grey-200)',
  'surface-hover-transparent': 'rgba(0, 0, 0, 0.04)',
  'surface-low': 'var(--grey-50)',
  'surface-low-active': 'var(--purple-50)',
  'surface-low-hover': 'var(--grey-200)',
  'surface-low-hover-transparent': 'rgba(0, 0, 0, 0.03)',
  'surface-raised': 'var(--grey-100)',
  'surface-raised-active': 'var(--purple-50)',
  'surface-raised-hover': 'var(--grey-200)',
  'surface-raised-hover-transparent': 'rgba(0, 0, 0, 0.03)',
  'surface-secondary': 'var(--grey-900)',
  'surface-secondary-active': 'var(--grey-800)',
  'surface-secondary-hover': 'var(--grey-800)',
  text: 'var(--grey-900)',
  'text-active': 'var(--purple-700)',
  'text-disabled': 'var(--grey-600)',
  'text-placeholder': 'var(--grey-700)',
  'text-secondary': 'var(--white)',
  'text-subtle': 'var(--grey-750)',
  'toggle-disabled': 'var(--grey-200)',
  'toggle-inactive': 'var(--grey-500)',
  warning: 'rgba(232, 183, 47, 1)',
  'warning-border': 'var(--warning-300)',
  'warning-surface': 'var(--warning-100)',
  'warning-surface-hover': 'rgba(255, 248, 212, 1)',
  'warning-text': 'var(--warning-700)'
};

export const darkColors = css`
  --border: var(--grey-850);
  --border-active: var(--white);
  --border-transparent: rgba(255, 255, 255, 0.17);
  --brand-primary: var(--purple-600);
  --brand-primary-active: var(--purple-700);
  --brand-primary-hover: var(--purple-700);
  --brand-primary-text: var(--white);
  --brand-secondary: var(--purple-800);
  --brand-secondary-active: var(--purple-900);
  --brand-secondary-hover: var(--purple-900);
  --error: rgba(239, 72, 72, 1);
  --error-border: var(--danger-900);
  --error-surface: var(--danger-700);
  --error-surface-hover: rgba(159, 0, 0, 1);
  --error-text: var(--danger-100);
  --field: var(--grey-900);
  --focus: rgba(104, 119, 253, 1);
  --info: rgba(72, 155, 239, 1);
  --info-border: var(--info-900);
  --info-surface: var(--info-700);
  --info-surface-hover: rgba(0, 88, 175, 1);
  --info-text: var(--info-100);
  --link: var(--purple-300);
  --link-disabled: var(--grey-700);
  --link-hover: var(--purple-400);
  --link-visited: rgba(181, 11, 215, 1);
  --neutral: var(--grey-750);
  --neutral-border: var(--grey-900);
  --neutral-surface: var(--grey-850);
  --neutral-surface-hover: var(--grey-900);
  --neutral-text: var(--grey-400);
  --orange-border: var(--orange-800);
  --orange-surface: var(--orange-700);
  --orange-surface-hover: rgba(197, 109, 10, 1);
  --orange-text: var(--orange-100);
  --purple-border: var(--purple-800);
  --purple-surface: var(--purple-700);
  --purple-surface-hover: rgba(136, 8, 182, 1);
  --purple-text: var(--purple-100);
  --success: rgba(20, 175, 0, 1);
  --success-border: var(--success-900);
  --success-surface: var(--success-700);
  --success-surface-hover: rgba(6, 121, 0, 1);
  --success-text: var(--success-100);
  --surface: var(--grey-950);
  --surface-active: var(--grey-900);
  --surface-disabled: var(--grey-800);
  --surface-hover: var(--grey-900);
  --surface-hover-transparent: rgba(255, 255, 255, 0.05);
  --surface-low: var(--grey);
  --surface-low-active: var(--purple-900);
  --surface-low-hover: var(--grey-900);
  --surface-low-hover-transparent: rgba(255, 255, 255, 0.05);
  --surface-raised: var(--grey-900);
  --surface-raised-active: var(--purple-900);
  --surface-raised-hover: var(--grey-800);
  --surface-raised-hover-transparent: rgba(255, 255, 255, 0.2);
  --surface-secondary: var(--grey-800);
  --surface-secondary-active: var(--grey-900);
  --surface-secondary-hover: var(--grey-900);
  --text: var(--grey-50);
  --text-active: var(--purple-150);
  --text-disabled: var(--grey-700);
  --text-placeholder: var(--grey-700);
  --text-secondary: var(--grey-50);
  --text-subtle: var(--grey-400);
  --toggle-disabled: var(--grey-850);
  --toggle-inactive: var(--grey-750);
  --warning: rgba(239, 194, 72, 1);
  --warning-border: var(--warning-900);
  --warning-surface: var(--warning-700);
  --warning-surface-hover: rgba(159, 116, 0, 1);
  --warning-text: var(--warning-100);
`;

export const darkColorsObject = {
  border: 'var(--grey-850)',
  'border-active': 'var(--white)',
  'border-transparent': 'rgba(255, 255, 255, 0.17)',
  'brand-primary': 'var(--purple-600)',
  'brand-primary-active': 'var(--purple-700)',
  'brand-primary-hover': 'var(--purple-700)',
  'brand-primary-text': 'var(--white)',
  'brand-secondary': 'var(--purple-800)',
  'brand-secondary-active': 'var(--purple-900)',
  'brand-secondary-hover': 'var(--purple-900)',
  error: 'rgba(239, 72, 72, 1)',
  'error-border': 'var(--danger-900)',
  'error-surface': 'var(--danger-700)',
  'error-surface-hover': 'rgba(159, 0, 0, 1)',
  'error-text': 'var(--danger-100)',
  field: 'var(--grey-900)',
  focus: 'rgba(104, 119, 253, 1)',
  info: 'rgba(72, 155, 239, 1)',
  'info-border': 'var(--info-900)',
  'info-surface': 'var(--info-700)',
  'info-surface-hover': 'rgba(0, 88, 175, 1)',
  'info-text': 'var(--info-100)',
  link: 'var(--purple-300)',
  'link-disabled': 'var(--grey-700)',
  'link-hover': 'var(--purple-400)',
  'link-visited': 'rgba(181, 11, 215, 1)',
  neutral: 'var(--grey-750)',
  'neutral-border': 'var(--grey-900)',
  'neutral-surface': 'var(--grey-850)',
  'neutral-surface-hover': 'var(--grey-900)',
  'neutral-text': 'var(--grey-400)',
  'orange-border': 'var(--orange-800)',
  'orange-surface': 'var(--orange-700)',
  'orange-surface-hover': 'rgba(197, 109, 10, 1)',
  'orange-text': 'var(--orange-100)',
  'purple-border': 'var(--purple-800)',
  'purple-surface': 'var(--purple-700)',
  'purple-surface-hover': 'rgba(136, 8, 182, 1)',
  'purple-text': 'var(--purple-100)',
  success: 'rgba(20, 175, 0, 1)',
  'success-border': 'var(--success-900)',
  'success-surface': 'var(--success-700)',
  'success-surface-hover': 'rgba(6, 121, 0, 1)',
  'success-text': 'var(--success-100)',
  surface: 'var(--grey-950)',
  'surface-active': 'var(--grey-900)',
  'surface-disabled': 'var(--grey-800)',
  'surface-hover': 'var(--grey-900)',
  'surface-hover-transparent': 'rgba(255, 255, 255, 0.05)',
  'surface-low': 'var(--grey)',
  'surface-low-active': 'var(--purple-900)',
  'surface-low-hover': 'var(--grey-900)',
  'surface-low-hover-transparent': 'rgba(255, 255, 255, 0.05)',
  'surface-raised': 'var(--grey-900)',
  'surface-raised-active': 'var(--purple-900)',
  'surface-raised-hover': 'var(--grey-800)',
  'surface-raised-hover-transparent': 'rgba(255, 255, 255, 0.2)',
  'surface-secondary': 'var(--grey-800)',
  'surface-secondary-active': 'var(--grey-900)',
  'surface-secondary-hover': 'var(--grey-900)',
  text: 'var(--grey-50)',
  'text-active': 'var(--purple-150)',
  'text-disabled': 'var(--grey-700)',
  'text-placeholder': 'var(--grey-700)',
  'text-secondary': 'var(--grey-50)',
  'text-subtle': 'var(--grey-400)',
  'toggle-disabled': 'var(--grey-850)',
  'toggle-inactive': 'var(--grey-750)',
  warning: 'rgba(239, 194, 72, 1)',
  'warning-border': 'var(--warning-900)',
  'warning-surface': 'var(--warning-700)',
  'warning-surface-hover': 'rgba(159, 116, 0, 1)',
  'warning-text': 'var(--warning-100)'
};

export const utilityColors = css`
  --black: rgba(0, 0, 0, 1);
  --brand-static: rgba(121, 53, 210, 1);
  --danger-100: rgba(254, 223, 223, 1);
  --danger-200: rgba(245, 206, 206, 1);
  --danger-300: rgba(238, 171, 171, 1);
  --danger-500: rgba(226, 112, 112, 1);
  --danger-600: rgba(218, 70, 70, 1);
  --danger-700: rgba(204, 0, 0, 1);
  --danger-800: rgba(175, 0, 0, 1);
  --danger-900: rgba(136, 3, 3, 1);
  --grey: rgba(26, 26, 26, 1);
  --grey-100: rgba(249, 249, 249, 1);
  --grey-150: rgba(247, 247, 247, 1);
  --grey-200: rgba(238, 238, 238, 1);
  --grey-300: rgba(229, 229, 229, 1);
  --grey-400: rgba(219, 219, 219, 1);
  --grey-50: rgba(253, 253, 253, 1);
  --grey-500: rgba(206, 206, 206, 1);
  --grey-600: rgba(191, 191, 191, 1);
  --grey-700: rgba(152, 152, 152, 1);
  --grey-725: rgba(132, 132, 132, 1);
  --grey-750: rgba(102, 102, 102, 1);
  --grey-800: rgba(75, 75, 75, 1);
  --grey-850: rgba(58, 58, 58, 1);
  --grey-900: rgba(41, 41, 41, 1);
  --grey-950: rgba(30, 30, 30, 1);
  --info-100: rgba(223, 239, 254, 1);
  --info-200: rgba(203, 227, 249, 1);
  --info-300: rgba(182, 214, 245, 1);
  --info-500: rgba(127, 180, 233, 1);
  --info-600: rgba(55, 136, 216, 1);
  --info-700: rgba(0, 102, 204, 1);
  --info-800: rgba(0, 82, 163, 1);
  --info-900: rgba(0, 61, 122, 1);
  --orange-100: rgba(255, 237, 202, 1);
  --orange-200: rgba(250, 222, 178, 1);
  --orange-300: rgba(239, 208, 161, 1);
  --orange-500: rgba(210, 146, 73, 1);
  --orange-600: rgba(191, 125, 51, 1);
  --orange-700: rgba(175, 93, 0, 1);
  --orange-800: rgba(140, 74, 0, 1);
  --orange-900: rgba(114, 60, 0, 1);
  --purple-100: rgba(241, 229, 255, 1);
  --purple-150: rgba(226, 204, 255, 1);
  --purple-200: rgba(220, 193, 255, 1);
  --purple-300: rgba(176, 128, 238, 1);
  --purple-400: rgba(165, 110, 236, 1);
  --purple-50: rgba(247, 239, 255, 1);
  --purple-500: rgba(159, 96, 241, 1);
  --purple-600: rgba(142, 74, 231, 1);
  --purple-700: rgba(120, 50, 210, 1);
  --purple-800: rgba(84, 38, 142, 1);
  --purple-900: rgba(61, 31, 98, 1);
  --purple-950: rgba(49, 25, 78, 1);
  --success-100: rgba(233, 254, 223, 1);
  --success-200: rgba(221, 247, 211, 1);
  --success-300: rgba(203, 236, 193, 1);
  --success-500: rgba(105, 178, 97, 1);
  --success-600: rgba(65, 155, 58, 1);
  --success-700: rgba(6, 121, 0, 1);
  --success-800: rgba(5, 103, 0, 1);
  --success-900: rgba(4, 85, 0, 1);
  --warning-100: rgba(255, 250, 229, 1);
  --warning-200: rgba(247, 238, 204, 1);
  --warning-300: rgba(239, 229, 191, 1);
  --warning-500: rgba(231, 192, 92, 1);
  --warning-600: rgba(197, 158, 59, 1);
  --warning-700: rgba(146, 107, 7, 1);
  --warning-800: rgba(129, 85, 0, 1);
  --warning-900: rgba(115, 68, 0, 1);
  --white: rgba(255, 255, 255, 1);
`;

export const utilityColorsObject = {
  black: 'rgba(0, 0, 0, 1)',
  'brand-static': 'rgba(121, 53, 210, 1)',
  'danger-100': 'rgba(254, 223, 223, 1)',
  'danger-200': 'rgba(245, 206, 206, 1)',
  'danger-300': 'rgba(238, 171, 171, 1)',
  'danger-500': 'rgba(226, 112, 112, 1)',
  'danger-600': 'rgba(218, 70, 70, 1)',
  'danger-700': 'rgba(204, 0, 0, 1)',
  'danger-800': 'rgba(175, 0, 0, 1)',
  'danger-900': 'rgba(136, 3, 3, 1)',
  grey: 'rgba(26, 26, 26, 1)',
  'grey-100': 'rgba(249, 249, 249, 1)',
  'grey-150': 'rgba(247, 247, 247, 1)',
  'grey-200': 'rgba(238, 238, 238, 1)',
  'grey-300': 'rgba(229, 229, 229, 1)',
  'grey-400': 'rgba(219, 219, 219, 1)',
  'grey-50': 'rgba(253, 253, 253, 1)',
  'grey-500': 'rgba(206, 206, 206, 1)',
  'grey-600': 'rgba(191, 191, 191, 1)',
  'grey-700': 'rgba(152, 152, 152, 1)',
  'grey-725': 'rgba(132, 132, 132, 1)',
  'grey-750': 'rgba(102, 102, 102, 1)',
  'grey-800': 'rgba(75, 75, 75, 1)',
  'grey-850': 'rgba(58, 58, 58, 1)',
  'grey-900': 'rgba(41, 41, 41, 1)',
  'grey-950': 'rgba(30, 30, 30, 1)',
  'info-100': 'rgba(223, 239, 254, 1)',
  'info-200': 'rgba(203, 227, 249, 1)',
  'info-300': 'rgba(182, 214, 245, 1)',
  'info-500': 'rgba(127, 180, 233, 1)',
  'info-600': 'rgba(55, 136, 216, 1)',
  'info-700': 'rgba(0, 102, 204, 1)',
  'info-800': 'rgba(0, 82, 163, 1)',
  'info-900': 'rgba(0, 61, 122, 1)',
  'orange-100': 'rgba(255, 237, 202, 1)',
  'orange-200': 'rgba(250, 222, 178, 1)',
  'orange-300': 'rgba(239, 208, 161, 1)',
  'orange-500': 'rgba(210, 146, 73, 1)',
  'orange-600': 'rgba(191, 125, 51, 1)',
  'orange-700': 'rgba(175, 93, 0, 1)',
  'orange-800': 'rgba(140, 74, 0, 1)',
  'orange-900': 'rgba(114, 60, 0, 1)',
  'purple-100': 'rgba(241, 229, 255, 1)',
  'purple-150': 'rgba(226, 204, 255, 1)',
  'purple-200': 'rgba(220, 193, 255, 1)',
  'purple-300': 'rgba(176, 128, 238, 1)',
  'purple-400': 'rgba(165, 110, 236, 1)',
  'purple-50': 'rgba(247, 239, 255, 1)',
  'purple-500': 'rgba(159, 96, 241, 1)',
  'purple-600': 'rgba(142, 74, 231, 1)',
  'purple-700': 'rgba(120, 50, 210, 1)',
  'purple-800': 'rgba(84, 38, 142, 1)',
  'purple-900': 'rgba(61, 31, 98, 1)',
  'purple-950': 'rgba(49, 25, 78, 1)',
  'success-100': 'rgba(233, 254, 223, 1)',
  'success-200': 'rgba(221, 247, 211, 1)',
  'success-300': 'rgba(203, 236, 193, 1)',
  'success-500': 'rgba(105, 178, 97, 1)',
  'success-600': 'rgba(65, 155, 58, 1)',
  'success-700': 'rgba(6, 121, 0, 1)',
  'success-800': 'rgba(5, 103, 0, 1)',
  'success-900': 'rgba(4, 85, 0, 1)',
  'warning-100': 'rgba(255, 250, 229, 1)',
  'warning-200': 'rgba(247, 238, 204, 1)',
  'warning-300': 'rgba(239, 229, 191, 1)',
  'warning-500': 'rgba(231, 192, 92, 1)',
  'warning-600': 'rgba(197, 158, 59, 1)',
  'warning-700': 'rgba(146, 107, 7, 1)',
  'warning-800': 'rgba(129, 85, 0, 1)',
  'warning-900': 'rgba(115, 68, 0, 1)',
  white: 'rgba(255, 255, 255, 1)'
};

export const spacing = css`
  --spacing-l1: 4px;
  --spacing-l2: 8px;
  --spacing-l3: 12px;
  --spacing-l4: 16px;
  --spacing-l5: 24px;
  --spacing-l6: 32px;
  --spacing-l7: 40px;
  --spacing-l8: 48px;
`;

export const spacingObject = {
  'spacing-l1': 4,
  'spacing-l2': 8,
  'spacing-l3': 12,
  'spacing-l4': 16,
  'spacing-l5': 24,
  'spacing-l6': 32,
  'spacing-l7': 40,
  'spacing-l8': 48
};

export const borderRadius = css`
  --border-radius-full: 999px;
  --border-radius-large: 8px;
  --border-radius-micro: 2px;
  --border-radius-small: 4px;
`;

export const borderRadiusObject = {
  'border-radius-full': 999,
  'border-radius-large': 8,
  'border-radius-micro': 2,
  'border-radius-small': 4
};

export const lightEffectStyles = css`
  --elevation-large: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  --elevation-medium: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  --elevation-small: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
`;

export const darkEffectStyles = css`
  --elevation-large: 0px 0px 12px 0px rgba(0, 0, 0, 0.8);
  --elevation-medium: 0px 0px 6px 0px rgba(0, 0, 0, 0.8);
  --elevation-small: 0px 0px 3px 0px rgba(0, 0, 0, 0.8);
`;

export const theme = css`
  :root {
    ${spacing}
    ${borderRadius}
    ${utilityColors}
  }
  ${themedCss({
    selector: '',
    light: css`
      ${lightColors};
      ${lightEffectStyles}
    `,
    dark: css`
      ${darkColors};
      ${darkEffectStyles}
    `
  })}
`;
