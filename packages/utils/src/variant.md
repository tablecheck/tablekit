A fork of [@xstyled variant](https://www.smooth-code.com/open-source/xstyled/docs/variants/) utility.

This variant uses the value passed in the props of the styled component to select the correct value. This is most commonly used with the `appearance` prop.
The passed prop may also be a `MediaQueryObject` object where different media queries return different results.
There is also the additional property called `useVariantAsClass` which renders the variants as classes, useful for third party integration.

```tsx
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { variant } from './variant';

const StyledVariant = styled.div`
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

<StyledVariant interactionState="active">Text is green</StyledVariant>;
```

#### `useVariantAsClass` mode

An example of this is used in the `@tablecheck/tablekit-item` component for us to support react-router's NavLink component that requires usage of either a `activeClassName` or `activeStyles` prop.
The values for `useVariantAsClass` are either `keyof Props` or a `keyof Props[]`

```ts static
const StyledVariant = styled.div`
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

<StyledVariant useVariantAsClass="interactionState" />;
```

The above code will generate the following stylesheet;

```css static
.StyledVariant:not(.active):not(.disabled) {
  color: blue;
}

.StyledVariant.active {
  color: green;
}

.StyledVariant.danger {
  color: red;
}
```
