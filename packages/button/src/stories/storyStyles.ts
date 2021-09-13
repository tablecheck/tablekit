import styled from '@emotion/styled';
import { Typography } from '@tablecheck/tablekit-typography';

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
      margin: 0 2px;
      padding: 3px 5px;
      white-space: nowrap;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid #eeeeee;
      background-color: #f8f8f8;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const RotatorButton = styled.button`
  &[data-state='open'] svg {
    transform: rotate(180deg);
  }
`;
