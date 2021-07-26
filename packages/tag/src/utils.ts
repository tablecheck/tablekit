import chroma from 'chroma-js/chroma-tablekit';

const DARK_COLOR_THRESHOLD = 70;

export function isDarkColor(hexColor: string | number): boolean {
  return chroma(hexColor).get('lab.l') < DARK_COLOR_THRESHOLD;
}
