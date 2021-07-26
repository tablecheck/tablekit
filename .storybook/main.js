const mainConfig = require('@tablecheck/scripts/config/storybook.main');

module.exports = {
  ...mainConfig,
  addons: [...mainConfig.addons, 'storybook-dark-mode'],
  stories: [
    '../pages/**/*.stories.mdx',
    '../packages/**/src/*.stories.mdx',
    '../pages/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/src/*.stories.@(js|jsx|ts|tsx)'
  ]
};
