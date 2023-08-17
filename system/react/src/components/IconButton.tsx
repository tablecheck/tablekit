/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { iconButton } from '@tablecheck/tablekit-core';
import * as React from 'react';

import {
  buildVariantComponents,
  buildComponentWithVariants
} from '../buildVariantComponents';

export type Props = iconButton.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type IconButtonVariant = iconButton.IconButtonVariant;

export const IconButtonBase = styled.button<Omit<Props, 'data-variant'>>`
  ${iconButton.baseStyles}
`;
export const IconButton = buildComponentWithVariants(
  iconButton.variantStyles,
  IconButtonBase,
  {} as Props
);
IconButton.displayName = 'IconButton';
const IconButtonCore = styled.button<Props>`
  ${iconButton.coreStyles}
`;
IconButton.defaultProps = { type: 'button' };
export const VariantIconButton = buildVariantComponents(
  iconButton.variantStyles,
  IconButtonCore
);
