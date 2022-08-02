import styled from '@emotion/styled';
import { breakpoints } from './layout/styles';

const heroBreakpoint = '@media screen and (max-width: 1000px)';

export const Hero = styled.div`
  margin: 128px auto;
  padding-left: var(--spacing-l6);
  padding-right: var(--spacing-l6);
  max-width: var(--containerWidth);
`;

export const InnerWrapper = styled.div`
  display: flex;
  margin-left: calc(-1 * var(--spacing-l6));
  margin-right: calc(-1 * var(--spacing-l6));

  ${heroBreakpoint} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  margin-left: var(--spacing-l6);
  margin-right: var(--spacing-l6);
  width: 509px;
  height: 239px;

  ${heroBreakpoint} {
    margin-top: 64px;
  }
`;

export const Content = styled.div`
  margin-left: var(--spacing-l6);
  margin-right: var(--spacing-l6);

  ${breakpoints.desktop} {
    width: 58.3333%;
  }
`;

export const Title = styled.h1`
  font-size: 84px;
  font-weight: 600;
  line-height: 150px;
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  line-height: 50px;
  margin-bottom: var(--spacing-l6);
`;

export const Intro = styled.p``;
