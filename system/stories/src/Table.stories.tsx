import { OverflowMenuHorizontal } from '@carbon/icons-react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { table } from '@tablecheck/tablekit-core';
import { getConfigDefault } from '@tablecheck/tablekit-react';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const meta: Meta = {
  title: 'Components/Table',
  component: emotion.Table,
  parameters: {
    ...table,
    auxiliaryComponents: [emotion.TableBadgeCell, emotion.TableButtonCell]
  }
};

export default meta;

const tableData = [
  {
    id: '04654ef6-8258-406d-81bc-15ce4bc8a33d',
    name: 'Tyesa Parrino',
    address: 'Scholarships St 2994, Whitinsville, Russia, 350507',
    birthday: '09.02.1994',
    status: 'warning' as const,
    email: 'bedford_berubeta@tales.at'
  },
  {
    id: '299c6c9b-515b-4557-a432-c54cc9ef4f6d',
    name: 'Rito Talkington',
    address: 'Sony Street 9926, Floyd, Belarus, 404723',
    birthday: '31.03.2009',
    status: 'success' as const,
    email: 'lenamarie_harney0gu4@spectrum.nx'
  },
  {
    id: '339ab400-fac6-430a-a267-13ce95cd32e2',
    name: 'Savanna Bergmann',
    address: 'Cliff St 30, Winlock, Grenada, 452141',
    birthday: '22.05.1988',
    status: 'success' as const,
    email: 'jolena_whitcombi27k@bee.nlz'
  },
  {
    id: '3c36f8b5-314b-4051-bd49-3cac2f70a09a',
    name: 'Allegra Wechsler',
    address: 'Cambodia Street 4606, Cecilia, China, 342750',
    birthday: '01.03.1994',
    status: 'error' as const,
    email: 'zola_addiskaaw@jamie.ls'
  },
  {
    id: '6bac25ac-4344-4299-a04c-7aa295ccf47e',
    name: 'Thary Tripp',
    address: 'Creation Road 4190, Mancos, Christmas Island, 515518',
    birthday: '03.03.1989',
    status: 'success' as const,
    email: 'kinyata_crosbycqri@pendant.qn'
  },
  {
    id: '8b9f1682-d51a-42e7-9198-7e8d48bfc683',
    name: 'Lyndsy Hail',
    address: 'Besides Road 6677, Zhijiang, Nepal, 912354',
    birthday: '18.10.2001',
    status: 'success' as const,
    email: 'brando_constantino11@equity.mlh'
  },
  {
    id: 'ae6bc11d-b9df-4f85-9566-ba92c31a84eb',
    name: 'Synthia Loring',
    status: 'success' as const,
    address: 'Many St 9032, El Dorado, Nigeria, 181335',
    birthday: '28.03.2015',
    email: 'stepen_feaginaglq@todd.gj'
  },
  {
    id: 'e59569b4-6622-4e4f-a6e7-f4b2233158ae',
    name: 'Pascha Blatt',
    status: 'success' as const,
    address: 'Peaceful St 7705, Jacksons Gap, Iraq, 428957',
    birthday: '15.06.1982',
    email: 'rahul_leal3f@congress.ev'
  },
  {
    id: 'fae0d785-76a9-4c94-9a6e-1366ea451201',
    name: 'Nathania Haslam',
    address: 'Fee Street 8358, Littleriver, Saudi Arabia, 918489',
    birthday: '06.10.2001',
    status: 'success' as const,
    email: 'reuben_blackmonth@sociology.fh'
  },
  {
    id: 'fd490f26-c7a2-4df8-9ad4-21fd60b5d873',
    name: 'Manfred Hartwig',
    address: 'Entity Road 6465, Matoaka, Russia, 834525',
    birthday: '10.01.1972',
    status: 'info' as const,
    email: 'kirstopher_hassinger2d@counseling.ymp'
  }
];

const ActionWrapper = styled.div`
  display: flex;
`;

interface Options {
  Table: typeof emotion.Table | typeof css.Table;
  Button: typeof emotion.Button | typeof css.Button;
  Badge: typeof emotion.Badge | typeof css.Badge;
  Checkbox: typeof emotion.Checkbox | typeof css.Checkbox;
  TableBadgeCell: typeof emotion.TableBadgeCell | typeof css.TableBadgeCell;
  TableButtonCell: typeof emotion.TableButtonCell | typeof css.TableButtonCell;
  isStriped: boolean;
}

const SimpleTemplate: StoryFn<Pick<Options, 'Table' | 'isStriped'>> = ({
  Table,
  isStriped
}) => (
  <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Birthday</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => (
        <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>{user.name}</td>
          <td>
            {index % 2 ? (
              user.address
            ) : (
              <ul>
                {user.address.split(', ').map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </td>
          <td>{user.birthday}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export const BasicEmotion: typeof SimpleTemplate = SimpleTemplate.bind({});
BasicEmotion.args = { Table: emotion.Table };
BasicEmotion.parameters = { useEmotion: true };

export const BasicStripedEmotion: typeof SimpleTemplate = SimpleTemplate.bind(
  {}
);
BasicStripedEmotion.args = { Table: emotion.Table, isStriped: true };
BasicStripedEmotion.parameters = { useEmotion: true };

export const BasicClass: typeof SimpleTemplate = SimpleTemplate.bind({});
BasicClass.args = { Table: css.Table };
BasicClass.parameters = { useEmotion: false };

export const BasicStripedClass: typeof SimpleTemplate = SimpleTemplate.bind({});
BasicStripedClass.args = { Table: css.Table, isStriped: true };
BasicStripedClass.parameters = { useEmotion: false };

const WithControlsTemplate: StoryFn<Options> = ({
  Table,
  Button,
  Badge,
  Checkbox,
  TableBadgeCell,
  TableButtonCell,
  isStriped
}) => (
  <Table data-variant={isStriped ? 'striped' : 'default'}>
    <thead>
      <tr>
        <th>
          <ActionWrapper>
            <Checkbox type="checkbox" />
          </ActionWrapper>
        </th>
        <th>Name</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((user, index) => (
        <tr key={user.id} data-active={index === 3 || index === 4}>
          <td>
            <ActionWrapper>
              <Checkbox type="checkbox" />
            </ActionWrapper>
          </td>
          <td>
            {index % 2 ? (
              user.address
            ) : (
              <ul>
                {user.address.split(', ').map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </td>
          <TableBadgeCell>
            <Badge data-variant={user.status} data-size="small">
              {user.status}
            </Badge>
          </TableBadgeCell>
          <TableButtonCell>
            <Button data-variant="bare" data-size="small">
              <OverflowMenuHorizontal size={getConfigDefault('iconSize')} />
            </Button>
          </TableButtonCell>
        </tr>
      ))}
    </tbody>
  </Table>
);

export const WithControlsEmotion: typeof WithControlsTemplate =
  WithControlsTemplate.bind({});
WithControlsEmotion.args = {
  Table: emotion.Table,
  Button: emotion.Button,
  Badge: emotion.Badge,
  Checkbox: emotion.Checkbox,
  TableBadgeCell: emotion.TableBadgeCell,
  TableButtonCell: emotion.TableButtonCell
};

WithControlsEmotion.parameters = { useEmotion: true };

export const StripedControlsEmotion: typeof WithControlsTemplate =
  WithControlsTemplate.bind({});
StripedControlsEmotion.args = {
  Table: emotion.Table,
  Button: emotion.Button,
  Badge: emotion.Badge,
  Checkbox: emotion.Checkbox,
  TableBadgeCell: emotion.TableBadgeCell,
  TableButtonCell: emotion.TableButtonCell,
  isStriped: true
};
StripedControlsEmotion.parameters = { useEmotion: true };

export const WithControlsClass: typeof WithControlsTemplate =
  WithControlsTemplate.bind({});
WithControlsClass.args = {
  Table: css.Table,
  Button: css.Button,
  Badge: css.Badge,
  Checkbox: css.Checkbox,
  TableBadgeCell: css.TableBadgeCell,
  TableButtonCell: css.TableButtonCell
};
WithControlsClass.parameters = { useEmotion: false };

export const StripedControlsClass: typeof WithControlsTemplate =
  WithControlsTemplate.bind({});
StripedControlsClass.args = {
  Table: css.Table,
  Button: css.Button,
  Badge: css.Badge,
  Checkbox: css.Checkbox,
  TableBadgeCell: css.TableBadgeCell,
  TableButtonCell: css.TableButtonCell,
  isStriped: true
};
StripedControlsClass.parameters = { useEmotion: false };
