import {
  is,
  num,
  string,
  obj,
  func,
  negative,
  get,
  merge,
  cascade,
  getThemeValue
} from '../variantUtils';

describe('@tablecheck/tablekit-Utils variantUtils', () => {
  describe('#is', () => {
    test('should test if a value is not undefined and not null', () => {
      expect(is(undefined)).toBe(false);
      expect(is(null)).toBe(false);
      expect(is(0)).toBe(true);
      expect(is('')).toBe(true);
    });
  });

  describe('#num', () => {
    test('should test if a value is a valid number', () => {
      expect(num(undefined)).toBe(false);
      expect(num(null)).toBe(false);
      expect(num('')).toBe(false);
      expect(num('1')).toBe(false);
      expect(num(NaN)).toBe(false);
      expect(num(0)).toBe(true);
      expect(num(1)).toBe(true);
    });
  });

  describe('#string', () => {
    test('should test if a value is a non-empty string', () => {
      expect(string(undefined)).toBe(false);
      expect(string(null)).toBe(false);
      expect(string(1)).toBe(false);
      expect(string({})).toBe(false);
      expect(string('')).toBe(false);
      expect(string('1')).toBe(true);
    });
  });

  describe('#obj', () => {
    test('should test if a value is a plain object', () => {
      expect(obj(undefined)).toBe(false);
      expect(obj(null)).toBe(false);
      expect(obj({})).toBe(true);
      expect(obj([])).toBe(true);
    });
  });

  describe('#func', () => {
    test('should test if a value is a function', () => {
      expect(func(undefined)).toBe(false);
      expect(func(null)).toBe(false);
      expect(func({})).toBe(false);
      expect(func([])).toBe(false);
      expect(func(() => {})).toBe(true);
    });
  });

  describe('#negative', () => {
    test('should test if a value is negative', () => {
      expect(negative(undefined)).toBe(false);
      expect(negative(null)).toBe(false);
      expect(negative([])).toBe(false);
      expect(negative(() => {})).toBe(false);
      expect(negative('0')).toBe(false);
      expect(negative('-1')).toBe(false);
      expect(negative(0)).toBe(false);
      expect(negative(1)).toBe(false);
      expect(negative(-1)).toBe(true);
    });
  });

  describe('#get', () => {
    test('should get a value in an object', () => {
      expect(get({ foo: 'bar' }, 'foo')).toBe('bar');
      expect(get({ foo: 'bar' }, 'xxx')).toBeUndefined();
      expect(get(['a', 'b', 'c'], '1')).toBe('b');
      expect(get(['a', 'b', 'c'], '5')).toBeUndefined();

      const ar = ['a', 'b', 'c'];
      (ar as any).foo = 'bar';

      expect(get(ar, 'foo')).toBe('bar');
    });

    test('should get a value in a nested object', () => {
      expect(get({ a: { b: { c: 'hello' } } }, 'a.b.c')).toBe('hello');
      expect(get({ a: { b: { c: [0, 4, 8] } } }, 'a.b.c.2')).toBe(8);
    });
  });

  describe('#merge', () => {
    test('should merge an item into another', () => {
      const a = { x: 1 };
      const b = { y: 2 };
      const result = merge(a, b);
      expect(result).toEqual({ x: 1, y: 2 });
    });

    test('should return the first one if the second is not defined', () => {
      const a = { x: 1 };
      const result = merge(a, null);
      expect(result).toBe(a);
    });
  });

  describe('#cascade', () => {
    test('should call function until it is not one', () => {
      expect(cascade(() => () => () => () => 'bar')).toBe('bar');
    });
  });

  describe('#getThemeValue', () => {
    test('should get a value from the theme', () => {
      expect(getThemeValue({} as any, 'foo')).toBeUndefined();
      expect(getThemeValue({ theme: { foo: 'bar' } } as any, 'foo')).toBe(
        'bar'
      );
      expect(
        getThemeValue({ theme: { foo: 'bar' } } as any, 'x')
      ).toBeUndefined();
    });

    test('should start from the initial value specified', () => {
      expect(
        getThemeValue({ theme: { other: 'x' } } as any, 'foo', {
          foo: (p: any) => p.theme.other
        } as any)
      ).toBe('x');
    });
  });
});
