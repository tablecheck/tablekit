import { CodeBlock } from '@atlaskit/code';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import { Link, Typography } from '../../typography';

import { variant } from './variant';

const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
  p {
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

const Heading = styled.h4`
  ${Typography.Heading4};
  padding: 10px 0;
`;

export const UtilsCodeBlock = ({
  children
}: {
  children: JSX.Element;
}): JSX.Element => <div>{children}</div>;

const StyledVariant = styled.div<{ interactionState: string }>`
  ${variant({
    prop: 'interactionState',
    variants: {
      default: css`
        color: blue;
      `,
      active: css`
        color: green;
      `,
      danger: css`
        color: red;
      `
    }
  })}
`;

const VariantCode1 = `
const StyledVariant = styled.div\`
  \${variant({
    prop: 'interactionState',
    variants: {
      default: css\`
        color: blue;
      \`,
      active: css\`
        color: green;
      \`,
      danger: css\`
        color: red;
      \`
    }
  })}
\`;

<StyledVariant useVariantAsClass="interactionState" />;
`;

const VariantCode2 = `
.StyledVariant:not(.active):not(.disabled) {
  color: blue;
}

.StyledVariant.active {
  color: green;
}

.StyledVariant.danger {
  color: red;
}
`;

export const VariantTemplate: Story = () => (
  <Wrapper>
    <p>
      A fork of{' '}
      <Link href="https://www.smooth-code.com/open-source/xstyled/docs/variants/">
        @xstyled variant
      </Link>{' '}
      utility.
    </p>
    <p>
      This variant uses the value passed in the props of the styled component to
      select the correct value. This is most commonly used with the{' '}
      <span>appearance</span> prop. The passed prop may also be a{' '}
      <span>MediaQueryObject</span> object where different media queries return
      different results. There is also the additional property called{' '}
      <span>useVariantAsClass</span> which renders the variants as classes,
      useful for third party integration.
    </p>
    <Heading>useVariantAsClass</Heading>
    <p>
      An example of this is used in the <span>@tablecheck/tablekit-item</span>{' '}
      component for us to support react-router&apos;s <span>NavLink</span>{' '}
      component that requires usage of either a <span>activeClassName</span> or{' '}
      <span>activeStyles</span> prop. The values for
      <span>useVariantAsClass</span> are either <span>keyof Props</span> or a{' '}
      <span>keyof Props[]</span>
    </p>
    <StyledVariant interactionState="active">Text is green</StyledVariant>
    <br />
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={VariantCode1} />
    </UtilsCodeBlock>
    <p>The above code will generate the following stylesheet:</p>
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={VariantCode2} />
    </UtilsCodeBlock>
  </Wrapper>
);
