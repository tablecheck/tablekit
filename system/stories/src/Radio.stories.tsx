import { Story, Meta } from '@storybook/react';
import { radio, checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

const labelSelector = checkboxRadioLabel.selectors.find((selector) =>
  selector.includes('radio')
);

const meta: Meta = {
  title: 'Components/Radio',
  component: emotion.Radio,
  parameters: {
    ...radio,
    variants: contentVariants,
    auxiliarySelectors: [labelSelector]
  }
};

export default meta;

const Template: Story = ({ Radio, LabelComponent }) => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <LabelComponent>
          <Radio
            data-pseudo={variant.toLowerCase()}
            disabled={variant.toLowerCase() === 'disabled'}
            checked={isChecked}
          />
          {variant} {isChecked ? '☑' : '☐'}
        </LabelComponent>
      ))
    )}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = {
  Radio: emotion.Radio,
  LabelComponent: emotion.CheckboxRadioLabel
};
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Radio: css.Radio, LabelComponent: css.RadioLabel };
Class.parameters = { useEmotion: false };
