import { ButtonAppearance, ButtonSize } from '@tablecheck/tablekit-button';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';

import {
  adjustedIconSizes,
  AlertIcon,
  BannerContainer,
  BannerMessageContainer,
  CloseButton
} from './styled';
import { Appearance, BannerProps } from './types';

export const Banner = ({
  appearance = Appearance.Primary,
  className,
  customIcon,
  isDismissible,
  message,
  onClose,
  size = Size.Regular,
  ...restProps
}: BannerProps): JSX.Element => {
  const displayedIcon = customIcon || getIcon(appearance);
  return (
    <BannerContainer
      {...restProps}
      className={className}
      appearance={appearance}
      size={size}
    >
      <BannerMessageContainer>
        {displayedIcon && (
          <AlertIcon
            className="bannerIcon"
            icon={displayedIcon}
            size={adjustedIconSizes[size]}
          />
        )}
        <div>{message}</div>
      </BannerMessageContainer>
      {isDismissible && (
        <CloseButton
          onClick={onClose}
          appearance={ButtonAppearance.Subtle}
          size={ButtonSize.Small}
          isIndented={size !== Size.Regular}
          iconBefore={<Icon className="bannerIcon" icon={getIcon('close')} />}
        />
      )}
    </BannerContainer>
  );
};
