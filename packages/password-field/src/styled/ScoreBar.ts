import styled from '@emotion/styled';
import { INPUT_WIDTHS } from '@tablecheck/tablekit-input';
import { Spacing, Size, ThemeColors } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const Wrapper = styled.div<{
  shouldFitContainer?: boolean;
  percent: number;
  width: Size;
}>`
  max-width: ${({ shouldFitContainer, width }) =>
    shouldFitContainer ? '100%' : INPUT_WIDTHS[width]};

  // https://github.com/react-component/progress/issues/18
  svg {
    max-width: 100%;
    max-height: 5px;
  }

  path {
    transition: stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear !important;
  }

  ${({ percent }) =>
    percent === 0 ? '.rc-progress-line-path { opacity: 0; }' : null};
`;

export const ValidationMessage = styled.span<{
  scoreColor: keyof ThemeColors;
}>`
  display: block;
  margin-bottom: 0;
  ${Typography.Body2};
  ${({ theme, scoreColor }) => `color: ${theme.colors[scoreColor]};`};
`;

export const ValidationMessageWithoutBar = styled(ValidationMessage)`
  margin-top: ${Spacing.L1};
`;
