import { css } from '@emotion/react';
import { FontWeight } from 'utils/constants';

export const typography = css`
  // TODO add @font-face logics here too.
  :root {
    --font-family: 'IBM Plex Sans';
    --headline: ${FontWeight.Bold} 54px / 64px var(--font-family);
    --h1: ${FontWeight.SemiBold} 36px / 48px var(--font-family);
    --h2: 24px / 32px var(--font-family);
    --h3: ${FontWeight.SemiBold} 20px / 24px var(--font-family);
    --h4: ${FontWeight.SemiBold} 16px / 24px var(--font-family);
    --body-1: 16px / 24px var(--font-family);
    --body-2: 14px / 20px var(--font-family);
    --small: 12px / 18px var(--font-family);
    --label: ${FontWeight.SemiBold} 14px / 20px var(--font-family);
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
    font-weight: ${FontWeight.Bold};
  }
`;
