import { Meta, Story } from '@storybook/react';

export default {
  title: 'Theming/Typography'
} as Meta;

function SimpleTemplate() {
  return (
    <>
      <header>
        <h1>H1 in header</h1>
      </header>
      <h1>H1 title</h1>
      <h2>H2 title</h2>
      <h3>H3 title</h3>
      <h4>H4 title</h4>
      <h5>H5 title (label-1)</h5>
      <h6>H6 title (label-2)</h6>
      <p>
        Paragraph text with <small>Small text</small>
      </p>
      <aside>Aside</aside>
    </>
  );
}

export const Emotion: Story = SimpleTemplate.bind({});
Emotion.parameters = { useEmotion: true };

export const Class: Story = SimpleTemplate.bind({});
Class.parameters = { useEmotion: false };
