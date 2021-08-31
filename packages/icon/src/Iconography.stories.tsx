import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import { Size } from '@tablecheck/tablekit-theme';
import * as icons from 'tablecheck-icons';
import { IconDefinition } from 'types';

import { Link, Typography } from '../../typography';

import { Icon } from './index';

export default {
  title: 'Icon System/Iconography',
  parameters: {
    layout: 'centered'
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
  p,
  ul li {
    padding: 10px 0;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 2px 4px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
  ul {
    list-style: disc;
    padding-left: 20px;
    li {
      padding-bottom: 10px;
    }
  }
  label {
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
  button {
    margin-right: 10px;
  }
`;

const Heading = styled.h4`
  ${Typography.Heading4};
  padding: 10px 0;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  div {
    width: 130px;
    height: 100px;
    text-align: center;
    font-size: 14px;
  }
`;

const iconsArray: IconDefinition[] = Object.values(
  (icons as { tci: { string: IconDefinition } }).tci
);

function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

const Template = () => (
  <Wrapper>
    <p>
      Currently there are two sources for icons: the{' '}
      <Link href="https://fontawesome.com/icons?d=gallery">
        FontAwesome Library
      </Link>{' '}
      and the{' '}
      <Link href="https://github.com/tablecheck/tablecheck-icons">
        TableCheck Icons Library
      </Link>
    </p>
    <Heading>FontAwesome</Heading>
    <p>
      The FontAwesome library contains around 8K icons. For this reason the
      icons will not be previewed here. Please use the{' '}
      <Link href="https://fontawesome.com/icons?d=gallery">
        Gallery Search.
      </Link>
    </p>
    <p>
      You will need to import an icon configuration in the project root{' '}
      <span>import &quot;@tablecheck/tablekit-free-icon-config&quot;</span> for
      most components to work properly.
    </p>
    <Heading>TableCheck Icons Library</Heading>
    <IconsWrapper>
      {iconsArray.map((icon) => (
        <div>
          <Icon icon={icon} size={Size.XXLarge} />
          <p>{`tci${capitalizeFirstLetter(icon.iconName)}`}</p>
        </div>
      ))}
    </IconsWrapper>
  </Wrapper>
);

export const Information = Template.bind({});
