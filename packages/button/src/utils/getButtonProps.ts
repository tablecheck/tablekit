import { Theme } from '@emotion/react';

import {
  Appearance,
  BaseButtonProps,
  ButtonSize,
  Color,
  DerivedButtonProps,
  ButtonShape
} from '../types';

export const isVerticalButton = ({
  appearance
}: BaseButtonProps & {
  disabled?: boolean;
}): boolean =>
  !!appearance &&
  [Appearance.Vertical, Appearance.DisabledVertical].indexOf(appearance) !== -1;

export const getButtonProps = (
  props: BaseButtonProps & {
    disabled?: boolean;
  },
  theme: Theme
): DerivedButtonProps => {
  const {
    children,
    color = Color.Primary,
    size = ButtonSize.Regular,
    disabled: isHtmlDisabled = false,
    shouldFitContainer = false,
    type = 'button',
    ...passThroughProps
  } = props;
  let { appearance = Appearance.Solid, isDisabled = false, shape } = props;
  if (
    appearance === Appearance.Disabled ||
    appearance === Appearance.DisabledVertical ||
    isDisabled ||
    isHtmlDisabled
  ) {
    isDisabled = true;
  }
  if (isDisabled) {
    if (isVerticalButton(props)) {
      appearance = Appearance.DisabledVertical;
    } else {
      appearance = Appearance.Disabled;
    }
  }

  let { iconBefore, iconAfter } = props;
  if (isVerticalButton(props)) {
    iconAfter = undefined;
    iconBefore = iconBefore || iconAfter || (() => '?');
    shape = ButtonShape.Sharp;
  } else if (theme && theme.isRtl) {
    const tempIcon = iconBefore;
    iconBefore = iconAfter;
    iconAfter = tempIcon;
  }

  const isOnlyChild = !!(
    (iconBefore && !iconAfter && !children) ||
    (iconAfter && !iconBefore && !children)
  );

  return {
    ...passThroughProps,
    appearance,
    disabled: isDisabled,
    size,
    isOnlyChild,
    fit: shouldFitContainer,
    children,
    iconBefore,
    iconAfter,
    shape,
    type,
    color
  };
};
