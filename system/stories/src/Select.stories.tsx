import { Story, Meta } from '@storybook/react';
import { select } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  'Default',
  'Hover',
  'Focus',
  'Error',
  'Disabled'
] as const;

const meta: Meta = {
  title: 'Components/Select',
  component: emotion.Select,
  parameters: {
    variants: contentVariants,
    ...select
  }
};

export default meta;

const Template: Story = ({ Select }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map((variant) => (
          <Select
            data-variant={variant.toLocaleLowerCase()}
            data-pseudo={variant.toLowerCase()}
            disabled={variant.toLowerCase() === 'disabled'}
            data-size={size}
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
            <option>Option 6</option>
          </Select>
        ))}
      </React.Fragment>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Select: emotion.Select };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Select: css.Select };
Class.parameters = { useEmotion: false };
