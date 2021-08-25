import { CodeBlock } from '@atlaskit/code';
import styled from '@emotion/styled';
import { Meta, Story } from '@storybook/react';

import { Typography } from '../../typography';

import { mediaQuery, MediaQuery } from './mediaQuery';
import { padding } from './spacing';
import { VariantTemplate } from './storyTemplate';

export default {
  title: 'UI Helpers/Utils',
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

const utilsCode = `
css\`
  \${padding(variant({ variants: { default: getThemeValue('themeValue') } }))}
\`;
`;

const UtilsCodeBlock = ({ children }: { children: JSX.Element }) => (
  <div>{children}</div>
);

const UtilsTemplate = () => (
  <Wrapper>
    <p>
      The utils provided under the <span>@tablecheck/tablekit-utils</span>{' '}
      package are as follows.
    </p>
    <p>
      <b>NOTE:</b> A <em>props function</em> means a function that accepts a
      single Object as arguments, that object should have the <span>theme</span>{' '}
      context object defined on it. The <span>theme</span> object is injected
      into all interpolated functions in
      <span>styled.xyz</span> components and any component wrapped with{' '}
      <span>withTheme</span> from
      <span>emotion-theming</span>.
    </p>
    <Heading>Chaining and auto props function resolution</Heading>
    <p>
      <span>css</span>, <span>variant</span>, <span>getThemeValue</span>,{' '}
      <span>padding</span> and <span>margin</span> will recursively resolve
      functions by assuming that the function expects props. This allows us to
      easily chain the convenience functions as follows
    </p>
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={utilsCode} />
    </UtilsCodeBlock>
  </Wrapper>
);

export const Information = UtilsTemplate.bind({});

const paddinfMarginCode = `
padding({ top: 12, left: '12%', right: '12px' }); // applies correctly
padding('12px'); // sets all padding values to 12px
padding(12); // sets all padding values to 12px
padding(({ isCompact }) => ({ left: isCompact ? 3 : 6 }));
`;

const ResponsiveComponent = styled.div`
  background-color: grey;
  margin: 20px;
  ${mediaQuery(
    {
      'min-width: 800px': 20,
      'min-width: 1200px': 80,
      default: { top: 10, left: 40, bottom: 80, right: 20 }
    },
    padding as any
  )};
`;

// NOTE that you would preferably use `variant` instead of this format
// See the variant example
const ResponsiveProps = styled.div<{ space: MediaQuery<string | number> }>`
  background-color: grey;
  margin: 20px;
  ${mediaQuery('space', padding as any)};
`;

const Inner = styled.div`
  background-color: lightblue;
  color: black;
  text-align: center;
  font-weight: bold;
  padding: 20px;
`;

const PaddingMarginTemplate: Story = () => (
  <Wrapper>
    <p>
      These functions allows consistent definitions of padding and margin
      respecting <span>isRtl</span> on the theme, it returns a props function.{' '}
      <span>padding</span>
      can be directly swapped for <span>margin</span> in all following examples.
    </p>
    <UtilsCodeBlock>
      <CodeBlock
        language="jsx"
        showLineNumbers={false}
        text={paddinfMarginCode}
      />
    </UtilsCodeBlock>
    <ResponsiveProps
      space={{
        'min-width: 800px': 20,
        'min-width: 1200px': 80,
        default: 40
      }}
    >
      <Inner>Responsive Padding from Props</Inner>
    </ResponsiveProps>
    <ResponsiveComponent>
      <Inner>Responsive Padding in Styles Definition</Inner>
    </ResponsiveComponent>
  </Wrapper>
);

export const PaddingMargin = PaddingMarginTemplate.bind({});
PaddingMargin.storyName = 'padding and margin';

const getThemeValueCode = `
const getter = getThemeValue('component.color', 'blue');
getter(); // will resolve to the fallback value and return 'blue'
getter({ theme: { component: { color: 'red' } } }); // will use the theme prop and return to 'red'
`;

const GetThemeValueTemplate: Story = () => (
  <Wrapper>
    <p>
      A convenience function to retrieve a value off a theme - intended to be
      used inside themedCss or styled blocks as it returns a props function.
    </p>
    <UtilsCodeBlock>
      <CodeBlock
        language="jsx"
        showLineNumbers={false}
        text={getThemeValueCode}
      />
    </UtilsCodeBlock>
  </Wrapper>
);

export const GetThemeValue = GetThemeValueTemplate.bind({});
GetThemeValue.storyName = 'getThemeValue';

const hexToRgbaCode = `
import { hexToRgba } from '@tablecheck/tablekit-utils';

hexToRgba('#7935D2', 0.3) === 'rgba(121,35,210,0.3)';
`;

const HexToRgbaTemplate: Story = () => (
  <Wrapper>
    <p>
      Used as an alternative to <span>chroma(hexValue).alpha(0.3).css()</span>{' '}
      as the chroma library is rather large to include just for altering the
      alpha of a color.
    </p>
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={hexToRgbaCode} />
    </UtilsCodeBlock>
  </Wrapper>
);

export const HexToRgba = HexToRgbaTemplate.bind({});
HexToRgba.storyName = 'hexToRgba';

const ifRtlCode = `
styled.div\`
  text-align: \${ifRtl('right', 'left')};
\`;
`;

const ifRtlTemplate: Story = () => (
  <Wrapper>
    <p>
      Inspired by excels <span>iif</span> function to help toggle between
      options dependant on <span>isRtl</span> on the theme, returns a props
      function
    </p>
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={ifRtlCode} />
    </UtilsCodeBlock>
  </Wrapper>
);

export const ifRtl = ifRtlTemplate.bind({});
ifRtl.storyName = 'ifRtl';

const ResizingComponent = styled.div<{
  size: MediaQuery<string | number>;
  background: MediaQuery<string>;
}>`
  height: 60px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  border: 1px solid black;
  padding: 10px;
  ${mediaQuery('size', (currentSize = '80px') => `width: ${currentSize};`)}
  ${mediaQuery(
    ({ background }: any) => background,
    (background = 'red') => `background-color: ${background};`
  )}
`;

const mediaQueryCode = `
type QueryDefinitionType = string | { [string]: T };

function mediaQuery<T>(
  queriesOrGetter: QueryDefinitionType | ((props: *) => QueryDefinitionType),
  renderer: (queryValue?: T) => string = (v) => v
): props => string | EmotionCssObject
`;

const mediaQueryTemplate: Story = () => (
  <Wrapper>
    <p>
      The <span>mediaQuery</span> function is provided as a shortcut to help
      with changing prop values based on media queries. The intent of this
      function was to support changing the &quot;size&quot; prop as used in{' '}
      <span>@tablecheck/tablekit-input</span> and{' '}
      <span>@tablecheck/tablekit-button</span>
      in different browser sizes without having to add in additional elements.
    </p>
    <UtilsCodeBlock>
      <CodeBlock language="jsx" showLineNumbers={false} text={mediaQueryCode} />
    </UtilsCodeBlock>
    <div>
      <p>Component widths change at 800px</p>
      <ResizingComponent
        size={{
          'min-width: 800px': '200px',
          default: '100px'
        }}
        background={{
          'min-width: 800px': 'lightblue',
          default: 'pink'
        }}
      >
        With Default
      </ResizingComponent>
      <ResizingComponent
        size={{
          'min-width: 800px': '120px'
        }}
        background={{
          'min-width: 800px': 'lightblue'
        }}
      >
        Without Default
      </ResizingComponent>
    </div>
  </Wrapper>
);

export const MediaQueryStory = mediaQueryTemplate.bind({});
MediaQueryStory.storyName = 'mediaQuery';

export const variantExample = VariantTemplate.bind({});
variantExample.storyName = 'variant';
