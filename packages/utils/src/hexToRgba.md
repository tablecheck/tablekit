Used as an alternative to `chroma(hexValue).alpha(0.3).css()` as the chroma library is rather large to include just for altering the alpha of a color.

```ts static
import { hexToRgba } from '@tablecheck/tablekit-utils';

hexToRgba('#7935D2', 0.3) === 'rgba(121,35,210,0.3)';
```
