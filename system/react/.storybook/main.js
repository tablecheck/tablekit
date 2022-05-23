const mainConfig = require('@tablecheck/scripts/config/storybook.main');

module.exports = {
  ...mainConfig,
  features: {
    babelModeV7: true
  },
  addons: [
    ...mainConfig.addons,
    '@storybook/addon-a11y',
    '@bissolli/storybook-css-properties',
    'storybook-dark-mode',
    'storybook-rtl-addon'
  ]
};
