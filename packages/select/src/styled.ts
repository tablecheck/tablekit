import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { InputSize } from '@tablecheck/tablekit-input';
import { Spacing } from '@tablecheck/tablekit-theme';
import {
  getThemeValue,
  MediaQuery,
  variant,
  VariantProps
} from '@tablecheck/tablekit-utils';

import { selectThemeNamespace, selectClassicTheme } from './themes';

type SizeProps = VariantProps<{ size?: MediaQuery<InputSize> }>;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${getThemeValue(
    `${selectThemeNamespace}.icon.color`,
    selectClassicTheme?.icon?.color
  )};
  ${variant<InputSize, SerializedStyles, SizeProps>({
    prop: 'size',
    default: InputSize.Regular,
    variants: {
      [InputSize.Large]: css`
        padding-left: 18px;
      `,
      [InputSize.Regular]: css`
        padding-left: ${Spacing.L3};
      `,
      [InputSize.Regular2]: css`
        padding-left: ${Spacing.L3};
      `,
      [InputSize.Small]: css`
        padding-left: 10px;
      `
    }
  })}
`;
