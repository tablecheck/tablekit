import { css } from '@emotion/react';

export const ltrSupport = css`
  [dir='ltr'],
  :root {
    --ltr-space: 1px;
    --rtl-space: 0px;
  }
  [dir='rtl'] {
    --ltr-space: 0px;
    --rtl-space: 1px;
  }
`;
