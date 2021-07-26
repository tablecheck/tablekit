// Forked from https://github.com/smooth-code/xstyled/blob/master/packages/system/src/util.js
import { Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize'; // < 1kb payload overhead when lodash/merge is > 3kb.
import deepmerge from 'deepmerge';

const isDev = process.env.NODE_ENV !== 'production';

export type VariantKeyType = string | number | symbol;

/* istanbul ignore next */
export const identity = (x: unknown): unknown => x;

export const is = (n: unknown): boolean => n !== undefined && n !== null;
export const num = (n: unknown): boolean =>
  typeof n === 'number' && !Number.isNaN(n);
export const string = (n: unknown): boolean =>
  typeof n === 'string' && n !== '';
export const obj = (n: unknown): boolean => typeof n === 'object' && n !== null;
export const func = (n: unknown): boolean => typeof n === 'function';
export const negative = (n: unknown): boolean => num(n) && (n as number) < 0;

export const get = (
  from: undefined | Record<string, unknown> | unknown[],
  path: string
): unknown => {
  const paths = String(path).split('.');
  const pathsLength = paths.length;
  let result: unknown = from;
  for (let i = 0; i < pathsLength; i += 1) {
    if (result === undefined) return result;
    const pathKey = paths[i];
    result = is((result as Record<string, unknown>)[pathKey])
      ? (result as Record<string, unknown>)[pathKey]
      : undefined;
  }
  return result;
};

export const merge = <
  RecordLeft extends Record<string, unknown> = Record<string, unknown>,
  RecordRight extends Record<string, unknown> = Record<string, unknown>
>(
  acc: RecordLeft,
  item: void | null | RecordRight
): RecordLeft | (RecordLeft & RecordRight) => {
  if (!is(item)) {
    return acc;
  }

  // No need to clone deep, it's way faster.
  return deepmerge(acc, item as Record<string, unknown>, {
    clone: false
  }) as RecordLeft & RecordRight;
};

export const warn = (condition: boolean, message: string): void => {
  /* istanbul ignore next */
  if (isDev) {
    if (!condition && console.error) {
      console.error(message);
    }
  }
};

export const cascade = <Return extends unknown>(
  fn: unknown,
  ...args: unknown[]
): Return => {
  if (!func(fn)) return fn as Return;
  // eslint-disable-next-line @typescript-eslint/ban-types
  const next = (fn as Function)(...args);
  return cascade(next, ...args);
};

export const getValue = <
  Return extends CSSInterpolation | unknown,
  Props extends Record<string, unknown> = Record<string, unknown>
>(
  props: Props,
  // this is about the best we can do, sadly there is no good way of typing this
  // https://github.com/microsoft/TypeScript/issues/12290
  path: VariantKeyType,
  initial = {}
): Return => cascade<Return>(get(initial, path.toString()), props);

export const getThemeValue = <
  Return extends CSSInterpolation | unknown,
  Props extends { theme: Theme } = { theme: Theme }
>(
  props: Props,
  // this is about the best we can do, sadly there is no good way of typing this
  // https://github.com/microsoft/TypeScript/issues/12290
  path: VariantKeyType,
  initial = props.theme
): Return =>
  cascade<Return>(
    get(initial as unknown as Record<string, unknown>, path.toString()),
    props
  );
