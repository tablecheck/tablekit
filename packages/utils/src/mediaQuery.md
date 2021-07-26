The `mediaQuery` function is provided as a shortcut to help with changing prop values based on media queries.
The intent of this function was to support changing the "size" prop as used in `@tablecheck/tablekit-input` and `@tablecheck/tablekit-button`
in different browser sizes without having to add in additional elements.

```flow static
type QueryDefinitionType = string | { [string]: T };

function mediaQuery<T>(
  queriesOrGetter: QueryDefinitionType | ((props: *) => QueryDefinitionType),
  renderer: (queryValue?: T) => string = (v) => v
): props => string | EmotionCssObject
```

```tsx
import styled from '@emotion/styled';
import { mediaQuery } from './mediaQuery';

const ResizingComponent = styled.div`
  height: 60px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  border: 1px solid black;
  ${mediaQuery('size', (currentSize = '80px') => `width: ${currentSize};`)}
  ${mediaQuery(
    (props) => props.background,
    (background = 'red') => `background-color: ${background};`
  )}
`;

<div>
  <p>Component widths change at 800px</p>
  <ResizingComponent
    size={{
      'min-width: 800px': '200px',
      default: '100px'
    }}
    background={{
      'min-width: 800px': 'blue',
      default: 'green'
    }}
  >
    With Default
  </ResizingComponent>
  <ResizingComponent
    size={{
      'min-width: 800px': '120px'
    }}
    background={{
      'min-width: 800px': 'blue'
    }}
  >
    Without Default
  </ResizingComponent>
</div>;
```

### Usage with `padding` and `margin`

```tsx
import styled from '@emotion/styled';
import { mediaQuery } from './mediaQuery';
import { padding } from './spacing';

const ResponsiveComponent = styled.div`
  background-color: red;
  margin: 20px;
  ${mediaQuery(
    {
      'min-width: 800px': 20,
      'min-width: 1200px': 80,
      default: { top: 10, left: 40, bottom: 80, right: 20 }
    },
    padding
  )};
`;

// NOTE that you would preferably use `variant` instead of this format
// See the variant example
const ResponsiveProps = styled.div`
  background-color: red;
  margin: 20px;
  ${mediaQuery('space', padding)};
`;

const Inner = styled.div`
  background-color: blue;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 20px;
`;

<div>
  <ResponsiveProps
    space={{
      'min-width: 800px': 20,
      'min-width: 1200px': 80,
      default: { top: 10, left: 40, bottom: 80, right: 20 }
    }}
  >
    <Inner>Responsive Padding from Props</Inner>
  </ResponsiveProps>

  <ResponsiveComponent>
    <Inner>Responsive Padding in Styles Definition</Inner>
  </ResponsiveComponent>
</div>;
```

### Usage with `variant`

`variant` has `mediaQuery` built in by default so you just need to correctly pass the prop. Note that the variants _MUST_ be css strings. You cannot do a variant on only the value.

```tsx
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant } from './variant';
import { padding } from './spacing';

const ResponsiveComponent = styled.div`
  background-color: red;
  margin: 20px;
  ${variant({
    prop: 'space',
    variants: {
      S: padding(20),
      M: 'padding: 40px',
      L: css`
        padding: 80px;
      `
    }
  })};
`;

const Inner = styled.div`
  background-color: blue;
  color: white;
  text-align: center;
  font-weight: bold;
  padding: 20px;
`;

<ResponsiveComponent
  space={{
    'min-width: 800px': 'M',
    'min-width: 1200px': 'L',
    default: 'S'
  }}
>
  <Inner>Responsive Padding via Variant</Inner>
</ResponsiveComponent>;
```
