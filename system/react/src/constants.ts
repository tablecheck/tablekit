export { FontWeight } from './fonts/weights';

export const BORDER_RADIUS_SMALL = 4;
export const BORDER_RADIUS_LARGE = 8;
export const INPUT_HEIGHT = 48;

/**
 * This scale is used for spacing between elements, usually margin and padding
 */
export enum Spacing {
  L1 = '4px',
  L2 = '8px',
  L3 = '12px',
  L4 = '16px',
  L5 = '24px',
  L6 = '32px',
  L7 = '40px',
  L8 = '48px'
}

/**
 * z-index list based on NAME, this is easier to manage
 */
export enum ZIndex {
  Card = 100,
  Dialog = 200,
  Sidenav = 300,
  Topnav = 310,
  Layer = 400,
  Blanket = 500,
  Modal = 510,
  Flag = 600,
  Spotlight = 700,
  Tooltip = 800
}
