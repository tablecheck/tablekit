import { Story, Meta } from '@storybook/react';
import { chip, chipRow } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants = [
  'Default',
  'Selected',
  'Hover',
  'Focus',
  'Disabled',
  'Active'
] as const;

export default {
  title: 'TableKit/Chip',
  component: emotion.Chip,
  parameters: {
    ...chip,
    auxiliaryClassNames: [chipRow.className],
    auxiliaryComponents: [emotion.ChipRow],
    variants: contentVariants,
    chromatic: { viewports: [1500] }
  }
} as Meta;

const chips = ['State', 'Default'];

const Template: Story = ({ Chip, ChipRow }) => (
  <>
    {(['small', undefined] as const).map((size) => (
      <>
        {contentVariants.map((variant) => (
          <ChipRow role="tablist">
            {chips.map((name, i) => (
              <Chip
                key={name}
                data-variant={i === 0 && variant}
                data-size={size}
                disabled={i === 0 && variant === 'Disabled'}
                aria-selected={i === 0 && variant === 'Selected'}
                data-pseudo={i === 0 && variant.toLowerCase()}
              >
                {name} {size}
              </Chip>
            ))}
          </ChipRow>
        ))}
      </>
    ))}
  </>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Chip: emotion.Chip, ChipRow: emotion.ChipRow };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Chip: css.Chip, ChipRow: css.ChipRow };
Class.parameters = { useEmotion: false };
