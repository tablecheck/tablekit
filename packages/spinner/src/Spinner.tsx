import { MediaQuery, VariantProps } from '@tablecheck/tablekit-utils';
import { HTMLAttributes } from 'react';

import { SpinnerSvg } from './components/SpinnerSvg';
import { SpinnerContainer, SpinnerOuter } from './components/styledContainer';
import { SpinnerSize } from './types';

export type PropsType = VariantProps<
  HTMLAttributes<HTMLSpanElement> & {
    /** custom className to put on the Outer div element */
    className?: string;

    /** size of the spinner */
    size?: MediaQuery<SpinnerSize>;
  }
>;

export function Spinner({
  className,
  size = SpinnerSize.Regular,
  ...restProps
}: PropsType): JSX.Element {
  return (
    <SpinnerOuter {...restProps} className={className} size={size}>
      <SpinnerContainer size={size}>
        <SpinnerSvg
          focusable="false"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
        </SpinnerSvg>
      </SpinnerContainer>
    </SpinnerOuter>
  );
}
