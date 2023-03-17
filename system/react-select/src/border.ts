import { CSSObject } from '@emotion/react';

export enum BorderRadii {
  All,
  Top,
  Right,
  Bottom,
  Left,
  TopRight,
  TopLeft,
  BottomRight,
  BottomLeft
}
const borderRadius = `var(--border-radius-small)`;
function formatBorderRadius(
  ...positions: ('TopLeft' | 'TopRight' | 'BottomRight' | 'BottomLeft')[]
) {
  return `${positions.includes('TopLeft') ? borderRadius : 0} ${
    positions.includes('TopRight') ? borderRadius : 0
  } ${positions.includes('BottomRight') ? borderRadius : 0} ${
    positions.includes('BottomLeft') ? borderRadius : 0
  }`;
}
export function getBorderRadius(
  isRtl: boolean,
  borderRadii: BorderRadii
): string {
  const leftSide = isRtl ? 'Right' : 'Left';
  const rightSide = isRtl ? 'Left' : 'Right';
  switch (borderRadii) {
    case BorderRadii.Top:
      return formatBorderRadius(`Top${leftSide}`, `Top${rightSide}`);
    case BorderRadii.Bottom:
      return formatBorderRadius(`Bottom${leftSide}`, `Bottom${rightSide}`);
    case BorderRadii.Right:
      return formatBorderRadius(`Top${rightSide}`, `Bottom${rightSide}`);
    case BorderRadii.Left:
      return formatBorderRadius(`Top${leftSide}`, `Bottom${leftSide}`);
    case BorderRadii.TopRight:
      return formatBorderRadius(`Top${rightSide}`);
    case BorderRadii.TopLeft:
      return formatBorderRadius(`Top${leftSide}`);
    case BorderRadii.BottomRight:
      return formatBorderRadius(`Bottom${rightSide}`);
    case BorderRadii.BottomLeft:
      return formatBorderRadius(`Bottom${leftSide}`);
    case BorderRadii.All:
    default:
      return borderRadius;
  }
}

export enum BorderSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

function capitalize(str: string): string {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}

/**
 *
 * @param isRtl
 * @param sides
 * @param color - if omitted will only apply transparent color to the non defined edges
 */
export function getBorderColor(
  isRtl: boolean,
  sides: BorderSide[],
  color?: string
): CSSObject {
  if (sides.length === 0) return { borderColor: 'transparent' };
  if (sides.length === 4) return color ? { borderColor: color } : {};
  const horizontalSides = [BorderSide.Right, BorderSide.Left];
  if (isRtl) horizontalSides.reverse();
  const [right, left] = horizontalSides;
  return [BorderSide.Top, right, BorderSide.Bottom, left].reduce(
    (styles, side) => {
      if (!sides.includes(side)) {
        return {
          ...styles,
          [`border${capitalize(side)}Color`]: 'transparent'
        };
      }
      if (color) {
        return {
          ...styles,
          [`border${capitalize(side)}Color`]: color
        };
      }
      return styles;
    },
    {} as Record<string, string>
  );
}
