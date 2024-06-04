import { textAreaCore } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { TextAreaWithIcons } from '../components/TextAreaWithIcons';
import { TextAreaWithPrefix } from '../components/TextAreaWithPrefix';
import { TextAreaWithSuffix } from '../components/TextAreaWithSuffix';
import { getConfigDefault } from '../config';

const hasFieldSizingSupport =
  typeof window === 'undefined'
    ? true
    : window.CSS?.supports?.('field-sizing', 'content');

export type Props = textAreaCore.DefaultedProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'prefix'> & {
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

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      onInput,
      style,
      className,
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
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    const Component = React.useMemo(() => {
      if (prefix) return TextAreaWithPrefix;
      if (suffix) return TextAreaWithSuffix;
      return TextAreaWithIcons;
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
        data-variant={variant}
        data-stretch={isStretched}
        data-size={size}
        data-with-icon={withIcon}
        data-pseudo={pseudoDebugger}
        ref={
          hasFieldSizingSupport
            ? undefined
            : (newRef) => {
                wrapperRef.current = newRef;
                if (newRef && !newRef?.dataset.content) {
                  newRef.dataset.content = `${
                    props.value || props.defaultValue || ''
                  }`;
                }
              }
        }
      >
        {prefix ?? iconBefore}
        <textarea
          ref={ref}
          onInput={
            hasFieldSizingSupport
              ? undefined
              : (event) => {
                  if (wrapperRef.current) {
                    wrapperRef.current.dataset.content =
                      event.currentTarget.value || '';
                  }
                }
          }
          {...props}
          rows={1}
        />
        {suffix ?? iconAfter}
      </Component>
    );
  }
);
TextArea.displayName = 'TextArea';
