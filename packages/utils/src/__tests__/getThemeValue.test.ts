import { Theme } from '@emotion/react';

import { getThemeValue as testFunc } from '../getThemeValue';

const getThemeValue = testFunc as any;

describe('@tablecheck/tablekit-Utils getThemeValue', () => {
  test('should return value on theme', () => {
    expect(getThemeValue('test')({ theme: { test: 123 } })).toEqual(123);
  });

  test('should return nested value on theme', () => {
    expect(
      getThemeValue('test.inner')({ theme: { test: { inner: 123 } } })
    ).toEqual(123);
  });

  test('should handle prop getter on value', () => {
    expect(
      getThemeValue('test.inner')({
        theme: { test: { inner: () => 123 } }
      })
    ).toEqual(123);
  });

  test('should handle prop getter on defaultValue', () => {
    expect(
      getThemeValue(
        'not-key',
        (p: { theme: { test: { inner: number } } }) => p.theme.test.inner
      )({
        theme: { test: { inner: 123 } }
      })
    ).toEqual(123);
  });

  test('should return default value when not on theme', () => {
    expect(getThemeValue('test', 123)({ theme: {} })).toEqual(123);
  });

  test('should not error and return undefined on blank theme', () => {
    expect(getThemeValue('test')({} as { theme: Theme })).toBeUndefined();
  });
});
