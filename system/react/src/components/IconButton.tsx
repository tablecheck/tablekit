/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { iconButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = iconButton.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type IconButtonVariant = iconButton.IconButtonVariant;

const Base = styled.button<Omit<Props, 'data-variant'>>`
  ${iconButton.fullStyles}
`;
const Core = styled.button<Omit<Props, 'data-variant'>>`
  ${iconButton.coreStyles}
`;
const iconButtonVariantComponents = Object.entries(
  iconButton.variantStyles
).reduce(
  (result, [key, value]) => ({
    ...result,
    [`${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}`]: styled(
      Core
    )`
      ${value}
    `
  }),
  {} as Record<Capitalize<IconButtonVariant>, typeof Base>
);
export const iconButtonStyledComponents = {
  Core,
  Base: styled(Base)<Props>`
    ${Object.entries(iconButton.variantStyles).map(
      ([v, s]) => `&[data-variant="${v}"] { ${s} }`
    )}
  `,
  ...iconButtonVariantComponents
} as const;

const _IconButton = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <iconButtonStyledComponents.Base
    {...props}
    type="button"
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_IconButton.displayName = `IconButton`;
export const IconButton = _IconButton as never as typeof _IconButton & {
  withComponent: (typeof iconButtonStyledComponents.Base)['withComponent'];
};
IconButton.withComponent = ((withComponent: any) => {
  const Styled = iconButtonStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Props & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      type="button"
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `IconButton(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
const _IconButtonBase = React.forwardRef<
  HTMLButtonElement,
  Omit<Props, 'data-variant'> & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <iconButtonStyledComponents.Core
    {...props}
    type="button"
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_IconButtonBase.displayName = `IconButtonBase`;
export const IconButtonBase =
  _IconButtonBase as never as typeof _IconButtonBase & {
    withComponent: (typeof iconButtonStyledComponents.Core)['withComponent'];
  };
IconButtonBase.withComponent = ((withComponent: any) => {
  const Styled = iconButtonStyledComponents.Core.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Omit<Props, 'data-variant'> & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      type="button"
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `IconButtonBase(${extractDisplayName(
    withComponent
  )})`;
  return component;
}) as never;
export const VariantIconButton = Object.fromEntries(
  Object.entries(iconButtonVariantComponents).map(([key, Component]) => {
    const _VariantComponent = React.forwardRef<
      HTMLButtonElement,
      Omit<Props, 'data-variant'> &
        React.ButtonHTMLAttributes<HTMLButtonElement>
    >((props, ref) => (
      <Component
        {...props}
        type="button"
        data-size={props['data-size'] ?? getConfigDefault('controlSize')}
        ref={ref}
      />
    ));
    _VariantComponent.displayName = `IconButton${key}`;
    const VariantComponent =
      _VariantComponent as never as typeof _VariantComponent & {
        withComponent: (typeof Component)['withComponent'];
      };
    VariantComponent.withComponent = ((withComponent: any) => {
      const Styled = Component.withComponent(withComponent);
      const component = React.forwardRef<
        HTMLButtonElement,
        Omit<Props, 'data-variant'> &
          React.ButtonHTMLAttributes<HTMLButtonElement>
      >((props, ref) => (
        <Styled
          {...props}
          type="button"
          data-size={props['data-size'] ?? getConfigDefault('controlSize')}
          ref={ref}
        />
      ));
      component.displayName = `IconButton${key}(${extractDisplayName(
        withComponent
      )})`;
      return component;
    }) as never;
    return [key, VariantComponent];
  })
) as never as Record<Capitalize<IconButtonVariant>, typeof IconButtonBase>;
