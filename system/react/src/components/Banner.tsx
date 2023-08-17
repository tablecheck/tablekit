/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { banner } from '@tablecheck/tablekit-core';

import {
  buildVariantComponents,
  buildComponentWithVariants
} from '../buildVariantComponents';

export type Props = banner.Props;
export type BannerVariant = banner.BannerVariant;

export const BannerBase = styled.div<Omit<Props, 'data-variant'>>`
  ${banner.baseStyles}
`;
export const Banner = buildComponentWithVariants(
  banner.variantStyles,
  BannerBase,
  {} as Props
);
Banner.displayName = 'Banner';
export const VariantBanner = buildVariantComponents(
  banner.variantStyles,
  Banner
);
