import { Placement } from '@popperjs/core';
import { ReactNode } from 'react';
import { Transition } from 'react-transition-group';

enum TransitionState {
  Unmounted = 'unmounted',
  Exited = 'exited',
  Entering = 'entering',
  Entered = 'entered',
  Exiting = 'exiting'
}

type GetAnimationStylesType = (position: Placement) => {
  opacity: number;
  transition: string;
};

const ENTER_DURATION = 120;
const EXIT_DURATION = 80;
const easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
const distance = 8;

const horizontalOffset: { [key in Placement]: number } = {
  auto: 0,
  'auto-start': 0,
  'auto-end': 0,
  'top-start': 0,
  'top-end': 0,
  'bottom-start': 0,
  'bottom-end': 0,
  'right-start': -distance,
  'right-end': -distance,
  'left-start': distance,
  'left-end': distance,
  left: distance,
  right: -distance,
  top: 0,
  bottom: 0
};
const verticalOffset = {
  auto: 0,
  'auto-start': 0,
  'auto-end': 0,
  'top-start': distance,
  'top-end': distance,
  'bottom-start': -distance,
  'bottom-end': -distance,
  'right-start': 0,
  'right-end': 0,
  'left-start': 0,
  'left-end': 0,
  bottom: -distance,
  top: distance,
  left: 0,
  right: 0
};

interface Timeout {
  enter: number;
  exit: number;
}

const defaultStyle = (timeout: Timeout) => ({
  transition: `transform ${timeout.enter}ms ${easing}, opacity ${timeout.enter}ms linear`,
  opacity: 0
});

const transitionStyle = (
  timeout: Timeout,
  state: TransitionState,
  position: Placement
) => {
  const transitions = {
    entering: {
      transform: `translate3d(${horizontalOffset[position]}px, ${verticalOffset[position]}px, 0)`
    },
    entered: {
      opacity: 1
    },
    exiting: {
      opacity: 0,
      transition: `${timeout.exit}ms linear`,
      transform: `translate3d(${horizontalOffset[position] / 2}px, ${
        verticalOffset[position] / 2
      }px, 0)`
    },
    exited: {},
    unmounted: {}
  };
  return transitions[state];
};

const getStyle =
  (timeout: Timeout, state: TransitionState): GetAnimationStylesType =>
  (position) => ({
    ...defaultStyle(timeout),
    ...transitionStyle(timeout, state, position)
  });

export const Animation = ({
  children,
  shouldBeHiddenImmediately,
  shouldBeShownImmediately,
  onExited,
  in: inProp
}: {
  children: (arg0: GetAnimationStylesType) => ReactNode;
  shouldBeHiddenImmediately: boolean;
  shouldBeShownImmediately: boolean;
  in: boolean;
  onExited: () => void;
}): JSX.Element => {
  const timeout: Timeout = {
    enter: shouldBeShownImmediately ? 1 : ENTER_DURATION,
    exit: shouldBeHiddenImmediately ? 1 : EXIT_DURATION
  };
  return (
    <Transition
      timeout={timeout}
      in={inProp}
      onExited={onExited}
      unmountOnExit
      appear
    >
      {(state: TransitionState) => children(getStyle(timeout, state))}
    </Transition>
  );
};
