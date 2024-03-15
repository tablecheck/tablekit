import type { TableKitCSSProperties } from '@tablecheck/tablekit-core';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CSSProperties extends TableKitCSSProperties {}
}
