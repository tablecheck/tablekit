import styled from '@emotion/styled';
import { INPUT_WIDTHS } from '@tablecheck/tablekit-input';
import { Size, Spacing } from '@tablecheck/tablekit-theme';

export const PasswordFieldContainer = styled.div<{
  shouldFitContainer?: boolean;
  width: Size;
}>`
  width: ${({ shouldFitContainer, width }) =>
    shouldFitContainer ? '100%' : INPUT_WIDTHS[width]};
`;

export const PasswordFieldWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    min-width: auto;
    padding: ${Spacing.L2};
    margin-left: ${Spacing.L2};
  }
`;

export const PasswordFieldInputWrapper = styled.div`
  width: 100%;
`;
