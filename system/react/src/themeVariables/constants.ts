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
    --border-radius-small: ${BORDER_RADIUS_SMALL}px;
    --border-radius-large: ${BORDER_RADIUS_LARGE}px;
    --input-height: ${INPUT_HEIGHT}px;
    --spacing-l1: ${Spacing.L1};
    --spacing-l2: ${Spacing.L2};
    --spacing-l3: ${Spacing.L3};
    --spacing-l4: ${Spacing.L4};
    --spacing-l5: ${Spacing.L5};
    --spacing-l6: ${Spacing.L6};
    --spacing-l7: ${Spacing.L7};
    --spacing-l8: ${Spacing.L8};
    --zindex-card: ${ZIndex.Card};
    --zindex-dialog: ${ZIndex.Dialog};
    --zindex-sidenav: ${ZIndex.Sidenav};
    --zindex-topnav: ${ZIndex.Topnav};
    --zindex-layer: ${ZIndex.Layer};
    --zindex-blanket: ${ZIndex.Blanket};
    --zindex-modal: ${ZIndex.Modal};
    --zindex-flag: ${ZIndex.Flag};
    --zindex-spotlight: ${ZIndex.Spotlight};
    --zindex-tooltip: ${ZIndex.Tooltip};
  }

  ${selectGlobalThemeVars}
`;
