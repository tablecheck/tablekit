import { Story, Meta } from '@storybook/react';
import { chip, chipRow } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

const contentVariants = [
  'Default',
  'Selected',
  'Hover',
  'Focus',
  'Disabled',
  'Active'
] as const;

export default {
  title: 'Components/Chip',
  component: emotion.Chip,
  parameters: {
    ...chip,
    auxiliaryClassNames: [chipRow.className],
    auxiliaryComponents: [emotion.ChipRow],
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
} as Meta;

const Template: Story = ({ Chip, ChipRow }) => (
  <>
    {(['small', 'medium', 'large'] as const).map((size) => (
      <React.Fragment key={size}>
        <h4>{size}</h4>
        {contentVariants.map((variant) => (
          <ChipRow role="tablist">
            <Chip
              key={variant}
              data-size={size}
              disabled={variant === 'Disabled'}
              aria-selected={variant === 'Selected'}
              data-pseudo={variant.toLowerCase()}
            >
              {size}
            </Chip>
          </ChipRow>
        ))}
      </React.Fragment>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Chip: emotion.Chip, ChipRow: emotion.ChipRow };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Chip: css.Chip, ChipRow: css.ChipRow };
Class.parameters = { useEmotion: false };
