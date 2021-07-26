import { variant as coreVariant } from '../variant';

const variant: (parameters: any) => (props: any) => any = (args: any = {}) =>
  coreVariant({ prop: 'variant', ...args }) as any;

describe('@tablecheck/tablekit-Utils variant', () => {
  let consoleError: typeof console.error;

  beforeEach(() => {
    consoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  test('should handle blank object and props', () => {
    expect(variant({})({})).toBeUndefined();
  });

  test('should create a variant prop', () => {
    const variants = variant({
      variants: {
        primary: 'p',
        secondary: 's'
      }
    });
    expect(variants({ variant: 'primary' })).toBe('p');
    expect(variants({ variant: 'secondary' })).toBe('s');
  });

  test('should support media queries', () => {
    const variants = variant({
      variants: {
        primary: 'p'
      }
    });
    expect(variants({ variant: { query: 'primary' } })).toMatchInlineSnapshot(
      '@media (query){p;};'
    );
  });

  test('should warn if not found', () => {
    const variants = variant({
      variants: {
        primary: 'p',
        secondary: 's'
      }
    });
    expect(variants({ variant: 'xx' })).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith('variant "xx" not found');
  });

  test('should support default value', () => {
    const variants = variant({
      default: 'secondary',
      variants: {
        primary: 'p',
        secondary: 's'
      }
    });
    expect(variants({ variant: 'primary' })).toBe('p');
    expect(variants({ variant: 'secondary' })).toBe('s');
    expect(variants({ variant: 'xx' })).toBe('s');
    expect(variants({})).toBe('s');
    expect(console.error).not.toHaveBeenCalled();
  });

  test('should support theme variant', () => {
    const variants = variant({
      key: 'buttons',
      variants: {
        primary: 'p',
        secondary: 's'
      }
    });
    const theme = { buttons: { primary: 'xp' } };
    expect(variants({ theme })).toBeUndefined();
    expect(variants({ variant: 'primary' })).toBe('p');
    expect(variants({ theme: {}, variant: 'primary' })).toBe('p');
    expect(variants({ theme, variant: 'primary' })).toBe('xp');
    expect(variants({ theme, variant: 'secondary' })).toBe('s');
  });

  test('should support nested values', () => {
    const variants = variant({
      key: 'variants.buttons',
      variants: {
        primary: {
          dark: 'pd',
          light: 'pl'
        },
        secondary: {
          dark: 'sd',
          light: 'sl'
        }
      }
    });
    const theme = { variants: { buttons: { primary: { dark: 'xpd' } } } };
    expect(variants({ theme })).toBeUndefined();
    expect(variants({ variant: 'primary.dark' })).toBe('pd');
    expect(variants({ variant: 'primary.light' })).toBe('pl');
    expect(variants({ variant: 'secondary.dark' })).toBe('sd');
    expect(variants({ variant: 'secondary.light' })).toBe('sl');
    expect(variants({ theme, variant: 'primary.dark' })).toBe('xpd');
    expect(variants({ theme, variant: 'primary.light' })).toBe('pl');
  });

  test('should support boolean props', () => {
    const variants = variant({
      prop: 'isBoolean',
      default: 'false',
      variants: {
        true: 'true-value',
        false: 'false-value'
      }
    });
    expect(variants({ isBoolean: true })).toBe('true-value');
    expect(variants({ isBoolean: false })).toBe('false-value');
    expect(variants({})).toBe('false-value');
  });

  test('should support recursive definitions', () => {
    const variants = variant({
      prop: 'isBoolean',
      default: 'false',
      variants: {
        true: () => 'true-value',
        false: () => 'false-value'
      }
    });
    expect(variants({ isBoolean: true })).toBe('true-value');
    expect(variants({ isBoolean: false })).toBe('false-value');
    expect(variants({})).toBe('false-value');
  });

  test('should support useVariantAsClass', () => {
    const variants = variant({
      prop: 'condition',
      default: 'one',
      variants: {
        one: ({ a }: any) => `color: ${a}`,
        two: ({ b }: any) => `color: ${b}`
      }
    });
    expect(
      variants({
        useVariantAsClass: 'condition',
        a: 'blue',
        b: 'green'
      })
    ).toMatchInlineSnapshot(`
&:not(.two) {
  color: blue;
}
&.two {
  color: green;
}
`);
  });
});
