import '@emotion/react';
import { TableKitCSSProperties } from '@tablecheck/tablekit-core';

declare module '@emotion/react' {
  export interface Theme {
    isRtl: boolean;
    isDark: boolean;
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CSSProperties extends TableKitCSSProperties {}
}
