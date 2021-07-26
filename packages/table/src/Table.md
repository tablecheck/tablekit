For full documentation more examples and what props can be provided see [react-table](https://github.com/react-tools/react-table) which this component wraps styles around.

List of basic styled components for you table.

### Styles

<div style="display: block; overflow: auto">
| Styled components                                                            |
| ------------------------------------------------------------------|
| `import { Table } from '@tablecheck/tablekit-table';`                        |
| `import { Thead } from '@tablecheck/tablekit-table';`                        |
| `import { Tr } from '@tablecheck/tablekit-table';`                           |
| `import { Th } from '@tablecheck/tablekit-table';`                           |
| `import { Tbody } from '@tablecheck/tablekit-table';`                        |
| `import { Tfoot } from '@tablecheck/tablekit-table';`                        |
| `import { Td } from '@tablecheck/tablekit-table';`                           |
| `import { TableResizer } from '@tablecheck/tablekit-table';`                 |
| `import { TableWrapper } from '@tablecheck/tablekit-table';`                 |
| `import { ThIcon } from '@tablecheck/tablekit-table';`                       |
</div>

### Theme

<div style="display: block; overflow: auto">
| Name                   | Import                                                  |
| -----------------------| ------------------------------------------------------- |
| _tableDarkTheme_       | `import { tableDarkTheme } from '@tablecheck/tablekit-table';`       |
| _tableClassicTheme_    | `import { tableClassicTheme } from '@tablecheck/tablekit-table';`    |
| _tableThemeNamespace_  | `import { tableThemeNamespace } from '@tablecheck/tablekit-table';`  |
</div>

### Basic HTML Table

```tsx
import styled from '@emotion/styled';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import { Table, Thead, Tr, Th, Tbody, Td, TableWrapper } from './styled';

const TableWrapperStyled = styled(TableWrapper)`
  display: inline-flex;
`;

<ThemeProvider useLocalStyles>
  <TableWrapperStyled>
    <Table>
      <Thead>
        <Tr>
          <Th colSpan="2">Name</Th>
          <Th colSpan="1">Info</Th>
        </Tr>
        <Tr>
          <Th colSpan="1">First Name</Th>
          <Th colSpan="1">Last Name</Th>
          <Th colSpan="1">Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>protection</Td>
          <Td>variation</Td>
          <Td>26</Td>
        </Tr>
        <Tr>
          <Td>watch</Td>
          <Td>engineering</Td>
          <Td>65</Td>
        </Tr>
        <Tr>
          <Td>apples</Td>
          <Td>test</Td>
          <Td>12</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableWrapperStyled>
</ThemeProvider>;
```

### Full-featured react-table

```tsx
import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  DARK_COLORS,
  CLASSIC_COLORS,
  ThemeProvider
} from '@tablecheck/tablekit-theme';
import {
  useTable,
  useSortBy,
  useFlexLayout,
  useResizeColumns
} from 'react-table';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { ItemGroup } from '@tablecheck/tablekit-item';
import { faSortUp } from '@fortawesome/pro-solid-svg-icons/faSortUp';
import { faSortDown } from '@fortawesome/pro-solid-svg-icons/faSortDown';
import { faSort } from '@fortawesome/pro-solid-svg-icons/faSort';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  TableResizer,
  TableWrapper,
  ThIcon
} from './styled';
import { columns, makeData } from '../docUtils';

const darkTheme = {
  colors: DARK_COLORS
};

const classicTheme = {
  colors: CLASSIC_COLORS
};

const ExamplesWrapper = styled.div`
  ${({ theme }) => `background-color: ${theme.colors.canvas};`}
  padding: 10px;
  height: 400px;
`;

const TableStyled = styled(Table)`
  width: 100%;
  height: 100%;
`;

const TableWrapperStyled = styled(TableWrapper)`
  height: 100%;
  overflow-y: hidden;
`;

const TbodyStyled = styled(Tbody)`
  display: block;
  height: 100%;
`;

const SortableIcon = ({ column }) => {
  const { canSort, isSorted, isSortedDesc } = column;
  if (!canSort) return null;

  let sortIcon = faSort;
  if (isSorted && isSortedDesc) {
    sortIcon = faSortDown;
  }
  if (isSorted && !isSortedDesc) {
    sortIcon = faSortUp;
  }
  return <ThIcon icon={sortIcon} />;
};

const FullFeaturedTable = ({ columns, data, shouldUseFooter = false }) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups
  } = useTable(
    { columns, data, defaultColumn },
    useSortBy,
    useFlexLayout,
    useResizeColumns
  );

  const footerRows = shouldUseFooter
    ? footerGroups.filter((group) => group.headers.some((info) => info.Footer))
    : [];

  return (
    <TableWrapperStyled>
      <TableStyled {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.canResize && (
                    <TableResizer {...column.getResizerProps()} />
                  )}
                  <SortableIcon column={column} />
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <TbodyStyled {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </TbodyStyled>
        {shouldUseFooter && (
          <Tfoot>
            {footerRows.map((group) => (
              <Tr {...group.getFooterGroupProps(group.getHeaderGroupProps())}>
                {group.headers.map((column) => (
                  <Td {...column.getFooterProps(column.getHeaderProps())}>
                    {column.render('Footer')}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tfoot>
        )}
      </TableStyled>
    </TableWrapperStyled>
  );
};

const PresentationContainer = () => {
  const [isDarkTheme, toggleTheme] = useState(false);
  const [isRtl, toggleRtl] = useState(false);
  const data = useMemo(() => makeData(20), []);

  const theme = isDarkTheme ? darkTheme : classicTheme;

  return (
    <ItemGroup hasIndent>
      <ItemGroup orientation="horizontal" hasIndent>
        <ItemGroup orientation="horizontal" hasIndent>
          <Toggle
            isChecked={isDarkTheme}
            onChange={() => toggleTheme(!isDarkTheme)}
          />
          <p style={{ display: 'flex', alignItems: 'center' }}>
            Use dark theme
          </p>
        </ItemGroup>
        <ItemGroup orientation="horizontal" hasIndent>
          <Toggle isChecked={isRtl} onChange={() => toggleRtl(!isRtl)} />
          <p style={{ display: 'flex', alignItems: 'center' }}>Use Rtl</p>
        </ItemGroup>
      </ItemGroup>
      <EmotionThemeProvider theme={{ ...theme, isRtl }}>
        <ExamplesWrapper dir={isRtl ? 'rtl' : ''}>
          <FullFeaturedTable columns={columns} data={data} shouldUseFooter />
        </ExamplesWrapper>
      </EmotionThemeProvider>
    </ItemGroup>
  );
};

<ThemeProvider useLocalStyles>
  <PresentationContainer />
</ThemeProvider>;
```
