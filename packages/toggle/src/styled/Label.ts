import styled from '@emotion/styled';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { toggleThemeNamespace, toggleClassicTheme } from '../themes';

export const LabelText = styled.span`
  display: inline-flex;
  align-self: center;
  line-height: 100%;
  font-size: 14px;
  margin-left: 2px;
  color: ${getThemeValue(
    `${toggleThemeNamespace}.textColor`,
    toggleClassicTheme.textColor
  )};
`;

export const Label = styled.label`
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;
  &,
  & * {
    user-select: none;
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;
