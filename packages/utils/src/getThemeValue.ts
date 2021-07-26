import { Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import get from 'lodash/get';

import { propsEvalOrReturn } from './propsEvalOrReturn';

export function getThemeValue<
  Props extends { theme: Theme },
  DefaultValue extends unknown
>(
  keys: string,
  defaultValue?: DefaultValue
): (props: Props) => CSSInterpolation {
  return (props: Props) => {
    const { theme = {} } = props;
    let result = get(theme, keys);
    if (result === undefined) {
      result = defaultValue;
    }
    return propsEvalOrReturn(result, props);
  };
}
