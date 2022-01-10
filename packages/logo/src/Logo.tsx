import { MediaQuery } from '@tablecheck/tablekit-utils';

import { LogoSymbol } from './LogoSymbol';
import { LogoWording } from './LogoWording';
import { LogoWrapper } from './styled';

export type Props = {
  /** custom className to put on the Outer div element */
  className?: string;

  /** force the dark version */
  isDarkTheme?: boolean;

  /** custom display for wording based on mediaqueries */
  display?: MediaQuery<string>;

  /** custom height and width for the symbol */
  symbolSize?: string;

  /** custom width for the wording */
  wordingSize?: string;
};

export const Logo = ({
  className,
  display,
  isDarkTheme,
  symbolSize = '24px',
  wordingSize = '96px'
}: Props): JSX.Element => (
  <LogoWrapper className={className}>
    <LogoSymbol size={symbolSize} isDarkTheme={isDarkTheme} />
    <LogoWording
      display={display}
      size={wordingSize}
      isDarkTheme={isDarkTheme}
    />
  </LogoWrapper>
);
