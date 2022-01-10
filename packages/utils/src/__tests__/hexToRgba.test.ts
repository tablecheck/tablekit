import { hexToRgba } from '../hexToRgba';

describe('@tablecheck/tablekit-utils hexToRgba', () => {
  test.each([
    ['123'],
    ['123456'],
    ['RRR'],
    ['RRRRRR'],
    ['#AAAA'],
    ['#AAAAAAA']
  ])('%s should throw error', (badHex) => {
    expect(() => hexToRgba(badHex, '' as any)).toThrow();
  });
  test.each`
    hex          | alpha  | rgba
    ${'#FFF'}    | ${1}   | ${'rgba(255,255,255,1)'}
    ${'#FFFFFF'} | ${1}   | ${'rgba(255,255,255,1)'}
    ${'#7935D2'} | ${1}   | ${'rgba(121,53,210,1)'}
    ${'#7935D2'} | ${0.3} | ${'rgba(121,53,210,0.3)'}
    ${'#7935D2'} | ${0}   | ${'rgba(121,53,210,0)'}
    ${'#7935D2'} | ${-1}  | ${'rgba(121,53,210,0)'}
    ${'#7935D2'} | ${2}   | ${'rgba(121,53,210,1)'}
  `('converts $hex with alpha $alpha to $rgba', ({ hex, alpha, rgba }) => {
    expect(hexToRgba(hex, alpha)).toBe(rgba);
  });
});
