The utils provided under the `@tablecheck/tablekit-utils` package are as follows.

**NOTE:** A `props function` means a function that accepts a single Object as arguments, that object should have the `theme` context object defined on it.
The `theme` object is injected into all interpolated functions in `styled.xyz` components and any component wrapped with `withTheme` from `emotion-theming`.

### Chaining and auto props function resolution

`css`, `variant`, `getThemeValue`, `padding` and `margin` will recursively resolve functions by assuming that the function expects props. This allows us to easily chain the convenience functions as follows;

```ts static
css`
  ${padding(variant({ variants: { default: getThemeValue('themeValue') } }))}
`;
```

## `padding` and `margin`

These functions allows consistent definitions of padding and margin respecting `isRtl` on the theme, it returns a props function.
`padding` can be directly swapped for `margin` in all following examples.

```ts static
padding({ top: 12, left: '12%', right: '12px' }); // applies correctly
padding('12px'); // sets all padding values to 12px
padding(12); // sets all padding values to 12px
padding(({ isCompact }) => ({ left: isCompact ? 3 : 6 }));
```
