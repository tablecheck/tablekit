import { Meta, StoryFn } from '@storybook/react';
import { inputStructure } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';

const contentVariants: emotion.InputStructureProps[] = [
  {
    name: 'input-structure-1',
    label: 'Default',
    input: (
      <emotion.Input
        name="input-structure-1"
        title="Default"
        placeholder="Placeholder"
      />
    )
  },
  {
    name: 'input-structure-2',
    label: 'With Label',
    input: (
      <emotion.Input
        name="input-structure-2"
        title="Default"
        placeholder="Placeholder"
      />
    ),
    labelAppend: 'Some Label'
  },
  {
    name: 'input-structure-3',
    label: 'With Description',
    input: (
      <emotion.Input
        name="input-structure-3"
        title="Default"
        placeholder="Placeholder"
      />
    ),
    description: 'Some Descripton'
  },
  {
    name: 'input-structure-4',
    label: 'With Alert',
    input: (
      <emotion.Input
        name="input-structure-4"
        title="Default"
        placeholder="Placeholder"
      />
    ),
    alert: { children: 'Alert', 'data-variant': 'error', id: '1' }
  },
  {
    name: 'input-structure-5',
    label: 'With All',
    input: (
      <emotion.Input
        name="input-structure-5"
        title="Default"
        placeholder="Placeholder"
      />
    ),
    alert: { children: 'Alert', 'data-variant': 'error', id: '1' },
    description: 'Some Descripton',
    labelAppend: 'Some Label'
  }
];

const meta: Meta = {
  title: 'Components/InputStructure',
  component: emotion.InputStructure,
  parameters: {
    ...inputStructure
  }
};

export default meta;

const Template: StoryFn = ({ InputStructure }) => (
  <>
    {contentVariants.map(({ name: key, ...props }) => (
      <InputStructure key={key} {...props} />
    ))}
  </>
);

export const Emotion: StoryFn = Template.bind({});
Emotion.args = {
  InputStructure: emotion.InputStructure
};
Emotion.parameters = { useEmotion: true };

export const Class: StoryFn = Template.bind({});
Class.args = {
  InputStructure: css.InputStructure
};
Class.parameters = { useEmotion: false };
