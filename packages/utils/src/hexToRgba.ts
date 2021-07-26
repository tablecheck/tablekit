/* eslint-disable no-bitwise */
// credit for this code to https://stackoverflow.com/a/21648508/1413689
export function hexToRgba(hexString: string, alpha: number): string {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexString)) {
    throw new Error(`"${hexString}" is not a valid CSS Hex Color value`);
  }
  let hexValues = hexString.substring(1).split('');
  if (hexValues.length === 3) {
    hexValues = [
      hexValues[0],
      hexValues[0],
      hexValues[1],
      hexValues[1],
      hexValues[2],
      hexValues[2]
    ];
  }
  const hexValue = Number(`0x${hexValues.join('')}`);
  const redValue = (hexValue >> 16) & 255;
  const greenValue = (hexValue >> 8) & 255;
  const blueValue = hexValue & 255;
  return `rgba(${redValue},${greenValue},${blueValue},${Math.min(
    1,
    Math.max(0, alpha)
  )})`;
}
/* eslint-enable no-bitwise */
