import styled from '@emotion/styled';
import { Typography } from '@tablecheck/tablekit-typography';

export const Wrapper = styled.div`
  ${Typography.Body1};
  margin: 20px auto 0;
  display: flex;
  width: 94% !important;
  height: 400px;
  justify-content: center;
  align-items: center;
  table {
    border: 1px solid #e4e4e4;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  input {
    width: 50px;
  }
`;

export const MonthsWrapper = styled.div`
  display: flex;
  & > div {
    margin-right: 10px;
  }
  h2 {
    text-transform: uppercase;
    padding-bottom: 6px;
  }
`;

export const InfoWrapper = styled.div`
  ${Typography.Body1};
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
      padding-bottom: 10px;
    }
  }
`;

export const Table = styled.table`
  margin-top: 0px;
  border-collapse: collapse;
  color: #767676;
  font-size: 15px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: rgb(51, 51, 51);
  margin-bottom: 20px;
  th {
    font-weight: bold;
    text-align: start;
    border-bottom: 1px solid rgb(232, 232, 232);
  }
  td {
    padding: 4px 16px 4px 0px;
    line-height: 1.5;
  }
`;
