/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { checkbox } from '@tablecheck/tablekit-core';

export type Props = checkbox.DefaultedProps;

export const Checkbox = styled.input<Props>`
  ${checkbox.baseStyles}
`;
Checkbox.defaultProps = { type: 'checkbox' };
