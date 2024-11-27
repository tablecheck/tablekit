import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function extractDisplayName(component: any): string {
  if (typeof component === 'string' && component.length > 0) {
    return component;
  }

  return component.displayName || component.name || 'Unknown';
}

interface DecorateOptions {
  tag: keyof JSX.IntrinsicElements;
  className: undefined | string;
  displayName?: string;
  additionalProps?: Record<string, unknown>;
  style?: React.CSSProperties;
}

// The following clever types are taken from @emotion/styled StyledComponent types
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */
type IsPreReact19 = 2 extends Parameters<React.FunctionComponent<any>>['length']
  ? true
  : false;

type ReactJSXLibraryManagedAttributes<C, P> = true extends IsPreReact19
  ? /** @ts-ignore */
    JSX.LibraryManagedAttributes<C, P>
  : /** @ts-ignore */
    React.JSX.LibraryManagedAttributes<C, P>;
type ReactJSXIntrinsicElements = true extends IsPreReact19
  ? /** @ts-ignore */
    JSX.IntrinsicElements
  : /** @ts-ignore */
    React.JSX.IntrinsicElements;

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export type PropsOf<
  C extends keyof ReactJSXIntrinsicElements | React.JSXElementConstructor<any>
> = ReactJSXLibraryManagedAttributes<C, React.ComponentProps<C>>;
/* eslint-enable */

// eslint-disable-next-line @typescript-eslint/ban-types
export interface WithComponentType<ComponentProps extends {}> {
  withComponent<C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    fixedProps?: Partial<ComponentProps>
  ): React.ForwardRefExoticComponent<ComponentProps & PropsOf<C>>;
  withComponent<C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    fixedProps?: Partial<ComponentProps>
  ): React.ForwardRefExoticComponent<ComponentProps & PropsOf<C>>;
  withComponent<Tag extends keyof ReactJSXIntrinsicElements>(
    tag: Tag,
    fixedProps?: Partial<ComponentProps>
  ): React.ForwardRefExoticComponent<
    ComponentProps & ReactJSXIntrinsicElements[Tag]
  >;
}

function mergeStyles(
  style1: React.CSSProperties | undefined,
  style2: React.CSSProperties | undefined
): React.CSSProperties | undefined {
  if (!style1 && !style2) {
    return undefined;
  }
  if (!style1) {
    return style2;
  }
  if (!style2) {
    return style1;
  }
  return { ...style1, ...style2 };
}

export function buildWithComponent<
  TElement,
  TProps extends React.HTMLAttributes<HTMLElement>
>({
  tag,
  className,
  displayName,
  additionalProps,
  style
}: DecorateOptions): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TProps> & React.RefAttributes<TElement>
> &
  WithComponentType<TProps> {
  const Component = React.forwardRef<TElement, TProps>((props, ref) =>
    React.createElement(tag, {
      ...additionalProps,
      ...props,
      className: className
        ? `${props.className ?? ''} ${className}`
        : props.className,
      style: style ? { ...props.style, ...style } : props.style,
      ref
    })
  ) as never as React.ForwardRefExoticComponent<
    React.PropsWithoutRef<TProps> & React.RefAttributes<TElement>
  > &
    WithComponentType<TProps>;
  Component.displayName = displayName;

  Component.withComponent = function withComponentImplementation<
    P extends { className: string },
    T extends React.ComponentType<P>
  >(withComponent: T, extraProps: TProps) {
    const wrappedClassName = [extraProps.className, className].join(' ').trim();
    const mergedStyles = mergeStyles(style, extraProps.style);
    const WrappedComponent = React.forwardRef<T, TProps>((props, ref) =>
      React.createElement(withComponent, {
        ...additionalProps,
        ...props,
        ...extraProps,
        className: wrappedClassName
          ? `${props.className ?? ''} ${wrappedClassName}`
          : props.className,
        style: mergeStyles(mergedStyles, props.style),
        ref
      } as never)
    );
    WrappedComponent.displayName = `${displayName}(${extractDisplayName(
      withComponent
    )})`;
    return WrappedComponent;
  } as never;

  return Component;
}

export function buildVariantComponents<
  TVariant extends string,
  TProps extends { className?: string },
  TElement extends keyof HTMLElementTagNameMap
>({
  variants,
  className,
  tag,
  displayName,
  additionalProps,
  style
}: {
  variants: TVariant[];
} & DecorateOptions): Record<
  Capitalize<TVariant>,
  React.ForwardRefExoticComponent<TProps> & WithComponentType<TProps>
> {
  return variants.reduce((result, key) => {
    const variantKey = `${key.substring(0, 1).toUpperCase()}${key
      .substring(1)
      .toLowerCase()}`;
    return {
      ...result,
      [variantKey]: buildWithComponent<
        HTMLElementTagNameMap[TElement],
        Omit<TProps, 'data-variant'>
      >({
        tag,
        className,
        style,
        displayName: `${displayName}_${variantKey}`,
        additionalProps: additionalProps
          ? { ...additionalProps, 'data-variant': key }
          : { 'data-variant': key }
      })
    };
  }, {} as Record<Capitalize<TVariant>, React.ForwardRefExoticComponent<TProps> & WithComponentType<TProps>>);
}
