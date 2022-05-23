import { Global } from '@emotion/react';
import { useDarkMode } from 'storybook-dark-mode';
import { useDirection } from 'storybook-rtl-addon';

import { resetCss } from '../src/resetCss';
import { buildCssVars } from '../src/globalUtilCss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story, context) => {
    return (
      <div dir={useDirection(context)}>
        <Global styles={[resetCss, buildCssVars(useDarkMode(), ':root')]} />
        <Story />
      </div>
    );
  }
];
