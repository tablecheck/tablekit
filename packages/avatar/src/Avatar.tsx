import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';

import { Container, Image } from './styled';
import { AvatarProps } from './types';

export const Avatar = ({
  size,
  imageUrl,
  initials,
  name,
  ...restProps
}: AvatarProps): JSX.Element => {
  let formattedInitials = initials || '';
  formattedInitials =
    size === Size.XSmall || size === Size.Small || size === Size.Regular
      ? formattedInitials.substring(0, 1).toUpperCase()
      : formattedInitials.toUpperCase();

  let content: JSX.Element | string = <Icon icon={getIcon('user')} />;

  if (initials && size !== Size.XSmall) {
    content = formattedInitials;
  }

  if (imageUrl) {
    content = <Image src={imageUrl} alt={name} title={name} />;
  }

  return (
    <Container {...restProps} size={size || Size.Regular} imageUrl={imageUrl}>
      {content}
    </Container>
  );
};
