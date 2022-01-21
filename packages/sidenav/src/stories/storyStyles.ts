import styled from '@emotion/styled';
import { FieldHeight, Size } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

export const Container = styled.div<{ forceScroll?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: ${({ forceScroll }) => (forceScroll ? '300px' : '100vh')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1 1 100%;
  ${({ theme }) =>
    `
    background-color: ${theme.colors.canvas};
    &, & * {
     color: ${theme.colors.text};
    }`};
`;

export const Text = styled.p`
  padding: 0 20px;
`;

export const LinkFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  & > * {
    margin: 0 4px;
    padding: 4px;

    &.active:after {
      display: inline;
      content: ' (active)';
    }
  }
`;

export const Header = styled.div<{
  size: Size.Regular | Size.Large | undefined;
}>`
  ${`font-weight: bold;`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ size }) =>
    size !== Size.Large
      ? `line-height: ${FieldHeight.Regular}; padding: 12px 20px;  font-size: 14px; line-height: 20px;`
      : `line-height: ${FieldHeight.Large}; padding: 18px 24px; font-size: 18px; line-height: 24px;`}
`;

export const Description = styled.div`
  ${Typography.Body1};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 94%;
  padding-top: 20px;
  p {
    padding-bottom: 10px;
    span {
      line-height: 1;
      margin: 0 2px;
      padding: 2px 4px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.surfaceHigh};
    }
  }
`;

export const Heading = styled.h4`
  ${Typography.Heading4};
  padding: 10px 0;
`;

export const Table = styled.table`
  margin-top: 0px;
  margin-bottom: 16px;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.textSubtle};
  th {
    font-weight: bold;
    text-align: start;
  }
  td {
    padding: 4px 16px 4px 0px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }
`;
