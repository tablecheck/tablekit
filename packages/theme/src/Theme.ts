import { CSSObject } from '@emotion/styled';

/**
 * FieldHeight are used to ensure buttons, inputs, selects and the like all
 * use consistent heights if put on a horizontal line
 */
export enum FieldHeight {
  Regular = '40px',
  Regular2 = '48px',
  Large = '60px',
  Small = '32px'
}

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
 * Standard sizes used for component sizing
 */
export enum Size {
  XSmall = 'xsmall',
  Small = 'small',
  Regular = 'regular',
  Regular2 = 'regular2',
  Large = 'large',
  XLarge = 'xlarge',
  XXLarge = 'xxlarge'
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

export const BORDER_RADIUS = 8;

export const DEPTH = {
  RAISED: {
    boxShadow:
      '-3px 0px 4px -3px rgba(0, 0, 0, 0.1), 3px 0px 4px -3px rgba(0, 0, 0, 0.1), 0px 3px 4px -3px rgba(0, 0, 0, 0.1)'
  },
  OVERLAY: {
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)'
  },
  FIXED: {
    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.1)'
  },
  FLOAT: {
    boxShadow: '0px 6px 16px 0px rgba(0, 0, 0, 0.1)'
  }
};

enum SizeLevel {
  L1 = 'L1',
  L2 = 'L2',
  L3 = 'L3',
  L4 = 'L4',
  L5 = 'L5',
  L6 = 'L6',
  L7 = 'L7',
  L8 = 'L8',
  L9 = 'L9',
  L10 = 'L10'
}

interface Typography extends CSSObject {
  fontSize: string;
  lineHeight: string;
}

/**
 * @deprecated Use `MobileTypography` or `DesktopTypography` from '@tablecheck/tablekit-typography'
 */
export const TYPOGRAPHY: {
  [key in SizeLevel]: Typography;
} = {
  L1: {
    fontSize: '13px',
    lineHeight: '20px'
  },
  L2: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  L3: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  L4: {
    fontSize: '18px',
    lineHeight: '24px'
  },
  L5: {
    fontSize: '22px',
    lineHeight: '28px'
  },
  L6: {
    fontSize: '22px',
    lineHeight: '28px'
  },
  L7: {
    fontSize: '32px',
    lineHeight: '40px'
  },
  L8: {
    fontSize: '32px',
    lineHeight: '40px'
  },
  L9: {
    fontSize: '44px',
    lineHeight: '52px'
  },
  L10: {
    fontSize: '44px',
    lineHeight: '52px'
  }
};
