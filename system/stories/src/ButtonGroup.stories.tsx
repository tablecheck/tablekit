import { FavoriteFilled } from '@carbon/icons-react';
import { Meta, Story } from '@storybook/react';
import { buttonGroup } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  'Default',
  'Hover',
  'Focus',
  'Focus Before',
  'Focus After',
  'Active'
] as const;

const meta: Meta = {
  title: 'Components/ButtonGroup',
  component: emotion.ButtonGroup,
  parameters: {
    ...buttonGroup,
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
};

export default meta;

const sizes = ['small', 'medium', 'large'] as const;

const Template: Story = ({ ButtonGroup }) => (
  <>
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {[-1, 0, 1, 2].map((selectedIndex) =>
          contentVariants.map((variant) => (
            <ButtonGroup data-size={size}>
              {['icon', 'text', 'icon+text'].map((type, index) => {
                let dataPseudo = 'default';
                switch (variant) {
                  case 'Default':
                  case 'Hover':
                  case 'Active':
                    if (selectedIndex === -1 && index === 1) {
                      dataPseudo = variant.toLowerCase();
                    }
                    break;
                  case 'Focus After':
                  case 'Focus Before':
                  case 'Focus': {
                    if (
                      selectedIndex !== -1 &&
                      ((variant === 'Focus' && index === selectedIndex) ||
                        (variant === 'Focus Before' &&
                          index === selectedIndex - 1) ||
                        (variant === 'Focus After' &&
                          index === selectedIndex + 1))
                    ) {
                      dataPseudo = 'focus';
                    } else if (
                      selectedIndex === -1 &&
                      ((variant === 'Focus' && index === 1) ||
                        (variant === 'Focus Before' && index === 0) ||
                        (variant === 'Focus After' && index === 2))
                    ) {
                      dataPseudo = 'focus';
                    }
                    break;
                  }
                }
                return (
                  <button
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={`${selectedIndex}_${type}_${variant}_${index}`}
                    type="button"
                    data-pseudo={dataPseudo}
                    data-selected={index === selectedIndex}
                  >
                    {['icon', 'icon+text'].includes(type) ? (
                      <FavoriteFilled size={size === 'small' ? 16 : 20} />
                    ) : null}
                    {['text', 'icon+text'].includes(type) ? 'Button' : null}
                  </button>
                );
              })}
            </ButtonGroup>
          ))
        )}
      </React.Fragment>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { ButtonGroup: emotion.ButtonGroup };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { ButtonGroup: css.ButtonGroup };
Class.parameters = { useEmotion: false };
