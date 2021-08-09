import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@tablecheck/tablekit-typography';

import { TopNav } from '../index';

export const Wrapper = styled.div`
  ${Typography.Body1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  p {
    margin-bottom: 20px;
  }
`;

const sharedStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContent = styled.div`
  ${sharedStyles};
  background-color: rgba(255, 0, 0, 0.6);
`;

export const CenterContent = styled.div`
  ${sharedStyles};
  background-color: rgba(0, 200, 0, 0.6);
`;

export const RightContent = styled.div`
  ${sharedStyles};
  background-color: rgba(0, 0, 200, 0.6);
`;

export const CustomTopNav = styled(TopNav)`
  height: 100px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;

  *:first-of-type {
    padding: 0;
    border: none;

    &:hover {
      border: none;
      background-color: transparent;
      padding: 0;
    }

    &:focus {
      border-radius: 4px;
      height: 30px;
      margin: 5px 0;
    }
  }
`;

export const HiltonLogo = styled.img`
  width: 200px;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;
`;

export const StyledUserLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 3%;

  *:first-of-type {
    padding: 0;
    border: none;

    &:hover {
      border: none;
      background-color: transparent;
      padding: 0;
    }

    &:focus {
      border-radius: 4px;
      height: 30px;
      margin: 5px 0;
    }
  }
`;
