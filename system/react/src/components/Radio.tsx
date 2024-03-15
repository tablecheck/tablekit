/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { radio } from '@tablecheck/tablekit-core';

export type Props = radio.DefaultedProps;

export const Radio = styled.input<Props>`
  ${radio.baseStyles}
`;
Radio.defaultProps = { type: 'radio' };
