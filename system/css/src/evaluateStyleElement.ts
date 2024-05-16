import { css, SerializedStyles, Keyframes } from '@emotion/react';

function recursiveEvaluateStyleElement(
  style: string | SerializedStyles | Keyframes,
  keyframes: string[]
): string {
  if (!style) return '';
  if (typeof style === 'function')
    throw new Error(
      `Cannot parse dynamic CSS, use attribute selectors not props`
    );
  if (Array.isArray(style))
    return style
      .map((s) => recursiveEvaluateStyleElement(s, keyframes))
      .join('');
  if ((style as Keyframes).anim) {
    keyframes.push(
      recursiveEvaluateStyleElement((style as Keyframes).styles, keyframes)
    );
    return (style as Keyframes).name;
  }
  if ((style as Keyframes).styles)
    return recursiveEvaluateStyleElement(
      (style as Keyframes).styles,
      keyframes
    );
  if (typeof style === 'object')
    return recursiveEvaluateStyleElement(css(style), keyframes);
  return style.toString();
}

export function evaluateStyleElement(style: string): [string, string] {
  const keyframes: string[] = [];
  return [
    recursiveEvaluateStyleElement(
      css`
        ${style}
      `,
      keyframes
    )
      .replace(/(^|;)label:[a-z]+;/gi, '$1')
      .replace(/;+|^;/gi, ';'),
    keyframes.join('')
  ];
}
