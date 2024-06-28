import { css } from '../utils';

export const element = 'table';
export const selectors = ['table'];
export const className = 'table';

export interface Props {
  'data-variant'?: 'default' | 'striped';
}

export interface TableTdProps {
  'data-cell-type'?: 'button' | 'badge';
}

export const fullStyles = css`
  text-align: start;
  border-spacing: 0;
  border-collapse: separate;
  border: 1px solid var(--border);
  border-radius: var(--border-radius-small);
  & tr {
    background-color: var(--tk-table-row-background);
  }

  & thead {
    font: var(--label);

    & tr {
      --tk-table-row-background: var(--surface-raised);
    }
  }

  &[data-variant='striped'] tbody tr:not([data-active='true']):nth-child(even) {
    --tk-table-row-background: var(--surface-low);
    &:hover {
      --tk-table-row-background: var(--surface-low-hover);
    }
  }

  & tbody {
    font: var(--body-2);

    & tr:hover {
      --tk-table-row-background: var(--surface-raised-hover);
    }

    & tr[data-active='true'] {
      --tk-table-row-background: var(--surface-raised-active);
    }
  }

  & th,
  & td {
    white-space: nowrap;
    overflow: hidden;
  }

  & th {
    padding: 0px var(--spacing-l4);
    border-bottom: 1px solid var(--border);
    text-align: start;
    vertical-align: middle;
    line-height: 44px;
    height: 44px;

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

  & td {
    padding: var(--spacing-l3) var(--spacing-l4);
    line-height: 24px;
    vertical-align: top;
  }

  & td[data-cell-type='button'] {
    padding: var(--spacing-l2) var(--spacing-l4);
    text-align: center;
  }

  & td[data-cell-type='badge'] {
    padding: calc(var(--spacing-l3) - 1px) var(--spacing-l4);
  }

  /* For reference: https://unused-css.com/blog/css-rounded-table-corners/ */
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
