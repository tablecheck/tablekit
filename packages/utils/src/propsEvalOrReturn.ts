import { Interpolation, CSSInterpolation } from '@emotion/serialize';

export function propsEvalOrReturn<
  ReturnValue extends CSSInterpolation,
  Props extends Record<string, unknown | ReturnValue> = Record<
    string,
    unknown | ReturnValue
  >
>(value: Interpolation<Props>, props: Props): ReturnValue {
  let result = value;
  while (typeof result === 'function') {
    result = result(props) as ReturnValue;
  }
  return result as ReturnValue;
}
