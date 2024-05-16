/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { button } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { getConfigDefault } from '../config';
import { extractDisplayName } from '../utils';

export type Props = button.DefaultedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonVariant = button.ButtonVariant;

const Base = styled.button<Omit<Props, 'data-variant'>>`
  ${button.fullStyles}
`;
const Core = styled.button<Omit<Props, 'data-variant'>>`
  ${button.coreStyles}
`;
const buttonVariantComponents = Object.entries(button.variantStyles).reduce(
  (result, [key, value]) => ({
    ...result,
    [`${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}`]: styled(
      Core
    )`
      ${value}
    `
  }),
  {} as Record<Capitalize<ButtonVariant>, typeof Base>
);
export const buttonStyledComponents = {
  Core,
  Base: styled(Base)<Props>`
    ${Object.entries(button.variantStyles).map(
      ([v, s]) => `&[data-variant="${v}"] { ${s} }`
    )}
  `,
  ...buttonVariantComponents
} as const;

const _Button = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <buttonStyledComponents.Base
    {...props}
    type={props.type ?? (button.defaultProps.type as never)}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_Button.displayName = `Button`;
export const Button = _Button as never as typeof _Button & {
  withComponent: (typeof buttonStyledComponents.Base)['withComponent'];
};
Button.withComponent = ((withComponent: any) => {
  const Styled = buttonStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Props & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      type={props.type ?? (button.defaultProps.type as never)}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `Button(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
const _ButtonBase = React.forwardRef<
  HTMLButtonElement,
  Omit<Props, 'data-variant'> & React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => (
  <buttonStyledComponents.Core
    {...props}
    type={props.type ?? (button.defaultProps.type as never)}
    data-size={props['data-size'] ?? getConfigDefault('controlSize')}
    ref={ref}
  />
));
_ButtonBase.displayName = `ButtonBase`;
export const ButtonBase = _ButtonBase as never as typeof _ButtonBase & {
  withComponent: (typeof buttonStyledComponents.Core)['withComponent'];
};
ButtonBase.withComponent = ((withComponent: any) => {
  const Styled = buttonStyledComponents.Core.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLButtonElement,
    Omit<Props, 'data-variant'> & React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Styled
      {...props}
      type={props.type ?? (button.defaultProps.type as never)}
      data-size={props['data-size'] ?? getConfigDefault('controlSize')}
      ref={ref}
    />
  ));
  component.displayName = `ButtonBase(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
export const VariantButton = Object.fromEntries(
  Object.entries(buttonVariantComponents).map(([key, Component]) => {
    const _VariantComponent = React.forwardRef<
      HTMLButtonElement,
      Omit<Props, 'data-variant'> &
        React.ButtonHTMLAttributes<HTMLButtonElement>
    >((props, ref) => (
      <Component
        {...props}
        type={props.type ?? (button.defaultProps.type as never)}
        data-size={props['data-size'] ?? getConfigDefault('controlSize')}
        ref={ref}
      />
    ));
    _VariantComponent.displayName = `Button${key}`;
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
          type={props.type ?? (button.defaultProps.type as never)}
          data-size={props['data-size'] ?? getConfigDefault('controlSize')}
          ref={ref}
        />
      ));
      component.displayName = `Button${key}(${extractDisplayName(
        withComponent
      )})`;
      return component;
    }) as never;
    return [key, VariantComponent];
  })
) as never as Record<Capitalize<ButtonVariant>, typeof ButtonBase>;
