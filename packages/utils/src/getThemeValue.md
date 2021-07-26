A convenience function to retrieve a value off a theme - intended to be used inside themedCss or styled blocks as it returns a props function.

```ts static
const getter = getThemeValue('component.color', 'blue');
getter(); // will resolve to the fallback value and return 'blue'
getter({ theme: { component: { color: 'red' } } }); // will use the theme prop and return to 'red'
```
