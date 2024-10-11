import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  font: var(--body-1);
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  width: 94% !important;
  p,
  ul {
    padding: 10px 0;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 3px 5px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      color: rgba(51, 51, 51, 0.9);
      background-color: #f8f8f8;
    }
  }
  ul {
    list-style: disc;
    li {
      padding-bottom: var(--spacing-l2);
    }
  }
`;

export const Table = styled.table`
  margin-top: 0px;
  border-collapse: collapse;
  color: var(--text);
  font: var(--body-2);
  margin-bottom: var(--spacing-l5);
  th {
    font-weight: bold;
    text-align: start;
    border-bottom: 1px solid var(--border);
  }
  td {
    padding-top: var(--spacing-l2);
    padding-bottom: var(--spacing-l2);
    padding-inline-start: 0;
    -webkit-padding-start: 0;
    padding-inline-end: var(--spacing-l4);
    -webkit-padding-end: var(--spacing-l4);
    line-height: 1.5;
  }
`;
