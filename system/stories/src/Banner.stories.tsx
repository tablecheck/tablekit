import { Close, Product } from '@carbon/icons-react';
import { Meta, Story } from '@storybook/react';
import { banner } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const bannerTypes = [undefined, 'single', 'dismissed', 'basic'] as const;
const variants = Object.keys(banner.variantStyles);

export default {
  title: 'TableKit/Banner',
  component: emotion.Banner,
  parameters: {
    ...banner
  }
} as Meta;

const Template: Story = ({ components }) => (
  <>
    {bannerTypes.map((type) =>
      variants.map((variant) => {
        const hasCloseBtn = type === 'dismissed' || type === 'basic';

        return (
          <components.Banner data-variant={variant}>
            {type !== 'basic' && (
              <div className="banner-icon">
                <Product size={32} />
              </div>
            )}
            <h4 className="banner-title">Tease usefull information</h4>
            {hasCloseBtn && (
              <div className="banner-close">
                <Close size={24} />
              </div>
            )}
            <aside className="banner-content">
              Educate the user on this area, describe what needs to be done and
              how to approach it.
            </aside>
            {!hasCloseBtn && (
              <div className="banner-actions">
                {type !== 'single' && (
                  <components.Button data-variant="secondary">
                    Button
                  </components.Button>
                )}
                <components.Button data-variant="ghost">
                  Button
                </components.Button>
              </div>
            )}
          </components.Banner>
        );
      })
    )}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { components: emotion };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { components: css };
Class.parameters = { useEmotion: false };
