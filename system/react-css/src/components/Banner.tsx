/**
 * DO NOT EDIT: This file is generated in the post-build step of @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import { banner } from '@tablecheck/tablekit-core';
import * as React from 'react';

import { buildVariantComponents, buildWithComponent } from '../utils';

export type Props = banner.Props & React.HTMLAttributes<HTMLDivElement>;
export type BannerVariant = banner.BannerVariant;

export const Banner = buildWithComponent<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>({ tag: 'div', displayName: 'Banner', className: 'banner' });
export const VariantBanner = buildVariantComponents<
  'tertiary' | 'ghost' | 'success' | 'warning' | 'info' | 'neutral',
  Props,
  'div'
>({
  variants: ['tertiary', 'ghost', 'success', 'warning', 'info', 'neutral'],
  className: 'banner',
  element: 'div',
  displayName: 'Banner'
});
