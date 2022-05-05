import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue, ifRtl, padding } from '@tablecheck/tablekit-utils';

import { inputClassicTheme, inputThemeNamespace } from '../themes';

export const InputLabelWrapper = styled.label`
  display: block;
  width: 100%;
`;

export const InputLabelInner = styled.div`
  ${Typography.Label2};
  font-style: normal;
  letter-spacing: 0em;
  text-align: ${ifRtl('right', 'left')};
  color: ${getThemeValue(
    `${inputThemeNamespace}.label.textColor`,
    inputClassicTheme?.label?.textColor
  )};
  margin-bottom: ${Spacing.L2};
  position: relative;
`;

export const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  ${padding({
    left: '2px'
  })}
`;
