import { Story, Meta } from '@storybook/react';
import { skeleton } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: emotion.Skeleton,
  parameters: { chromatic: { disableSnapshot: true }, ...skeleton }
};

export default meta;

const Template: Story = ({ Skeleton }) => (
  <div>
    <h3>Can be manually sized</h3>
    <Skeleton width="100%" height={60} />
    <h3>Can Auto-Size to fit content</h3>
    <Skeleton>
      <h3>Will size to contain all contents</h3>
    </Skeleton>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '120px 60px',
        gap: 'var(--spacing-l4)'
      }}
    >
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
);

export const Emotion: Story = Template.bind({});
Emotion.args = { Skeleton: emotion.Skeleton };
Emotion.parameters = { useEmotion: true };

export const Class: Story = Template.bind({});
Class.args = { Skeleton: css.Skeleton };
Class.parameters = { useEmotion: false };
