import { css } from '@emotion/react';

export const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 125%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  /* Reset fonts to system font family rather than browser */
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 125%;
    vertical-align: baseline;
  }
  body,
  [data-theme] {
    color: var(--text);
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  strong,
  b {
    font-weight: bold;
  }
  sup,
  sub {
    line-height: 0px;
  }
  sub {
    vertical-align: sub;
  }
  sup {
    vertical-align: super;
  }
  em,
  i {
    font-style: italic;
  }
  button {
    background-color: transparent;
  }
  a {
    color: var(--link-disabled);
    &:link {
      color: var(--link);
    }
    &:hover,
    &:active {
      color: var(--link-hover);
    }
    &:visited {
      color: var(--link-visited);
    }
  }
`;
