import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    isRtl: boolean;
    isDark: boolean;
  }
}
