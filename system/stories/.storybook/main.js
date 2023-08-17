const { mergeConfig } = require('vite');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@brightlayer-ui/storybook-rtl-addon/register'
  ],
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      viteFinal: (config) =>
        mergeConfig(config, {
          build: {
            sourcemap: false,
            target: ['es2020']
          }
        })
    }
  }
};
