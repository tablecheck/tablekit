import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from 'utils/constants';

export const baseElement = 'label';

export const baseStyles = css`
  margin-bottom: ${Spacing.L2};
`;

export const Label = styled(baseElement)`
  ${baseStyles}
`;
