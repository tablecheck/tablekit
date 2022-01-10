import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon } from '@tablecheck/tablekit-icon';
import { Spacing } from '@tablecheck/tablekit-theme';
import { getThemeValue, margin, ifRtl } from '@tablecheck/tablekit-utils';
import type { ThemeOnlyProps } from '@tablecheck/tablekit-utils';

import { tableThemeNamespace, tableClassicTheme } from './themes';

const transition = '0.3s ease';

export const TableWrapper = styled.div`
  display: block;
  overflow-x: auto;
  border: solid 1px
    ${getThemeValue(
      `${tableThemeNamespace}.borderColor`,
      tableClassicTheme.borderColor
    )};
`;

const baseRowStyle = (props: ThemeOnlyProps) => css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: ${transition};
  transition-property: width, min-width, padding, opacity;
  padding: ${Spacing.L2};

  &:not(:first-of-type) {
    border-${ifRtl('right', 'left')(props)}: solid 1px
      ${getThemeValue(
        `${tableThemeNamespace}.borderColor`,
        tableClassicTheme.borderColor
      )(props)};
  }
`;

export const Td = styled.td`
  ${baseRowStyle}
`;

export const Tr = styled.tr``;

export const Table = styled.table`
  background-color: ${getThemeValue(
    `${tableThemeNamespace}.backgroundColor`,
    tableClassicTheme.backgroundColor
  )};
  color: ${getThemeValue(
    `${tableThemeNamespace}.textColor`,
    tableClassicTheme.textColor
  )};

  &,
  & * {
    box-sizing: border-box;
  }
`;

export const Thead = styled.thead`
  border-bottom: solid 2px
    ${getThemeValue(
      `${tableThemeNamespace}.headerBorderColor`,
      tableClassicTheme.headerBorderColor
    )};
  > :not(last-of-type) {
    border-bottom: solid 1px
      ${getThemeValue(
        `${tableThemeNamespace}.borderColor`,
        tableClassicTheme.borderColor
      )};
  }
`;

export const Th = styled.th`
  ${baseRowStyle}
`;

export const ThIcon = styled(Icon)`
  ${margin({ left: Spacing.L1 })}
`;

export const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
  > :nth-of-type(even) {
    background-color: ${getThemeValue(
      `${tableThemeNamespace}.stripedRowColor`,
      tableClassicTheme.stripedRowColor
    )};
  }
  > :hover {
    background-color: ${getThemeValue(
      `${tableThemeNamespace}.hoverRowColor`,
      tableClassicTheme.hoverRowColor
    )};
  }
`;

export const Tfoot = styled.tfoot`
  border-top: solid 1px
    ${getThemeValue(
      `${tableThemeNamespace}.borderColor`,
      tableClassicTheme.borderColor
    )};
`;

export const TableResizer = styled.div`
  display: inline-block;
  position: absolute;
  width: 10px;
  top: 0;
  bottom: 0;
  ${ifRtl('left', 'right')}: -5px;
  z-index: 10;
`;
