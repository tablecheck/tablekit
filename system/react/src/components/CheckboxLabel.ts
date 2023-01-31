import styled from '@emotion/styled';

export const classySelector = 'label.checkbox, label.radio';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-l2);
  cursor: pointer;
  font: var(--body-1);
`;

export const RadioLabel = CheckboxLabel;
