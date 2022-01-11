import { css, Theme } from '@emotion/react';
import { SerializedStyles, Interpolation } from '@emotion/serialize';
import isObject from 'lodash/isObject';

import { ifRtl } from './ifRtl';
import { propsEvalOrReturn } from './propsEvalOrReturn';

type SpacingDimension = string | number | undefined;

export type SpacingType = {
  bottom?: SpacingDimension;
  left?: SpacingDimension;
  right?: SpacingDimension;
  top?: SpacingDimension;
};

type SpacingArgument<Props extends { theme: Theme } = { theme: Theme }> =
  | SpacingType
  | string
  | number
  | Interpolation<Props>;

export function parseSpacing(value?: SpacingDimension): string {
  if (value === undefined) return 'inherit';
  if (typeof value === 'string') return value;
  return `${value}px`;
}

function spacing<Props extends { theme: Theme } = { theme: Theme }>(
  property: 'margin' | 'padding',
  argumentSpacingValue: SpacingArgument<Props>
): (props: Props) => SerializedStyles {
  return (props: Props) => {
    const spacingValue = propsEvalOrReturn<
      SpacingType | string | number,
      Props
    >(argumentSpacingValue, props);
    let top: SpacingDimension;
    let bottom: SpacingDimension;
    let left: SpacingDimension;
    let right: SpacingDimension;
    if (!isObject(spacingValue)) {
      top = spacingValue;
      bottom = spacingValue;
      left = spacingValue;
      right = spacingValue;
    } else {
      ({ top, bottom, right, left } = spacingValue as SpacingType);
    }
    const args = [];
    if (top === bottom && bottom === right && right === left) {
      // this is to stop the babel plugin from re-writing the call with classes etc
      args.push(`${property}:${parseSpacing(top)};`);
    } else {
      const { left: leftSpacing, right: rightSpacing } = ifRtl<
        { left: SpacingDimension; right: SpacingDimension },
        Props
      >(
        { left: right, right: left },
        { left, right }
      )(props);
      if (top !== undefined) {
        args.push(`${property}-top:${parseSpacing(top)};`);
      }
      if (rightSpacing !== undefined) {
        args.push(`${property}-right:${parseSpacing(rightSpacing)};`);
      }
      if (bottom !== undefined) {
        args.push(`${property}-bottom:${parseSpacing(bottom)};`);
      }
      if (leftSpacing !== undefined) {
        args.push(`${property}-left:${parseSpacing(leftSpacing)};`);
      }
    }

    return css(...args);
  };
}

export function padding<Props extends { theme: Theme } = { theme: Theme }>(
  value: SpacingArgument<Props>
): (props: Props) => SerializedStyles {
  return spacing('padding', value);
}

export function margin<Props extends { theme: Theme } = { theme: Theme }>(
  value: SpacingArgument<Props>
): (props: Props) => SerializedStyles {
  return spacing('margin', value);
}
