import { Mobile, Screen } from '@carbon/icons-react';
import { Meta, StoryFn } from '@storybook/react';
import { ConfigDefaults } from '@tablecheck/tablekit-core';
import * as emotion from '@tablecheck/tablekit-react';
import * as css from '@tablecheck/tablekit-react-css';
import * as React from 'react';

export default {
  title: 'Introduction/Configuration'
} as Meta;

interface Options {
  config: ConfigDefaults;
  components: 'emotion' | 'css';
}

function ConfigThenRender({ config, components: componentsKey }: Options) {
  const [state, setState] = React.useState('init');
  const isEmotion = componentsKey === 'emotion';
  const components = isEmotion ? emotion : css;
  React.useEffect(() => {
    components.configureDefaults(config);
    setState('ready');
  }, []);
  if (state !== 'ready') return null;
  return (
    <div>
      <p>
        The <code>configureDefaults</code> export of the package allows to set
        the default of the data-size prop across all components
      </p>
      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-l4)',
          alignItems: 'center'
        }}
      >
        <components.Input defaultValue="Input" />
        <components.Button>Button</components.Button>
        <components.ButtonGroup>
          <button type="button">
            <Screen size={components.getConfigDefault('iconSize')} />
          </button>
          <button type="button">
            <Mobile size={components.getConfigDefault('iconSize')} />
          </button>
        </components.ButtonGroup>
        <components.Select>
          <option>Value</option>
        </components.Select>
        <components.Toggle className={isEmotion ? 'custom' : undefined} />
      </div>
    </div>
  );
}

const Template: StoryFn<Options> = (props) => <ConfigThenRender {...props} />;

export const EmotionSmall = Template.bind({});
EmotionSmall.args = {
  components: 'emotion',
  config: {
    controlSize: 'small'
  }
};
EmotionSmall.parameters = { useEmotion: true };
export const EmotionMedium = Template.bind({});
EmotionMedium.args = {
  components: 'emotion',
  config: {
    controlSize: 'medium'
  }
};
EmotionMedium.parameters = { useEmotion: true };
export const EmotionLarge = Template.bind({});
EmotionLarge.args = {
  components: 'emotion',
  config: {
    controlSize: 'large'
  }
};
EmotionLarge.parameters = { useEmotion: true };

export const ClassSmall = Template.bind({});
ClassSmall.args = {
  components: 'css',
  config: {
    controlSize: 'small'
  }
};
ClassSmall.parameters = { useEmotion: false };

export const ClassMedium = Template.bind({});
ClassMedium.args = {
  components: 'css',
  config: {
    controlSize: 'medium'
  }
};
ClassMedium.parameters = { useEmotion: false };

export const ClassLarge = Template.bind({});
ClassLarge.args = {
  components: 'css',
  config: {
    controlSize: 'large'
  }
};
ClassLarge.parameters = { useEmotion: false };
