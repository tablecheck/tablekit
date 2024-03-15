import { css } from '@emotion/react';

export const element = 'table';
export const selectors = ['table'];
export const className = 'table';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export const baseStyles = css`
  text-align: start;
  border-spacing: 0;
  border-collapse: separate;
  border: 1px solid var(--border);
  border-radius: var(--border-radius-small);

  & thead {
    font: var(--label);
  }

  & tbody {
    font: var(--body-2);

    & tr[data-pseudo=''],
    & tr:hover {
      transition: none;
      background-color: var(--surface-hover-transparent);
    }
  }

  & tr {
    transition: all 0.3s ease-in-out;
  }

  & th,
  & td {
    vertical-align: baseline;
    white-space: nowrap;
    overflow: hidden;
    padding: var(--spacing-l4);
  }

  & th {
    border-bottom: 1px solid var(--border);
    text-align: left;
    [dir='rtl'] & {
      text-align: right;
    }

    & > .table-resizer {
      display: inline-block;
      position: absolute;
      width: 10px;
      top: 0;
      bottom: 0;
      right: -5px;
      z-index: 10;
    }
  }

  // For reference: https://unused-css.com/blog/css-rounded-table-corners/
  & thead > tr:not(:last-child) > th,
  & thead > tr:not(:last-child) > td,
  & tbody > tr:not(:last-child) > th,
  & tbody > tr:not(:last-child) > td,
  & tfoot > tr:not(:last-child) > th,
  & tfoot > tr:not(:last-child) > td,
  & tr:not(:last-child) > td,
  & tr:not(:last-child) > th,
  & thead:not(:last-child),
  & tbody:not(:last-child),
  & tfoot:not(:last-child) {
    border-bottom: 1px solid var(--border);
  }
`;
