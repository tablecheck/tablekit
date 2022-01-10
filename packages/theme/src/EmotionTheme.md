Extending the emotion theme. Create a `src/definitions/theme.d.ts` file and make the content similar to the following.

```ts
import { BaseTheme, BaseColors } from 'packages/utils/lib/esm/index';

declare module '@emotion/react' {
  interface ThemeColors extends BaseColors {
    highlightedTextBgColor?: string;
  }

  export interface Theme extends BaseTheme {
    colors: ThemeColors;
    someFlag: string;
  }
}
```
