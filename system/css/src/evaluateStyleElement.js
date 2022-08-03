import { css } from '@emotion/react';

function recursiveEvaluateStyleElement(style, keyframes) {
  if (!style) return '';
  if (typeof style === 'function')
    throw new Error(
      `Cannot parse dynamic CSS, use attribute selectors not props`
    );
  if (Array.isArray(style))
    return style
      .map((s) => recursiveEvaluateStyleElement(s, keyframes))
      .join('');
  if (style.anim) {
    keyframes.push(recursiveEvaluateStyleElement(style.styles, keyframes));
    return style.name;
  }
  if (style.styles)
    return recursiveEvaluateStyleElement(style.styles, keyframes);
  if (typeof style === 'object')
    return recursiveEvaluateStyleElement(css(style));
  return style.toString();
}

export function evaluateStyleElement(style) {
  const keyframes = [];
  return [
    recursiveEvaluateStyleElement(style, keyframes)
      .replace(/(^|;)label:[a-z]+;/gi, '$1')
      .replace(/;+|^;/gi, ';'),
    keyframes.join('')
  ];
}
