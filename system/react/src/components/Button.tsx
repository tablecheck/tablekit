/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { button } from '@tablecheck/tablekit-core';
import * as React from 'react';

import {
  buildVariantComponents,
  buildComponentWithVariants
} from '../buildVariantComponents';

export type Props = button.Props &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonVariant = button.ButtonVariant;

export const ButtonBase = styled.button<Omit<Props, 'data-variant'>>`
  ${button.baseStyles}
`;
export const Button = buildComponentWithVariants(
  button.variantStyles,
  ButtonBase,
  {} as Props
);
Button.displayName = 'Button';
const ButtonCore = styled.button<Props>`
  ${button.coreStyles}
`;
Button.defaultProps = { type: 'button' };
export const VariantButton = buildVariantComponents(
  button.variantStyles,
  ButtonCore
);
