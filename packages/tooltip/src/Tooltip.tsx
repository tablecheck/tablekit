import { Component, FocusEvent, MouseEvent } from 'react';
import { Manager, Popper, Reference } from 'react-popper';

import { Animation } from './components/Animation';
import { Container, Tooltip as StyledTooltip } from './styled';
import { TooltipProps, TooltipState } from './types';
import { defaultPopperModifiers, hideTooltip, showTooltip } from './utils';

const DEFAULT_DELAY = 300;
const DEFAULT_POPPER_PROPS: NonNullable<TooltipProps['popperProps']> = {
  placement: 'bottom'
};

export class Tooltip extends Component<TooltipProps, TooltipState> {
  wrapperRef?: HTMLElement | null;

  targetRef?: HTMLElement | null;

  // eslint-disable-next-line react/static-property-placement
  static defaultProps: Pick<TooltipProps, 'delay' | 'popperProps'> = {
    delay: DEFAULT_DELAY,
    popperProps: DEFAULT_POPPER_PROPS
  };

  constructor(props: TooltipProps) {
    super(props);
    this.state = {
      shouldBeHiddenImmediately: false,
      shouldBeShownImmediately: false,
      isVisible: false,
      shouldRender: false
    };
  }

  componentDidUpdate(prevProps: TooltipProps, prevState: TooltipState): void {
    const { isVisible } = this.state;
    const { onShow, onHide } = this.props;
    const scrollOptions = { capture: true, passive: true };

    if (!prevState.isVisible && isVisible) {
      if (onShow) onShow();

      window.addEventListener('scroll', this.handleWindowScroll, scrollOptions);
    } else if (prevState.isVisible && !isVisible) {
      if (onHide) onHide();

      window.removeEventListener(
        'scroll',
        this.handleWindowScroll,
        scrollOptions
      );
    }
  }

  handleMouseOver = (event: MouseEvent<HTMLDivElement>): void => {
    if (event.target === this.wrapperRef) return;
    const { content, delay } = this.props;
    const { isVisible } = this.state;
    this.cancelPendingSetState();
    if (Boolean(content) && !isVisible) {
      this.cancelPendingSetState = showTooltip((immediatelyShow) => {
        this.setState({
          isVisible: true,
          shouldRender: true,
          shouldBeShownImmediately: immediatelyShow
        });
      }, delay || DEFAULT_DELAY);
    }
  };

  handleMouseClick = (): void => {
    const { shouldHideOnClick } = this.props;
    if (shouldHideOnClick) {
      this.cancelPendingSetState();
      this.setState({ isVisible: false, shouldBeHiddenImmediately: true });
    }
  };

  handleWindowScroll = (): void => {
    const { isVisible } = this.state;
    if (isVisible) {
      this.cancelPendingSetState();
      this.setState({ isVisible: false, shouldBeHiddenImmediately: true });
    }
  };

  handleMouseLeave = (
    event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>
  ): void => {
    if (event.target === this.wrapperRef) return;
    this.cancelPendingSetState();
    const { isVisible } = this.state;
    const { delay } = this.props;
    if (isVisible) {
      this.cancelPendingSetState = hideTooltip((immediatelyHide) => {
        this.setState({
          isVisible: false,
          shouldBeHiddenImmediately: immediatelyHide
        });
      }, delay || DEFAULT_DELAY);
    }
  };

  handleMouseDown = (): void => {
    const { shouldHideOnMouseDown } = this.props;
    if (shouldHideOnMouseDown) {
      this.cancelPendingSetState();
      this.setState({ isVisible: false, shouldBeHiddenImmediately: true });
    }
  };

  cancelPendingSetState = (): void => {};

  render(): JSX.Element {
    const {
      children,
      content,
      popperProps = DEFAULT_POPPER_PROPS,
      shouldTruncate,
      className,
      ...restProps
    } = this.props;
    const {
      isVisible,
      shouldRender,
      shouldBeShownImmediately,
      shouldBeHiddenImmediately
    } = this.state;
    const correctedPopperProps: TooltipProps['popperProps'] = {
      strategy: 'fixed',
      ...popperProps,
      modifiers: [...defaultPopperModifiers, ...(popperProps.modifiers || [])]
    };

    return (
      <Container
        className={className}
        onClick={this.handleMouseClick}
        onMouseOver={this.handleMouseOver}
        onFocus={this.handleMouseLeave}
        onMouseOut={this.handleMouseLeave}
        onBlur={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        ref={(wrapperRef) => {
          this.wrapperRef = wrapperRef;
        }}
      >
        <Manager>
          <Reference>
            {({ ref }) =>
              children((node) => {
                if (typeof ref === 'function') {
                  ref(node);
                  this.targetRef = node;
                }
              })
            }
          </Reference>
          {shouldRender && this.targetRef ? (
            <Popper {...correctedPopperProps}>
              {({ ref, style, placement }) => (
                <Animation
                  shouldBeShownImmediately={shouldBeShownImmediately}
                  shouldBeHiddenImmediately={shouldBeHiddenImmediately}
                  onExited={() => this.setState({ shouldRender: false })}
                  in={isVisible}
                >
                  {(getAnimationStyles) => (
                    <StyledTooltip
                      {...restProps}
                      ref={ref}
                      style={{
                        ...getAnimationStyles(placement),
                        ...style
                      }}
                      shouldTruncate={shouldTruncate}
                    >
                      {content}
                    </StyledTooltip>
                  )}
                </Animation>
              )}
            </Popper>
          ) : null}
        </Manager>
      </Container>
    );
  }
}
