import * as allExports from '../index';

describe('Theme', () => {
  test('should export correctly', () => {
    expect(Object.keys(allExports)).toEqual(
      expect.arrayContaining([
        'BORDER_RADIUS',
        'COLORS',
        'CLASSIC_COLORS',
        'DARK_COLORS',
        'DEPTH',
        'Spacing'
      ])
    );
  });
});
