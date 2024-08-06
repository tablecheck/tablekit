import { Story, Meta } from '@storybook/react';
import { checkbox, checkboxRadioLabel } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const indeterminate = 'indeterminate';
const contentVariants = ['Default', 'Hover', 'Focus', 'Disabled'] as const;

const states = [false, true, indeterminate] as const;

const labelSelector = checkboxRadioLabel.selectors.find((selector) =>
  selector.includes('checkbox')
);

export default {
  title: 'Components/Checkbox',
  component: emotion.Checkbox,
  parameters: {
    ...checkbox,
    variants: contentVariants,
    auxiliarySelectors: [labelSelector]
  }
} as Meta;

const Template: Story = ({ Checkbox, LabelComponent }) => (
  <>
    {states.map((state) =>
      contentVariants.map((variant) => (
        <LabelComponent>
          <Checkbox
            data-pseudo={variant.toLowerCase()}
            disabled={variant.toLowerCase() === 'disabled'}
            ref={(ref: undefined | HTMLInputElement) => {
              if (!ref) return;
              if (state === indeterminate) {
                ref.indeterminate = true;
              } else {
                ref.checked = state;
              }
            }}
          />
          {variant} {state ? '☑' : '☐'}
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
