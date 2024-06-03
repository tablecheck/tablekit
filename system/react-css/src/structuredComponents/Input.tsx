import { inputCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { InputWithIcons } from '../components/InputWithIcons';
import { InputWithPrefix } from '../components/InputWithPrefix';
import { InputWithSuffix } from '../components/InputWithSuffix';
import { getConfigDefault } from '../config';

export type Props = inputCore.DefaultedProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
    /** @deprecated used for internal storybook examples */
    'data-pseudo'?: string;
  } & (
    | {
        iconBefore?: React.ReactNode;
        iconAfter?: React.ReactNode;
        suffix?: never;
        prefix?: never;
      }
    | {
        iconBefore?: React.ReactNode;
        iconAfter?: never;
        suffix?: React.ReactNode;
        prefix?: never;
      }
    | {
        iconBefore?: never;
        iconAfter?: React.ReactNode;
        suffix?: never;
        prefix?: React.ReactNode;
      }
  );

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      onInput,
      style,
      className,
      disabled: isDisabled,
      iconBefore = null,
      iconAfter = null,
      suffix = null,
      prefix = null,
      'data-stretch': isStretched,
      'data-variant': variant,
      'data-pseudo': pseudoDebugger,
      'data-size': size = getConfigDefault('controlSize'),
      ...props
    },
    ref
  ) => {
    const Component = React.useMemo(() => {
      if (prefix) return InputWithPrefix;
      if (suffix) return InputWithSuffix;
      return InputWithIcons;
    }, [prefix, suffix]);
    const withIcon = React.useMemo(() => {
      if (prefix) return iconAfter ? 'after' : undefined;
      if (suffix) return iconBefore ? 'before' : undefined;
      if (iconBefore && iconAfter) return 'both';
      if (iconBefore) return 'before';
      if (iconAfter) return 'after';
      return undefined;
    }, [iconBefore, iconAfter, suffix, prefix]);
    return (
      <Component
        style={style}
        className={className}
        data-variant={isDisabled ? 'disabled' : variant}
        data-stretch={isStretched}
        data-size={size}
        data-with-icon={withIcon}
        data-pseudo={pseudoDebugger}
      >
        {prefix ?? iconBefore}
        <input ref={ref} {...props} disabled={isDisabled} />
        {suffix ?? iconAfter}
      </Component>
    );
  }
);
Input.displayName = 'Input';
