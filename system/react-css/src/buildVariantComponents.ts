import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function buildVariantComponents<
  TVariant extends string,
  TProps extends { className?: string },
  TElement extends keyof HTMLElementTagNameMap
>(variants: Record<TVariant, never>, className: string, element: TElement) {
  return (Object.keys(variants) as TVariant[]).reduce(
    (result, key) => ({
      ...result,
      [`${key.substring(0, 1).toUpperCase()}${key.substring(1).toLowerCase()}`]:
        React.forwardRef<
          HTMLElementTagNameMap[TElement],
          Omit<TProps, 'data-variant'>
        >((props, ref) =>
          React.createElement(element, {
            ...props,
            className: `${props?.className || ''} ${className}`,
            ref
          })
        )
    }),
    {} as Record<Capitalize<TVariant>, React.ForwardRefExoticComponent<TProps>>
  );
}
