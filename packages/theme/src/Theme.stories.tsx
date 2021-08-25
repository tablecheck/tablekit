import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Story, Meta } from '@storybook/react';
import { useState, useEffect } from 'react';

import { Typography } from '../../typography';

import { Spacing, DEPTH } from './Theme';
import { ThemeProvider } from './ThemeProvider';
import { Wrapper } from './ThemeProvider.stories';
import { FontWeight } from './fonts/weights';
import { useColor } from './hooks';

import { COLORS, CLASSIC_COLORS } from './index';

export default {
  title: 'UI Helpers/Theme',
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['data-testid']
    }
  }
} as Meta;

const Table = styled.table`
  margin-top: 0px;
  border-collapse: collapse;
  color: #767676;
  font-size: 15px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: rgb(51, 51, 51);
  margin-bottom: 20px;
  th {
    font-weight: bold;
    text-align: start;
    border-bottom: 1px solid rgb(232, 232, 232);
  }
  td {
    padding: 4px 16px 4px 0px;
    line-height: 1.5;
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
`;

const Heading = styled.h4`
  ${Typography.Heading4};
  padding: 10px 0;
`;

const InfoTemplate = () => (
  <Wrapper>
    <Heading>Available Values</Heading>
    <Table>
      <thead>
        <tr>
          <th>export name</th>
          <th>usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="200">FieldHeight</td>
          <td>
            enum of standard field heights in px, eg <span>&lt;input&gt;</span>
          </td>
        </tr>
        <tr>
          <td>Spacing</td>
          <td>enum of standard spacing size in px</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>enum used for referencing standard sizing options</td>
        </tr>
        <tr>
          <td>ZIndex</td>
          <td>enum used for separating different z-index usages</td>
        </tr>
        <tr>
          <td>BORDER_RADIUS</td>
          <td>Standard border-radius size (number)</td>
        </tr>
        <tr>
          <td>DEPTH</td>
          <td>list of box-shadow and borders for simulating depth</td>
        </tr>
        <tr>
          <td>COLORS</td>
          <td>
            default base color palette, usage is <span>COLORS.RED.L2</span>
          </td>
        </tr>
        <tr>
          <td>CLASSIC_COLORS</td>
          <td>
            classic theme color palette, should be put inserted in the theme
            object{' '}
          </td>
        </tr>
        <tr>
          <td>DARK_COLORS</td>
          <td>
            dark mode theme color palette, should be inserted in the theme
            object{' '}
          </td>
        </tr>
        <tr>
          <td>getCdnPath</td>
          <td>
            returns a url for the desired font on our tablecheck CDN,{' '}
            <span>cdnUrl</span> must be defined in the node-config{' '}
          </td>
        </tr>
      </tbody>
    </Table>
    <Heading>Available Types</Heading>
    <Table>
      <thead>
        <tr>
          <th>export name</th>
          <th>usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="200">Level</td>
          <td>
            enum used for type checking L1 - L9 key values, usually just COLOR
            keys
          </td>
        </tr>
        <tr>
          <td>LevelConst&lt;T&gt;</td>
          <td>
            object type that requires keys L1 - L9 to be defined, `T` is the
            value type
          </td>
        </tr>
      </tbody>
    </Table>
  </Wrapper>
);

export const Information = InfoTemplate.bind({});

const SpacingTemplate = () => (
  <Wrapper>
    <p>
      Standard spacing set is defined in <span>Spacing</span> object.
    </p>
    {Object.keys(Spacing).map((space) => {
      const StyledDiv = styled.div`
        background: #c7b6f1;
        width: ${Spacing[space as keyof typeof Spacing]};
        height: 20px;
        margin-bottom: 10px;
        margin-right: 10px;
      `;
      const Flex = styled.div`
        display: flex;
      `;
      const Label = styled.div`
        width: '90px';
      `;

      return (
        <Flex key={space}>
          <Label>{`Spacing.${space}`}</Label>
          <StyledDiv />
          <Label>{Spacing[space as keyof typeof Spacing]}</Label>
        </Flex>
      );
    })}
  </Wrapper>
);

export const Spaces = SpacingTemplate.bind({});

const DepthRow = styled.div`
  display: flex;
  padding: 24px;
  background-color: ${COLORS.GRAY.L1};
  justify-content: space-between;
`;

const DepthItem = styled.div<{ depth: { boxShadow: string } }>`
  width: 20%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ depth }) => `box-shadow: ${depth.boxShadow}`};
`;

const DepthTemplate = () => (
  <Wrapper>
    <DepthRow>
      {Object.keys(DEPTH).map((key) => (
        <DepthItem key={key} depth={DEPTH[key as keyof typeof DEPTH]}>
          {key}
        </DepthItem>
      ))}
    </DepthRow>
  </Wrapper>
);

export const Depth = DepthTemplate.bind({});

const Text = styled.p<{ weight: number }>`
  ${({ weight }) => `font-weight: ${weight}`}
`;

const FontWeightTemplate: Story = () => (
  <Wrapper>
    <p>
      The following font-weights are also exported as helpers to go along with
      the font-face definitions that get inserted from{' '}
      <span>ThemeProvider</span>
    </p>
    {[
      FontWeight.ExtraLight,
      FontWeight.Light,
      FontWeight.Regular,
      FontWeight.Medium,
      FontWeight.SemiBold,
      FontWeight.Bold
    ].map((key) => (
      <Text key={key} weight={key}>
        FontWeight.{FontWeight[key]} ({key})
      </Text>
    ))}
  </Wrapper>
);

export const FontWeightExample = FontWeightTemplate.bind({});
FontWeightExample.storyName = 'Font Weight';

const colorKey = 'primary';

const Div = styled.div`
  align-items: center;
  background-color: #c7b6f1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 76px;
  margin: 20px auto;
  width: 400px;
  padding: ${Spacing.L2};
  text-align: center;
  ${({ color }) => `color: ${color}`}
`;

const Example = () => {
  const color = useColor(colorKey);
  return <Div color={color}>Use hooks to get a value ...</Div>;
};

const ThemeHooksTemplate = () => {
  const [presenterTheme, setTheme] = useState({
    colors: {
      ...CLASSIC_COLORS
    }
  });
  useEffect(() => {
    const colors = Object.values(CLASSIC_COLORS);
    const intervalId = setInterval(() => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      setTheme((state) => ({
        colors: {
          ...state.colors,
          [colorKey]: colors[colorIndex]
        }
      }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setTheme]);
  return (
    <ThemeProvider useLocalStyles>
      <EmotionThemeProvider theme={presenterTheme}>
        <Example />
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export const ThemeHooks = ThemeHooksTemplate.bind({});
