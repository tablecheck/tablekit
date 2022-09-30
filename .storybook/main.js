const mainConfig = require('@tablecheck/scripts/config/storybook.main');

module.exports = {
  ...mainConfig,
  addons: [
    ...mainConfig.addons,
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    'storybook-dark-mode',
    '@brightlayer-ui/storybook-rtl-addon/register'
  ],
  stories: [
    '../system/react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../website/src/*.stories.@(js|jsx|ts|tsx)'
  ],
  // override hacks we don't need and are breaking, particularly the emotion aliases
  webpackFinal: (config) => config
};
