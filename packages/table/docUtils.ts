import faker from 'faker';

interface Person {
  firstName: string;
  lastName: string;
  visits: number;
  progress: number;
  age: number;
  status: string;
}

interface Column {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Header: string;
  columns: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Header: string;
    id?: string;
    accessor: string | ((arg: Person) => string);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Footer?: string;
  }[];
}

const range = (len: number): number[] => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  const statusChance = Math.random();
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(99),
    visits: faker.datatype.number(300),
    progress: faker.datatype.number(300),
    status: statusChance > 0.66 ? 'relationship' : 'complicated'
  };
};

export const columns: Column[] = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
        Footer: 'Total'
      },
      {
        Header: 'Last Name',
        id: 'lastName',
        accessor: (d) => d.lastName
      }
    ]
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
        Footer: '52'
      },
      {
        Header: 'Status',
        accessor: 'status'
      }
    ]
  },
  {
    Header: 'Stats',
    columns: [
      {
        Header: 'Visits',
        accessor: 'visits'
      }
    ]
  }
];

export const makeData = (len: number): (Person & { children: Person[] })[] =>
  range(len).map(() => ({
    ...newPerson(),
    children: range(10).map(newPerson)
  }));
