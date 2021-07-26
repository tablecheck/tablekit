import { MediaQuery, VariantProps } from '@tablecheck/tablekit-utils';
import { HTMLAttributes } from 'react';
import { AnimationResult, useTransition } from 'react-spring';

import { SpinnerSvg } from './components/SpinnerSvg';
import { SpinnerContainer, SpinnerOuter } from './components/styledContainer';
import { SpinnerSize } from './types';

export type PropsType = VariantProps<
  HTMLAttributes<HTMLSpanElement> & {
    /** custom className to put on the Outer div element */
    className?: string;

    /** Time in milliseconds after component mount before spinner is visible.
     * Note: this currently doesn't work until react-spring v9 is released  */
    delay?: number;

    /** Whether the process is complete and the spinner should leave */
    isCompleting?: boolean;

    /** Handler for once the spinner has completed its outro animation */
    onComplete?: () => void;

    /** size of the spinner */
    size?: MediaQuery<SpinnerSize>;
  }
>;

export function Spinner({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delay = 100,
  isCompleting = false,
  onComplete = () => {},
  className,
  size = SpinnerSize.Regular,
  ...restProps
}: PropsType): JSX.Element {
  const transition = useTransition(!isCompleting, {
    key: isCompleting.toString(),
    from: { opacity: 0, transform: 'rotate(50deg)' },
    enter: { opacity: 1, transform: 'rotate(230deg)', delay },
    leave: { opacity: 0, transform: 'rotate(510deg)' },
    onRest: (result: AnimationResult) => {
      if (result.finished) onComplete();
    }
  });

  return (
    <SpinnerOuter {...restProps} className={className} size={size}>
      {transition(
        (styles, item, { key }) =>
          item && (
            <SpinnerContainer
              key={key}
              size={size}
              style={{
                opacity: styles.opacity?.to({
                  range: !item ? [0, 0.45, 1] : [0, 1],
                  output: !item ? [0, 0, 1] : [0, 1]
                }),
                transform: styles.transform
              }}
            >
              <SpinnerSvg
                focusable="false"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="45" />
              </SpinnerSvg>
            </SpinnerContainer>
          )
      )}
    </SpinnerOuter>
  );
}
