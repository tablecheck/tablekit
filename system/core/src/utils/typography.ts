import { css } from '@emotion/react';

export const typography = css`
  :root {
    --headline: 700 54px / 64px var(--font-family);
    --h1: 600 36px / 48px var(--font-family);
    --h2: 400 24px / 32px var(--font-family);
    --h3: 600 20px / 24px var(--font-family);
    --h4: 600 16px / 24px var(--font-family);
    --body-1: 400 16px / 24px var(--font-family);
    --body-2: 400 14px / 20px var(--font-family);
    --small: 400 12px / 18px var(--font-family);
    --label: 600 14px / 20px var(--font-family);
  }
  header h1 {
    font: var(--headline);
  }
  h1 {
    font: var(--h1);
  }
  h2 {
    font: var(--h2);
  }
  h3 {
    font: var(--h3);
  }
  h4 {
    font: var(--h4);
  }
  body,
  p {
    font: var(--body-1);
  }
  aside {
    font: var(--body-2);
  }
  small {
    font: var(--small);
  }
  label {
    font: var(--label);
  }

  b,
  strong {
    font-weight: 700;
  }
`;
