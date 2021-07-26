import styled from '@emotion/styled';
import { ZIndex, COLORS } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { getThemeValue } from '@tablecheck/tablekit-utils';

import { inlineDialogThemeNamespace, inlineDialogClassicTheme } from './themes';

export const Container = styled.div`
  background-color: ${getThemeValue(
    `${inlineDialogThemeNamespace}.backgroundColor`,
    inlineDialogClassicTheme.backgroundColor
  )};
  color: ${getThemeValue(
    `${inlineDialogThemeNamespace}.textColor`,
    inlineDialogClassicTheme.textColor
  )};
  box-shadow: 0px 0px 6px ${COLORS.GRAY_TRANSLUCENT.L4};
  z-index: ${ZIndex.Modal};
  ${Typography.Body2};
`;

export const InlineDialogContainer = styled.div`
  position: relative;
  ${Typography.Body2};
`;
