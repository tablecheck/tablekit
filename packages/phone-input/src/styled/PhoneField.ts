import styled from '@emotion/styled';
import {
  Input,
  StyledInput as InputElement,
  InputContainer
} from '@tablecheck/tablekit-input';
import { BORDER_RADIUS } from '@tablecheck/tablekit-theme';

export const PhoneInputContainer = styled(InputContainer)`
  height: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const PhoneInputField = styled(Input)`
  ${({ shouldFitContainer }) => (shouldFitContainer ? 'max-width: 100%' : '')};
  ${InputElement} {
    border-radius: ${`0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`};
    direction: ltr;
    text-align: 'left;
  }
`;
