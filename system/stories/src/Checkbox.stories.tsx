import { Story, Meta } from '@storybook/react';
import { checkbox, checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

const labelSelector = checkboxRadioLabel.selectors.find((selector) =>
  selector.includes('checkbox')
);

export default {
  title: 'TableKit/Checkbox',
  component: emotion.Checkbox,
  parameters: {
    ...checkbox,
    variants: contentVariants,
    auxiliarySelectors: [labelSelector]
  }
} as Meta;

const Template: Story = ({ Checkbox, LabelComponent }) => (
  <>
    {[true, false].map((isChecked) =>
      contentVariants.map((variant) => (
        <LabelComponent>
          <Checkbox
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
  Checkbox: emotion.Checkbox,
  LabelComponent: emotion.CheckboxRadioLabel
};
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Checkbox: css.Checkbox, LabelComponent: css.CheckboxLabel };
Class.parameters = { useEmotion: false };
