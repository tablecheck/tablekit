import { css } from '@emotion/react';

import { globalThemeVars as selectGlobalThemeVars } from '../components/Select';

/** @deprecated use `var(--border-radius-small)` */
export const BORDER_RADIUS_SMALL = 4;
/** @deprecated use `var(--border-radius-large)` */
export const BORDER_RADIUS_LARGE = 8;
/** @deprecated use `var(--input-height)` */
export const INPUT_HEIGHT = 48;

/**
 * This scale is used for spacing between elements, usually margin and padding
 * @deprecated use `var(--spacing-l4)`
 */
export const Spacing = {
  L1: '4px',
  L2: '8px',
  L3: '12px',
  L4: '16px',
  L5: '24px',
  L6: '32px',
  L7: '40px',
  L8: '48px'
} as const;

/**
 * z-index list based on NAME, this is easier to manage
 * @deprecated use `var(--zindex-card)`
 */
export const ZIndex = {
  Card: 100,
  Dialog: 200,
  Sidenav: 300,
  Topnav: 310,
  Layer: 400,
  Blanket: 500,
  Modal: 510,
  Flag: 600,
  Spotlight: 700,
  Tooltip: 800
} as const;

export const constants = css`
  :root {
    --border-radius-small: 4px;
    --border-radius-large: 8px;
    --input-height: 48px;
    --spacing-l1: 4px;
    --spacing-l2: 8px;
    --spacing-l3: 12px;
    --spacing-l4: 16px;
    --spacing-l5: 24px;
    --spacing-l6: 32px;
    --spacing-l7: 40px;
    --spacing-l8: 48px;
    --zindex-card: 100;
    --zindex-dialog: 200;
    --zindex-sidenav: 300;
    --zindex-topnav: 310;
    --zindex-layer: 400;
    --zindex-blanket: 500;
    --zindex-modal: 510;
    --zindex-flag: 600;
    --zindex-spotlight: 700;
    --zindex-tooltip: 800;
  }

  ${selectGlobalThemeVars}
`;
