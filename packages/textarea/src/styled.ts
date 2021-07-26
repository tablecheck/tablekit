import styled, { StyledComponent } from '@emotion/styled';
import { StyledInput } from '@tablecheck/tablekit-input';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

import { TextAreaProps } from './types';

function calculateMinimumHeight(props: TextAreaProps) {
  const { minimumRows = 1 } = props;
  const padding = parseFloat(Spacing.L3) * 2;
  const typographySettings = Typography.Body2;
  const lineHeight = parseFloat(typographySettings.lineHeight);
  return `${padding + lineHeight * minimumRows}px`;
}

export const TextareaInput = styled(
  StyledInput.withComponent('textarea') as StyledComponent<
    TextAreaProps,
    JSX.IntrinsicElements['textarea']
  >
)`
  box-sizing: border-box;
  height: auto;
  position: relative;
  display: flex;
  flex: 1 1 100%;
  padding-top: ${Spacing.L3};
  padding-bottom: ${Spacing.L3};
  min-height: ${calculateMinimumHeight};
  ${Typography.Body2};
  ${({ enableResize }) => (enableResize ? '' : 'resize: none;')};
  &::-ms-clear {
    display: none;
  }
`;

export const TextareaInputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex: 1 1 auto;
`;
