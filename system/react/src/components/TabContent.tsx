/**
 * DO NOT EDIT: This file is generated, run 'npm update:components' to update this.
 * The exports here are generated from @tablecheck/tablekit-core
 * If you need to provide more "structure" to this component move it to the 'structuredComponents' folder
 */
import styled from '@emotion/styled';
import { tabContent } from '@tablecheck/tablekit-core';

export type Props = tabContent.DefaultedProps;

export const TabContent = styled.div<Props>`
  ${tabContent.baseStyles}
`;
TabContent.defaultProps = { role: 'tabpanel' };
