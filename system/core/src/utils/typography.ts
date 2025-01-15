import { css } from '../utils';

export const typography = css`
  :root {
    --headline-font-weight: 700;
    --headline-font-size: 54px;
    --headline-line-height: 64px;
    --headline: var(--headline-font-weight)
      var(--tk-headline-font-size, var(--headline-font-size)) /
      var(--tk-headline-line-height, var(--headline-line-height))
      var(--font-family);
    --h1-font-weight: 600;
    --h1-font-size: 36px;
    --h1-line-height: 48px;
    --h1: var(--h1-font-weight) var(--tk-h1-font-size, var(--h1-font-size)) /
      var(--tk-h1-line-height, var(--h1-line-height)) var(--font-family);
    --h2-font-weight: 400;
    --h2-font-size: 24px;
    --h2-line-height: 32px;
    --h2: var(--h2-font-weight) var(--tk-h2-font-size, var(--h2-font-size)) /
      var(--tk-h2-line-height, var(--h2-line-height)) var(--font-family);
    --h3-font-weight: 600;
    --h3-font-size: 20px;
    --h3-line-height: 24px;
    --h3: var(--h3-font-weight) var(--tk-h3-font-size, var(--h3-font-size)) /
      var(--tk-h3-line-height, var(--h3-line-height)) var(--font-family);
    --h4-font-weight: 400;
    --h4-font-size: 20px;
    --h4-line-height: 24px;
    --h4: var(--h4-font-weight) var(--tk-h4-font-size, var(--h4-font-size)) /
      var(--tk-h4-line-height, var(--h4-line-height)) var(--font-family);
    --h5-font-weight: 600;
    --h5-font-size: 16px;
    --h5-line-height: 24px;
    --h5: var(--h5-font-weight) var(--tk-h5-font-size, var(--h5-font-size)) /
      var(--tk-h5-line-height, var(--h5-line-height)) var(--font-family);
    --body-1-font-weight: 400;
    --body-1-font-size: 16px;
    --body-1-line-height: 24px;
    --body-1: var(--body-1-font-weight)
      var(--tk-body-1-font-size, var(--body-1-font-size)) /
      var(--tk-body-1-line-height, var(--body-1-line-height)) var(--font-family);
    --body-2-font-weight: 400;
    --body-2-font-size: 14px;
    --body-2-line-height: 20px;
    --body-2: var(--body-2-font-weight)
      var(--tk-body-2-font-size, var(--body-2-font-size)) /
      var(--tk-body-2-line-height, var(--body-2-line-height)) var(--font-family);
    --small-font-weight: 400;
    --small-font-size: 12px;
    --small-line-height: 18px;
    --small: var(--small-font-weight)
      var(--tk-small-font-size, var(--small-font-size)) /
      var(--tk-small-line-height, var(--small-line-height)) var(--font-family);
    --label-font-weight: 600;
    --label-font-size: 14px;
    --label-line-height: 20px;
    --label: var(--label-font-weight)
      var(--tk-label-font-size, var(--label-font-size)) /
      var(--tk-label-line-height, var(--label-line-height)) var(--font-family);
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
  h5 {
    font: var(--h5);
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
  label,
  h6 {
    font: var(--label);
  }

  b,
  strong {
    font-weight: 700;
  }
`;
