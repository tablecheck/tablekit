/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { badge } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = badge.Props & React.HTMLAttributes<HTMLSpanElement>;
export type BadgeVariant = badge.BadgeVariant;

const Base = styled.span<Omit<Props, 'data-variant'>>`
  ${badge.fullStyles}
`;
const badgeVariantComponents = Object.entries(badge.variantStyles).reduce(
  (result, [key, value]) => ({
    ...result,
    [`${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}`]: styled(
      Base
    )`
      ${value}
    `
  }),
  {} as Record<Capitalize<BadgeVariant>, typeof Base>
);
export const badgeStyledComponents = {
  Base: styled(Base)<Props>`
    ${Object.entries(badge.variantStyles).map(
      ([v, s]) => `&[data-variant="${v}"] { ${s} }`
    )}
  `,
  ...badgeVariantComponents
} as const;

const _Badge = React.forwardRef<
  HTMLSpanElement,
  Props & React.HTMLAttributes<HTMLSpanElement>
>((props, ref) => <badgeStyledComponents.Base {...props} ref={ref} />);
_Badge.displayName = `Badge`;
export const Badge = _Badge as never as typeof _Badge & {
  withComponent: (typeof badgeStyledComponents.Base)['withComponent'];
};
Badge.withComponent = ((withComponent: any) => {
  const Styled = badgeStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLSpanElement,
    Props & React.HTMLAttributes<HTMLSpanElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Badge(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
export const BadgeBase = Badge;
export const VariantBadge = Object.fromEntries(
  Object.entries(badgeVariantComponents).map(([key, Component]) => {
    const _VariantComponent = React.forwardRef<
      HTMLSpanElement,
      Omit<Props, 'data-variant'> & React.HTMLAttributes<HTMLSpanElement>
    >((props, ref) => <Component {...props} ref={ref} />);
    _VariantComponent.displayName = `Badge${key}`;
    const VariantComponent =
      _VariantComponent as never as typeof _VariantComponent & {
        withComponent: (typeof Component)['withComponent'];
      };
    VariantComponent.withComponent = ((withComponent: any) => {
      const Styled = Component.withComponent(withComponent);
      const component = React.forwardRef<
        HTMLSpanElement,
        Omit<Props, 'data-variant'> & React.HTMLAttributes<HTMLSpanElement>
      >((props, ref) => <Styled {...props} ref={ref} />);
      component.displayName = `Badge${key}(${extractDisplayName(
        withComponent
      )})`;
      return component;
    }) as never;
    return [key, VariantComponent];
  })
) as never as Record<Capitalize<BadgeVariant>, typeof BadgeBase>;
