import { CodeBlock } from '@atlaskit/code';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Typography } from '..';

export default {
  title: 'Type System/Typography',
  parameters: {
    layout: 'fullscreen'
  },
  excludeStories: ['Wrapper', 'UtilsCodeBlock', 'Heading']
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
`;

const typographyCode1 = `
import { Global, css } from '@emotion/react';
import {
  desktopTypographyStyles,
  mobileTypographyStyles,
  commonTypographyStyles
} from '@tablecheck/tablekit-typography';

<Global
  styles={css\`
    \${commonTypographyStyles};
    \${mobileTypographyStyles};

    @media (min-width: 1024px) {
      \${desktopTypographyStyles};
    }
  \`}
/>;
`;

const typographyCode2 = `
import {
  TypographyHeadlineDesktop,
  TypographyHeadlineMobile
} from '@tablecheck/tablekit-typography';

const CustomDesktopHeadline = styled.h1\`
  \${TypographyHeadlineDesktop.Headline};
\`;

const CustomMobileHeading = styled.h1\`
  \${TypographyHeadlineMobile.Headline};
\`;
`;

const TypographyCodeBlock = ({ children }: { children: JSX.Element }) => (
  <div>{children}</div>
);

const InfoTemplate: Story = () => (
  <Wrapper>
    <p>Import the base typography styles into a project as global css:</p>
    <TypographyCodeBlock>
      <CodeBlock
        language="jsx"
        showLineNumbers={false}
        text={typographyCode1}
      />
    </TypographyCodeBlock>
    <p>
      Additionally, if a Heading needs specific styles, like the{' '}
      <span>Headline</span>, use the following approach:
    </p>
    <TypographyCodeBlock>
      <CodeBlock
        language="jsx"
        showLineNumbers={false}
        text={typographyCode2}
      />
    </TypographyCodeBlock>
  </Wrapper>
);

export const TypographyExample = InfoTemplate.bind({});
TypographyExample.storyName = 'Typography';
