import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { Button } from '@tablecheck/tablekit-button';
import { Size } from '@tablecheck/tablekit-theme';
import { Typography, Link } from '@tablecheck/tablekit-typography';
import faker from 'faker';
import { Fragment } from 'react';

import { HeaderAppearance, ModalDialog, BaseModalProps } from './index';

export default {
  title: 'Components/Modal Dialog',
  component: ModalDialog,
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  },
  argTypes: {
    width: {
      control: { type: 'select' },
      options: [Size.Small, Size.Regular, Size.Large, Size.XLarge]
    },
    height: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    children: faker.lorem
      .paragraphs(4, '-----')
      .split('-----')
      .map((p) => (
        <Fragment key={p}>
          <h3>{faker.lorem.sentence()}</h3>
          <p>{p}</p>
        </Fragment>
      )),
    headerContent: 'Simple header (maybe custom JSX component)',
    footerContent: 'Simple footer (maybe custom JSX component)',
    hasCloseIcon: true
  }
} as Meta;

const InfoWrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
  p {
    padding: 10px 0;
  }
  ul {
    li {
      margin-bottom: 10px;
    }
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 3px 5px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
`;

const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 0 auto;
  display: flex;
  width: 94% !important;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  margin-top: 0px;
  margin-bottom: 16px;
  border-collapse: collapse;
  color: #767676;
  font-size: 15px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: rgb(51, 51, 51);
  width: 400px;
  th {
    font-weight: bold;
    text-align: start;
    border-bottom: 1px solid rgb(232, 232, 232);
  }
  td {
    padding: 4px 16px 4px 0px;
    line-height: 1.5;
  }
`;
const InfoTemplate = () => (
  <InfoWrapper>
    <p>
      This component displays content in a layer that sits above the rest of the
      page content. Users will not be able to interact with the page until the
      dialog is closed.
    </p>
    <ul>
      <li>
        To create uncontrolled modal - pass element (button) to{' '}
        <span>trigger</span> prop
      </li>
      <li>
        To create controlled modal - pass <span>onOpenChange</span> and{' '}
        <span>isOpen</span> state
      </li>
    </ul>
    <p>
      For custom implementation look into{' '}
      <Link href="https://radix-ui.com/primitives/docs/components/dialog">
        @radix-ui/react-dialog
      </Link>
    </p>
    <Table>
      <thead>
        <tr>
          <th>@tablekit component</th>
          <th>@radix component</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ModalRoot</td>
          <td>Root</td>
        </tr>
        <tr>
          <td>ModalContent</td>
          <td>Content</td>
        </tr>
        <tr>
          <td>ModalOverlay</td>
          <td>Overlay</td>
        </tr>
      </tbody>
    </Table>
  </InfoWrapper>
);

export const Information = InfoTemplate.bind({});

const Template: Story<BaseModalProps> = ({ isOpen, onOpenChange, ...args }) => (
  <Wrapper>
    <ModalDialog {...args} trigger={<Button>Toggle Modal</Button>}>
      {args.children}
    </ModalDialog>
  </Wrapper>
);

export const BaseModal = Template.bind({});

export const WithoutGutters = Template.bind({});
WithoutGutters.args = {
  shouldHideGutters: true
};

export const OnlyChildren = Template.bind({});
OnlyChildren.args = {
  headerContent: undefined,
  footerContent: undefined
};

export const WithoutCloseIcon = Template.bind({});
WithoutCloseIcon.args = {
  hasCloseIcon: false
};

export const WarningHeader = Template.bind({});
WarningHeader.args = {
  headerAppearance: HeaderAppearance.Warning
};

export const DangerHeader = Template.bind({});
DangerHeader.args = {
  headerAppearance: HeaderAppearance.Danger
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  width: Size.Small
};

export const RegularSize = Template.bind({});
RegularSize.args = {
  width: Size.Regular
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  width: Size.Large
};

export const XLargeSize = Template.bind({});
XLargeSize.args = {
  width: Size.XLarge
};
XLargeSize.storyName = 'XLarge Size';

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 200
};
CustomSize.storyName = 'Custom Size (200px)';

export const ResponsiveMaxWidth = Template.bind({});
ResponsiveMaxWidth.args = {
  maxWidth: {
    'min-width: 600px': 400,
    'min-width: 800px': 700,
    default: 200
  }
};
ResponsiveMaxWidth.storyName = 'Responsive MaxWidth';

export const ResponsiveMaxHeight = Template.bind({});
ResponsiveMaxHeight.args = {
  maxHeight: {
    'min-width: 600px': '70%',
    'min-width: 800px': '50%',
    default: '90%'
  }
};
ResponsiveMaxHeight.storyName = 'Responsive MaxHeight';
