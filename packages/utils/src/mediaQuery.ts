import { css, Theme } from '@emotion/react';
import { CSSInterpolation, SerializedStyles } from '@emotion/serialize';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

import { propsEvalOrReturn } from './propsEvalOrReturn';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseProps {}

type PropsWithTheme<Props extends BaseProps> = Props & { theme: Theme };

export interface MediaQueryFromProps<
  Value extends CSSInterpolation,
  Props extends BaseProps = { theme: Theme }
> {
  (props: Props): MediaQueryObject<Value>;
}

type MediaQueryObject<Value> = {
  [breakpoint: string]: Value;
};

export type MediaQuery<Value> = Value | MediaQueryObject<Value>;

export type MediaQueryGetter<
  Value extends CSSInterpolation,
  Props extends BaseProps = { theme: Theme }
> = keyof Props | MediaQueryObject<Value> | MediaQueryFromProps<Value, Props>;

export function mediaQuery<
  Value extends CSSInterpolation,
  Props extends BaseProps = { theme: Theme }
>(
  queriesOrGetter: MediaQueryGetter<Value, Props>,
  renderer: (queryValue: Value) => CSSInterpolation,
  defaultQueriesOrValue?: Value | MediaQueryObject<Value>
): (props: PropsWithTheme<Props>) => SerializedStyles {
  return (props) => {
    let queries: MediaQueryObject<Value> =
      queriesOrGetter as MediaQueryObject<Value>;
    if (isFunction(queriesOrGetter)) {
      queries = (queriesOrGetter as MediaQueryFromProps<Value, Props>)(props);
    } else if (isString(queriesOrGetter)) {
      queries = props[
        queriesOrGetter as keyof Props
      ] as unknown as MediaQueryObject<Value>;
    }
    if (!queries && defaultQueriesOrValue) {
      if (!isObject(defaultQueriesOrValue)) {
        return propsEvalOrReturn(
          renderer(defaultQueriesOrValue as Value),
          props as unknown as Record<string, unknown | Value>
        );
      }
      queries = defaultQueriesOrValue;
    }
    // This handles if the prop value is _not_ being used as a media query object
    if (!isObject(queries)) {
      return propsEvalOrReturn(
        renderer(queries),
        props as unknown as Record<string, unknown | Value>
      );
    }
    const mediaQueries = Object.keys(queries);
    const cssMediaQueries = [];
    let defaultQueryValue;
    for (let i = 0; i < mediaQueries.length; i += 1) {
      const query = mediaQueries[i];
      if (query === 'default') {
        defaultQueryValue = queries[query];
      } else {
        let queryString = query;
        if (queryString.indexOf('(') === -1) {
          queryString = `(${query})`;
        }
        cssMediaQueries.push(css`
          @media ${queryString} {
            ${propsEvalOrReturn(
              renderer(queries[query]),
              props as unknown as Record<string, unknown | Value>
            ) || ''};
          }
        `);
      }
    }
    let defaultStyles: CSSInterpolation = '';
    if (defaultQueryValue) {
      defaultStyles =
        propsEvalOrReturn(
          renderer(defaultQueryValue),
          props as unknown as Record<string, unknown | Value>
        ) || '';
    }
    if (defaultStyles) {
      cssMediaQueries.unshift(css`
        ${defaultStyles}
      `);
    }
    return css(cssMediaQueries);
  };
}
