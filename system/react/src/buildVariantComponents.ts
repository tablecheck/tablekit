import { css, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function buildVariantComponents<
  TVariant extends string,
  TProps extends object
>(
  variants: Record<TVariant, SerializedStyles>,
  baseComponent: StyledComponent<TProps>
) {
  return (Object.keys(variants) as TVariant[]).reduce(
    (result, key) => ({
      ...result,
      [`${key.substring(0, 1).toUpperCase()}${key
        .substring(1)
        .toLowerCase()}`]: styled(baseComponent)<Omit<TProps, 'data-variant'>>`
        ${variants[key]}
      `
    }),
    {} as Record<Capitalize<TVariant>, StyledComponent<TProps>>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function buildComponentWithVariants<
  TVariant extends string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TComponent extends StyledComponent<any, any, any>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  TProps extends {}
>(
  variants: Record<TVariant, SerializedStyles>,
  baseComponent: TComponent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  propsType: TProps
) {
  const component = styled(baseComponent)<TProps>`
    ${Object.entries<SerializedStyles>(variants).map(
      ([variant, styles]) => css`
        &[data-variant='${variant}'] {
          ${styles}
        }
      `
    )}
  `;
  component.displayName = baseComponent.displayName;
  return component;
}
