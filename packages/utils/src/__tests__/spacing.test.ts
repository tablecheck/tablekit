import { css, Theme } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

import { getThemeValue } from '../getThemeValue';
import { parseSpacing, padding, margin } from '../spacing';

function getSpacingCases(prefix: string): any[] {
  return [
    [
      'single value / all same',
      undefined,
      12,
      css`
        ${prefix}: 12px;
      `
    ],
    [
      'top only',
      undefined,
      { top: 12 },
      css`
        ${prefix}-top: 12px;
      `
    ],
    [
      'left only',
      undefined,
      { left: 12 },
      css`
        ${prefix}-left: 12px;
      `
    ],
    [
      'right only',
      undefined,
      { right: 12 },
      css`
        ${prefix}-right: 12px;
      `
    ],
    [
      'bottom only',
      undefined,
      { bottom: 12 },
      css`
        ${prefix}-bottom: 12px;
      `
    ],
    [
      'vertical only',
      undefined,
      { bottom: 12, top: 8 },
      css`
        ${prefix}-top: 8px;
        ${prefix}-bottom: 12px;
      `
    ],
    [
      'horizontal only',
      undefined,
      { left: 12, right: 8 },
      css`
        ${prefix}-right: 8px;
        ${prefix}-left: 12px;
      `
    ],
    [
      'all',
      undefined,
      { top: 10, right: 11, bottom: 12, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 11px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 13px;
      `
    ],
    [
      'top missing',
      undefined,
      { right: 11, bottom: 12, left: 13 },
      css`
        ${prefix}-right: 11px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 13px;
      `
    ],
    [
      'right missing',
      undefined,
      { top: 10, bottom: 12, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 13px;
      `
    ],
    [
      'bottom missing',
      undefined,
      { top: 10, right: 11, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 11px;
        ${prefix}-left: 13px;
      `
    ],
    [
      'left missing',
      undefined,
      { top: 10, right: 11, bottom: 12 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 11px;
        ${prefix}-bottom: 12px;
      `
    ],
    [
      'left only with isRtl',
      { isRtl: true },
      { left: 12 },
      css`
        ${prefix}-right: 12px;
      `
    ],
    [
      'right only with isRtl',
      { isRtl: true },
      { right: 12 },
      css`
        ${prefix}-left: 12px;
      `
    ],
    [
      'vertical only with isRtl',
      { isRtl: true },
      { bottom: 12, top: 8 },
      css`
        ${prefix}-top: 8px;
        ${prefix}-bottom: 12px;
      `
    ],
    [
      'horizontal only with isRtl',
      { isRtl: true },
      { left: 12, right: 8 },
      css`
        ${prefix}-right: 12px;
        ${prefix}-left: 8px;
      `
    ],
    [
      'all with isRtl',
      { isRtl: true },
      { top: 10, right: 11, bottom: 12, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 13px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 11px;
      `
    ],
    [
      'top missing with isRtl',
      { isRtl: true },
      { right: 11, bottom: 12, left: 13 },
      css`
        ${prefix}-right: 13px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 11px;
      `
    ],
    [
      'right missing with isRtl',
      { isRtl: true },
      { top: 10, bottom: 12, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 13px;
        ${prefix}-bottom: 12px;
      `
    ],
    [
      'bottom missing with isRtl',
      { isRtl: true },
      { top: 10, right: 11, left: 13 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-right: 13px;
        ${prefix}-left: 11px;
      `
    ],
    [
      'left missing with isRtl',
      { isRtl: true },
      { top: 10, right: 11, bottom: 12 },
      css`
        ${prefix}-top: 10px;
        ${prefix}-bottom: 12px;
        ${prefix}-left: 11px;
      `
    ]
  ];
}

function expectedStyle(result: SerializedStyles) {
  return result.styles.replace(/label:[^;]+;/gi, '').replace(/;;/gi, ';');
}

describe('@tablecheck/tablekit-Utils', () => {
  test('should handle nested props functions', () => {
    const result = css`
      margin: 12px;
    `;
    expect(
      margin((() => () => 12) as any)({} as { theme: Theme }).styles
    ).toEqual(expectedStyle(result));
  });

  test('should pass theme correctly to nested props functions', () => {
    const testValue = 12;
    const result = css`
      padding: ${testValue}px;
    `;
    expect(
      padding(getThemeValue('testValue'))({ theme: { testValue } as any })
        .styles
    ).toEqual(expectedStyle(result));
  });

  test.each(getSpacingCases('margin'))(
    'margin: %s',
    (name: string, theme: any, input: any, output: any) => {
      expect(margin(input)({ theme } as any).styles).toEqual(
        expectedStyle(output)
      );
    }
  );

  test.each(getSpacingCases('padding'))(
    'padding: %s',
    (name: string, theme: any, input: any, output: any) => {
      expect(padding(input)({ theme } as any).styles).toEqual(
        expectedStyle(output)
      );
    }
  );

  test.each([
    ['undefined', undefined, 'inherit'],
    ['number', 12, '12px'],
    ['string', '100%', '100%']
  ])('parseSpacing: %s', (name: string, input: any, output: string) => {
    expect(parseSpacing(input)).toBe(output);
  });
});
