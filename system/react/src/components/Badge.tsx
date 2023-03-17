/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { badge } from '@tablecheck/tablekit-core';

import {
  buildVariantComponents,
  buildComponentWithVariants
} from '../buildVariantComponents';

export type Props = badge.Props;
export type BadgeVariant = badge.BadgeVariant;

export const BadgeBase = styled.span<Omit<Props, 'data-variant'>>`
  ${badge.baseStyles}
`;
export const Badge = buildComponentWithVariants(
  badge.variantStyles,
  BadgeBase,
  {} as Props
);
Badge.displayName = 'Badge';
export const VariantBadge = buildVariantComponents(badge.variantStyles, Badge);
