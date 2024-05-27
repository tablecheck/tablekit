/* eslint-disable eslint-comments/disable-enable-pair, jsx-a11y/anchor-is-valid */
import { Story, Meta } from '@storybook/react';
import { childAnchors } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

export default {
  title: 'Components/ChildAnchors',
  component: emotion.ChildAnchors,
  parameters: {
    ...childAnchors
  }
} as Meta;

const Template: Story = ({ ChildAnchors }) => (
  <ChildAnchors>
    <p>
      This <a>component</a> <a href="#">will</a>{' '}
      <a data-pseudo="hover" href="#">
        automatically
      </a>{' '}
      <a data-pseudo="visited" href="#">
        apply
      </a>{' '}
      <a data-pseudo="focus" href="#">
        the
      </a>{' '}
      `Anchor` styling to all `&lt;a&gt;` elements iniside it
    </p>
  </ChildAnchors>
);
export const Emotion: Story = Template.bind({});
Emotion.args = { ChildAnchors: emotion.ChildAnchors };

export const Class: Story = Template.bind({});
Class.args = { ChildAnchors: css.ChildAnchors };
