import { ifRtl as testFunc } from '../ifRtl';

const ifRtl = testFunc as any;

describe('@tablecheck/tablekit-Utils ifRtl', () => {
  test('should handle no props passed', () => {
    expect(ifRtl(true, false)()).toEqual(false);
  });

  test('should handle no theme', () => {
    expect(ifRtl(true, false)({})).toEqual(false);
  });

  test('should handle blank theme', () => {
    expect(ifRtl(true, false)({ theme: {} })).toEqual(false);
  });

  test('should handle theme value is false', () => {
    expect(ifRtl(true, false)({ theme: { isRtl: false } })).toEqual(false);
  });

  test('should handle theme value is true', () => {
    expect(ifRtl(true, false)({ theme: { isRtl: true } })).toEqual(true);
  });
});
