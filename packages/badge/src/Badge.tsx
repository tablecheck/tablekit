import { BadgeContainer } from './styled';
import { BadgeProps } from './types';

export const Badge = ({
  children,
  value,
  maxValue,
  ...restProps
}: BadgeProps): JSX.Element => {
  if (children) {
    return <BadgeContainer {...restProps}>{children}</BadgeContainer>;
  }

  let badgeValue: string | number = typeof value !== 'undefined' ? value : '';

  if (maxValue) {
    badgeValue = badgeValue > maxValue ? `${maxValue}+` : badgeValue;
  }

  return <BadgeContainer {...restProps}>{badgeValue}</BadgeContainer>;
};
