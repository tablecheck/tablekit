Inspired by excels `iif` function to help toggle between options dependant on `isRtl` on the theme, returns a props function

```ts static
styled.div`
  text-align: ${ifRtl('right', 'left')};
`;
```
