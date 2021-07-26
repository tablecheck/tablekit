import { Theme } from '@emotion/react';
import { CSSInterpolation, Interpolation } from '@emotion/serialize';

import { propsEvalOrReturn } from './propsEvalOrReturn';

declare module '@emotion/react' {
  export interface Theme {
    isRtl: boolean;
  }
}

export function ifRtl<
  ReturnValue extends CSSInterpolation,
  Props extends { theme: Theme } = { theme: Theme }
>(
  truthyValue: ReturnValue | Interpolation<Props>,
  falsyValue: ReturnValue | Interpolation<Props>
): (props: Props) => ReturnValue {
  return (props: Props) => {
    // sometimes in tests we are lazy and don't pass theme
    // in some edge cases this may occur in real life too
    const isThemeRtl = !!props?.theme?.isRtl;
    if (isThemeRtl)
      return propsEvalOrReturn<ReturnValue, Props>(truthyValue, props);
    return propsEvalOrReturn<ReturnValue, Props>(falsyValue, props);
  };
}
