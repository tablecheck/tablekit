import { TextArea } from '@tablecheck/tablekit-react';
import * as React from 'react';

import { FitContentTextareaWrapper } from './Wrapper';

export const FitContentTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<typeof TextArea> & {
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    /** @deprecated used for internal storybook examples */
    'data-pseudo'?: string;
  }
>(
  (
    {
      onInput,
      style,
      className,
      iconBefore = null,
      iconAfter = null,
      'data-stretch': isStretched,
      'data-variant': variant,
      'data-pseudo': pseudoDebugger,
      ...props
    },
    ref
  ) => {
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    return (
      <FitContentTextareaWrapper
        data-content={props.defaultValue}
        style={style}
        className={className}
        data-variant={variant}
        data-stretch={isStretched}
        data-pseudo={pseudoDebugger}
        ref={(newRef) => {
          wrapperRef.current = newRef;
          if (newRef && !newRef?.dataset.content) {
            newRef.dataset.content = `${
              props.value || props.defaultValue || ''
            }`;
          }
        }}
      >
        {iconBefore}
        <TextArea
          ref={ref}
          rows={props.rows || 1}
          onInput={(event) => {
            if (wrapperRef.current) {
              wrapperRef.current.dataset.content =
                event.currentTarget.value || '';
            }
          }}
          {...props}
        />
        {iconAfter}
      </FitContentTextareaWrapper>
    );
  }
);
