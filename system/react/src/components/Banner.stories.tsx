import { Close, Product } from '@carbon/icons-react';
import { Story } from '@storybook/react';

import { classySelector, Banner as BannerWrapper } from './Banner';
import { Button } from './Button';

const bannerTypes = [undefined, 'single', 'dismissed', 'basic'] as const;
const bannerVariants = ['success', 'info', 'warning', 'neutral'] as const;

const titlePlaceholder = 'Tease usefull information';
const descriptionPlaceholder =
  'Educate the user on this area, describe what needs to be done and how to approach it.';

export default {
  title: 'TableKit/Banner',
  component: BannerWrapper,
  parameters: {
    classySelector,
    variants: bannerVariants
  }
};

interface Props {
  title: string;
  description: string;
  agree?: string;
  dismiss?: string;
  'data-type'?: 'single' | 'dismissed' | 'basic';
  'data-variant'?: 'success' | 'info' | 'warning' | 'neutral';
}

function Banner({
  title,
  description,
  agree,
  dismiss,
  'data-type': type,
  'data-variant': variant
}: Props): JSX.Element {
  const hasCloseBtn = type === 'dismissed' || type === 'basic';

  return (
    <BannerWrapper data-variant={variant} className="banner-wrapper">
      {type !== 'basic' && (
        <div className="banner-icon">
          <Product size={32} />
        </div>
      )}
      <h4 className="banner-title">{title}</h4>
      {hasCloseBtn && (
        <div className="banner-close">
          <Close size={24} />
        </div>
      )}
      <aside className="banner-content">{description}</aside>
      {!hasCloseBtn && (
        <div className="banner-actions">
          {type !== 'single' && (
            <Button data-variant="secondary">{agree || 'Button'}</Button>
          )}
          <Button data-variant="ghost">{dismiss || 'Button'}</Button>
        </div>
      )}
    </BannerWrapper>
  );
}

export const AllVariants: Story = () => (
  <>
    {bannerTypes.map((type) =>
      bannerVariants.map((variant) => (
        <Banner
          data-type={type}
          data-variant={variant}
          title={titlePlaceholder}
          description={descriptionPlaceholder}
          agree="Button"
          dismiss="Button"
        />
      ))
    )}
  </>
);
