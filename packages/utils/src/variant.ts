// forked from https://github.com/smooth-code/xstyled/blob/master/packages/system/src/variant.js
import { css, Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import { mediaQuery, MediaQueryGetter } from './mediaQuery';
import { propsEvalOrReturn } from './propsEvalOrReturn';
import {
  getThemeValue,
  getValue,
  merge,
  warn,
  is,
  VariantKeyType
} from './variantUtils';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseProps {}

export type VariantProps<Props extends BaseProps> = Props & {
  // this would be nice as keyof Props instead of string but it causes
  // too many issues when passing down props
  useVariantAsClass?: string | string[];
};

type BasePropsWithTheme = { theme: Theme };

interface Arguments<
  VariantKeys extends VariantKeyType,
  Value extends CSSInterpolation,
  Props extends VariantProps<BasePropsWithTheme>,
  PropGetter extends MediaQueryGetter<Value, Props>
> {
  default?: VariantKeys;
  key?: string | null | undefined;
  prop: PropGetter;
  variants: {
    [key in VariantKeys]: Value | ((props: Props) => Value);
  };
}

function evaluateVariant<
  VariantKeys extends VariantKeyType,
  Value extends CSSInterpolation,
  Props extends BasePropsWithTheme,
  PropGetter extends MediaQueryGetter<Value, Props>
>(
  props: Props,
  parameters: Arguments<VariantKeys, Value, Props, PropGetter>,
  resolvedValue: Value
): Value {
  const { key, default: defaultValue, variants } = parameters;
  const value = resolvedValue || defaultValue;
  const themeVariants: Record<string, Value> = is(key)
    ? getThemeValue(props, key as string)
    : {};
  const computedVariants = merge(variants, themeVariants);
  let result: Value | undefined;
  if (value) {
    result = getValue(props, value as string, computedVariants);
    if (!is(result) && defaultValue && value !== defaultValue) {
      result = getValue(props, defaultValue as string, computedVariants);
    }
  }
  warn(is(result), `variant "${value || 'undefined'}" not found`);
  return propsEvalOrReturn(result, props);
}

export function variant<
  VariantKeys extends VariantKeyType,
  Value extends CSSInterpolation,
  PropsArgument extends BaseProps
>(
  parameters: Arguments<
    VariantKeys,
    Value,
    PropsArgument & BasePropsWithTheme,
    keyof PropsArgument
  >
): (
  props: VariantProps<PropsArgument & BasePropsWithTheme>
) => CSSInterpolation {
  type Props = VariantProps<PropsArgument & BasePropsWithTheme>;
  const {
    key = null,
    default: defaultValue = 'default',
    variants = {},
    prop
  } = parameters;
  return (props) => {
    const themeVariants: Record<string, Value> = is(key)
      ? getThemeValue(props, key as string)
      : {};
    const computedVariants: Record<string, Value> = merge(
      variants,
      themeVariants
    );
    if (props.useVariantAsClass) {
      let isClassProp =
        typeof props.useVariantAsClass === 'string' &&
        props.useVariantAsClass === prop;
      if (Array.isArray(props.useVariantAsClass)) {
        isClassProp = props.useVariantAsClass.indexOf(prop as string) > -1;
      }
      if (isClassProp) {
        const allKeys = Object.keys(computedVariants);
        const defaultSelector = allKeys.reduce((selector, variantKey) => {
          let newString = '';
          if (variantKey !== defaultValue) {
            newString = `:not(.${variantKey})`;
          }
          return selector + newString;
        }, '');
        const classes = allKeys.map((variantKey) =>
          variantKey === defaultValue
            ? css`
                &${defaultSelector} {
                  ${propsEvalOrReturn(
                    computedVariants[variantKey],
                    props as unknown as Record<string, unknown>
                  )}
                }
              `
            : css`
                &.${variantKey} {
                  ${propsEvalOrReturn(
                    computedVariants[variantKey],
                    props as unknown as Record<string, unknown>
                  )}
                }
              `
        );
        return css(classes);
      }
    }
    return mediaQuery<Value, Props>(prop, (value) =>
      evaluateVariant<VariantKeys, Value, Props, keyof Props>(
        props,
        parameters,
        value
      )
    )(props);
  };
}
