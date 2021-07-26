import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

import { ColumnItem } from '../../styled';
import { StyleProps } from '../../types';

export const LogoColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${Spacing.L5};
`;

export const FooterRowContainer = styled.div<StyleProps>`
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: column-reverse;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    align-items: flex-start;
    flex-direction: row;
    border-top: 1px solid white;
    & > * {
      margin-top: ${Spacing.L6};
    }
  }
`;

export const LogoSubtext = styled.div`
  ${Typography.Body1};
  margin-top: ${Spacing.L2};
`;

export const PolicyColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export const PolicyRow = styled.div<StyleProps>`
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    align-items: flex-start;
    flex-direction: row;
    &:not(:last-of-type) {
      margin-bottom: ${Spacing.L4};
    }
  }
`;

export const RowLink = styled(ColumnItem)<StyleProps>`
  margin-left: 0;
  margin-bottom: 0;
  @media (min-width: ${({ mobileBreakpoint }) => mobileBreakpoint}) {
    margin-left: ${Spacing.L6};
  }
`;
