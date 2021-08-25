import { getIcon, IconDefinition } from '@tablecheck/tablekit-icon';

export type NavItem = {
  type: string;
  label: string;
  icon?: IconDefinition;
  isDisabled?: boolean;
  children?: NavItem[];
  to?: string;
  isNested?: boolean;
};

export const NavItems = [
  {
    type: 'item',
    label: 'Txt 1'
  },
  {
    type: 'item',
    label: 'Txt 2 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 3 + Icn',
    icon: getIcon('globe'),
    isDisabled: true
  },
  {
    type: 'section',
    label: 'Section 1 + Icn',
    icon: getIcon('globe'),
    children: [
      {
        type: 'item',
        label: 'Txt 4',
        isNested: true
      },
      {
        type: 'item',
        label: 'Txt 5 + Icn',
        icon: getIcon('globe'),
        isNested: true
      },
      {
        type: 'item',
        label: 'Txt 6 + Icn',
        icon: getIcon('globe'),
        isNested: true
      }
    ]
  },
  {
    type: 'link',
    label: 'React Router Link',
    icon: getIcon('globe'),
    to: '/page-1'
  },
  {
    type: 'link',
    label: 'React Router Link 2',
    to: '/page-2'
  },
  {
    type: 'section',
    label: 'Section 2',
    children: [
      {
        type: 'item',
        label: 'Txt 7 + Icn',
        icon: getIcon('globe'),
        isNested: true
      },
      {
        type: 'item',
        label: 'Txt 8 + Icn',
        icon: getIcon('globe'),
        isNested: true
      },
      {
        type: 'item',
        label: 'Txt 9 + Icn',
        icon: getIcon('globe'),
        isNested: true
      }
    ]
  },
  {
    type: 'item',
    label: 'Txt 10 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 11 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 12 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 13 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 14 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 15 + Icn',
    icon: getIcon('globe')
  },
  {
    type: 'item',
    label: 'Txt 16 + Icn',
    icon: getIcon('globe')
  }
];
