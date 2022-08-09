const mainConfig = require('@tablecheck/scripts/config/storybook.main');

module.exports = {
  ...mainConfig,
  addons: [...mainConfig.addons, 'storybook-dark-mode', 'storybook-rtl-addon'],
  stories: [
    '../system/react/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../website/src/*.stories.@(js|jsx|ts|tsx)'
  ]
};
