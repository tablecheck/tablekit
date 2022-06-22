import { css } from '@emotion/react';

import { FontWeight } from './constants';

export const typography = css`
  --font-family: 'IBM Plex Sans';
  --headline: ${FontWeight.Bold} 54px / 64px var(--font-family);
  header h1 {
    font: var(--headline);
  }
  --h1: ${FontWeight.SemiBold} 36px / 48px var(--font-family);
  h1 {
    font: var(--h1);
  }
  --h2: 24px / 32px var(--font-family);
  h2 {
    font: var(--h2);
  }
  --h3: ${FontWeight.SemiBold} 20px / 24px var(--font-family);
  h3 {
    font: var(--h3);
  }
  --h4: ${FontWeight.SemiBold} 16px / 24px var(--font-family);
  h4 {
    font: var(--h4);
  }
  --body-1: 16px / 24px var(--font-family);
  body,
  p {
    font: var(--body-1);
  }
  --body-2: 14px / 20px var(--font-family);
  aside {
    font: var(--body-2);
  }
  --small: 12px / 18px var(--font-family);
  small {
    font: var(--small);
  }
  --label: ${FontWeight.SemiBold} 14px / 20px var(--font-family);
  label {
    font: var(--label);
  }

  b,
  strong {
    font-weight: ${FontWeight.Bold};
  }
`;
