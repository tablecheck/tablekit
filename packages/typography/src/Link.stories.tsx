import { CodeBlock } from '@atlaskit/code';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Typography } from '..';

import { Link } from './Link';

export default {
  title: 'Type System/Link',
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
`;

const linkCode = `
import { Link } from './Link';
import { ThemeProvider } from '@tablecheck/tablekit-theme';

<ThemeProvider useLocalStyles>
  <Link href="#3">Here is a link on it's own</Link>
</ThemeProvider>;
`;

const TypographyCodeBlock = ({ children }: { children: JSX.Element }) => (
  <div>{children}</div>
);

const Template: Story = () => (
  <Wrapper>
    <div>
      <Link href="#3">Here is a link on it is own</Link>
    </div>
    <br />
    <TypographyCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={linkCode} />
    </TypographyCodeBlock>
  </Wrapper>
);

export const LinkExample = Template.bind({});
LinkExample.storyName = 'Link';
