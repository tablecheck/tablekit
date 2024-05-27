/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { banner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { extractDisplayName } from '../utils';

export type Props = banner.Props & React.HTMLAttributes<HTMLDivElement>;
export type BannerVariant = banner.BannerVariant;

const Base = styled.div<Omit<Props, 'data-variant'>>`
  ${banner.fullStyles}
`;
const bannerVariantComponents = Object.entries(banner.variantStyles).reduce(
  (result, [key, value]) => ({
    ...result,
    [`${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}`]: styled(
      Base
    )`
      ${value}
    `
  }),
  {} as Record<Capitalize<BannerVariant>, typeof Base>
);
export const bannerStyledComponents = {
  Base: styled(Base)<Props>`
    ${Object.entries(banner.variantStyles).map(
      ([v, s]) => `&[data-variant="${v}"] { ${s} }`
    )}
  `,
  ...bannerVariantComponents
} as const;

const _Banner = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <bannerStyledComponents.Base {...props} ref={ref} />);
_Banner.displayName = `Banner`;
export const Banner = _Banner as never as typeof _Banner & {
  withComponent: (typeof bannerStyledComponents.Base)['withComponent'];
};
Banner.withComponent = ((withComponent: any) => {
  const Styled = bannerStyledComponents.Base.withComponent(withComponent);
  const component = React.forwardRef<
    HTMLDivElement,
    Props & React.HTMLAttributes<HTMLDivElement>
  >((props, ref) => <Styled {...props} ref={ref} />);
  component.displayName = `Banner(${extractDisplayName(withComponent)})`;
  return component;
}) as never;
export const BannerBase = Banner;
export const VariantBanner = Object.fromEntries(
  Object.entries(bannerVariantComponents).map(([key, Component]) => {
    const _VariantComponent = React.forwardRef<
      HTMLDivElement,
      Omit<Props, 'data-variant'> & React.HTMLAttributes<HTMLDivElement>
    >((props, ref) => <Component {...props} ref={ref} />);
    _VariantComponent.displayName = `Banner${key}`;
    const VariantComponent =
      _VariantComponent as never as typeof _VariantComponent & {
        withComponent: (typeof Component)['withComponent'];
      };
    VariantComponent.withComponent = ((withComponent: any) => {
      const Styled = Component.withComponent(withComponent);
      const component = React.forwardRef<
        HTMLDivElement,
        Omit<Props, 'data-variant'> & React.HTMLAttributes<HTMLDivElement>
      >((props, ref) => <Styled {...props} ref={ref} />);
      component.displayName = `Banner${key}(${extractDisplayName(
        withComponent
      )})`;
      return component;
    }) as never;
    return [key, VariantComponent];
  })
) as never as Record<Capitalize<BannerVariant>, typeof BannerBase>;
