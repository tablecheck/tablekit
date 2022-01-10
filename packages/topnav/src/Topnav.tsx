import { Container } from './constants';
import { NavBarWrapper, InlineContainer } from './styled';
import { TopNavProps } from './types';

export const TopNav = ({
  className,
  hasCenterContainer,
  height,
  leftContent,
  centerContent,
  rightContent,
  ...restProps
}: TopNavProps): JSX.Element => (
  <NavBarWrapper {...restProps} className={className} height={height}>
    <InlineContainer id={Container.Left} height={height}>
      {leftContent}
    </InlineContainer>
    {(hasCenterContainer || centerContent) && (
      <InlineContainer id={Container.Center} height={height}>
        {centerContent}
      </InlineContainer>
    )}
    <InlineContainer id={Container.Right} height={height}>
      {rightContent}
    </InlineContainer>
  </NavBarWrapper>
);
