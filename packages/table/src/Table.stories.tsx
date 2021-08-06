import styled from '@emotion/styled';
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';
import { Story, Meta } from '@storybook/react';
import {
  ItemGroup,
  ItemGroupOrientation,
  Item
} from '@tablecheck/tablekit-item';
import { Toggle } from '@tablecheck/tablekit-toggle';
import { Link, Typography } from '@tablecheck/tablekit-typography';
import { useMemo, useState } from 'react';
import {
  useTable,
  useSortBy,
  useFlexLayout,
  useResizeColumns,
  HeaderGroup,
  Row,
  Cell
} from 'react-table';

import { columns, makeData, Person } from './docUtils';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableWrapper,
  TableResizer,
  ThIcon,
  Tfoot
} from './styled';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Wrapper = styled(TableWrapper)`
  display: inline-flex;
  margin-top: 30px;
`;

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

const Description = styled.div`
  ${Typography.Body1};
  padding: 0 10px;
`;

const Heading = styled.h3`
  ${Typography.Heading4};
  padding: 20px 10px 0;
`;

const InfoTemplate = () => (
  <Description>
    <p>
      For full documentation more examples and what props can be provided see
      <Link href="https://github.com/react-tools/react-table">
        {' '}
        react-table{' '}
      </Link>
      which this component wraps styles around. List of basic styled components
      for you table.
    </p>
    <Heading>Styled components:</Heading>
    <ItemGroup>
      <Item>{`import { Table } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Thead } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Tr } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Th } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Tbody } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Tfoot } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { Td } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import {TableResizer } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import { TableWrapper } from '@tablecheck/tablekit-table';`}</Item>
      <Item>{`import {  ThIcon } from '@tablecheck/tablekit-table';`}</Item>
    </ItemGroup>
    <Heading>Theme:</Heading>
    <ItemGroup orientation={ItemGroupOrientation.Horizontal}>
      <div>
        <Item>
          <em>tableDarkTheme</em>
        </Item>
        <Item>
          <em>tableClassicTheme</em>
        </Item>
        <Item>
          <em>tableThemeNamespace</em>
        </Item>
      </div>
      <div>
        <Item>{`import { tableDarkTheme } from '@tablecheck/tablekit-table';`}</Item>
        <Item>{`import { tableClassicTheme } from '@tablecheck/tablekit-table';`}</Item>
        <Item>{`import { tableThemeNamespace } from '@tablecheck/tablekit-table';`}</Item>
      </div>
    </ItemGroup>
  </Description>
);

export const Information = InfoTemplate.bind({});

const Template: Story = () => (
  <Wrapper>
    <Table>
      <Thead>
        <Tr>
          <Th colSpan={2}>Name</Th>
          <Th colSpan={2}>Info</Th>
        </Tr>
        <Tr>
          <Th colSpan={1}>First Name</Th>
          <Th colSpan={1}>Last Name</Th>
          <Th colSpan={1}>Age</Th>
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
  </Wrapper>
);

export const BasicHTMLTable = Template.bind({});

const SortableIcon = ({ column }: any) => {
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

const FeaturedTable = ({ data }: any, { shouldUseFooter = false }) => {
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
    ? footerGroups.filter((group: HeaderGroup<Person>) =>
        group.headers.some((info: any) => info.Footer)
      )
    : [];

  return (
    <TableWrapperStyled>
      <TableStyled {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup: HeaderGroup<Person>) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
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
          {rows.map((row: Row<Person>) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell: Cell<Person>) => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </Tr>
            );
          })}
        </TbodyStyled>
        {shouldUseFooter && (
          <Tfoot>
            {footerRows.map((group: HeaderGroup<Person>) => (
              <Tr {...group.getFooterGroupProps(group.getHeaderGroupProps())}>
                {group.headers.map((column: any) => (
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

const FeaturedTemplate = () => {
  const [isRtl, setIsRtl] = useState(false);
  const toggleRtl = () => {
    setIsRtl((previousValue) => !previousValue);
  };
  const data = useMemo(() => makeData(20), []);
  return (
    <ItemGroup orientation={ItemGroupOrientation.Vertical} hasIndent>
      <ItemGroup orientation={ItemGroupOrientation.Horizontal} hasIndent>
        <Toggle isChecked={isRtl} onChange={toggleRtl} />
        <p style={{ display: 'flex', alignItems: 'center' }}>Use Rtl</p>
      </ItemGroup>
      <ExamplesWrapper dir={isRtl ? 'rtl' : ''}>
        <FeaturedTable data={data} shouldUseFooter />
      </ExamplesWrapper>
    </ItemGroup>
  );
};

export const FullFeaturedTable = FeaturedTemplate.bind({});
