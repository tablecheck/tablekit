import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import set from 'lodash/set';
import * as React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export const DocsContainer = ({
  children,
  context
}: {
  children: React.ReactNode;
  context: any;
}) => {
  const dark = useDarkMode();
  set(context, 'parameters.docs.theme', dark ? themes.dark : themes.light);
  return <BaseContainer context={context}>{children}</BaseContainer>;
};
