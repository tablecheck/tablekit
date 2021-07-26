import { mediaQuery as testFunction } from '../mediaQuery';

const mediaQuery: (...args: any[]) => (arg2: any) => any = testFunction as any;

const propValueReturn = (propValue: any): any => propValue;

function runTestsForGetter(getter: any) {
  test('should get prop and run render', () => {
    expect(mediaQuery(getter, propValueReturn)({ test: 'result' })).toBe(
      'result'
    );
  });
  test('should handle undefined prop', () => {
    expect(mediaQuery(getter, propValueReturn)({})).toBeUndefined();
  });
  test('should handle default value', () => {
    expect(mediaQuery(getter, propValueReturn, 'value')({})).toBe('value');
  });
  test('should handle default queries', () => {
    expect(
      mediaQuery(getter, propValueReturn, { query: 'value' })({})
    ).toMatchInlineSnapshot('@media (query){value;};');
  });
  test('should render media queries', () => {
    expect(
      mediaQuery(
        getter,
        propValueReturn
      )({
        test: { query: 'value' }
      })
    ).toMatchInlineSnapshot('@media (query){value;};');
  });
  test('should handle explicit default media query', () => {
    expect(
      mediaQuery(
        getter,
        propValueReturn
      )({
        test: { query: 'value', default: 'default value' }
      })
    ).toMatchInlineSnapshot('default value;@media (query){value;};');
  });
  test('should handle implicit default media query', () => {
    expect(
      mediaQuery(
        getter,
        (propValue = 'default value') => propValue
      )({
        test: { query: 'value', default: 'default value' }
      })
    ).toMatchInlineSnapshot('default value;@media (query){value;};');
  });
}

describe('@tablecheck/tablekit-Utils mediaQuery', () => {
  describe('string getter', () => {
    runTestsForGetter('test');
  });

  describe('function getter', () => {
    runTestsForGetter((props: any) => props.test);
  });

  describe('object getter', () => {
    test('should handle empty object', () => {
      expect(
        mediaQuery({}, propValueReturn)({}).styles.replace(/;+/gi, ';')
      ).toBe('');
    });
    test('should render media queries', () => {
      expect(
        mediaQuery({ query: 'value' }, propValueReturn)({})
      ).toMatchInlineSnapshot('@media (query){value;};');
    });
    test('should handle explicit default media query', () => {
      expect(
        mediaQuery(
          { query: 'value', default: 'default value' },
          propValueReturn
        )({})
      ).toMatchInlineSnapshot('default value;@media (query){value;};');
    });
    test('should handle implicit default media query', () => {
      expect(
        mediaQuery(
          { query: 'value', default: 'default value' },
          (propValue = 'default value') => propValue
        )({})
      ).toMatchInlineSnapshot('default value;@media (query){value;};');
    });
  });
});
