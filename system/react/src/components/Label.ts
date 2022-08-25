import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Spacing } from '../themeVariables/constants';

export const classlessSelector = 'label';
export const classySelector = '.label';

export const baseStyles = css`
  margin-bottom: ${Spacing.L2};
`;

export const Label = styled(classlessSelector)`
  ${baseStyles}
`;
