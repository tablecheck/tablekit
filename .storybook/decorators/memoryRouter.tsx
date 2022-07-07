import { action } from '@storybook/addon-actions';
import { makeDecorator } from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import * as React from 'react';
import { MemoryRouter, useHistory } from 'react-router-dom';

const routeChangeAction = action('route change');

function RouteChangeWatcher() {
  const history = useHistory();
  React.useEffect(
    () =>
      history.listen((location, routeAction) => {
        let newPath = location.pathname;
        if (location.search) newPath += location.search;
        if (location.hash) newPath += location.hash;
        routeChangeAction(newPath, routeAction);
      }),
    []
  );
  return null;
}

addDecorator(
  makeDecorator({
    name: 'withMemoryRouter',
    parameterName: 'route',

    wrapper: (storyFn, context) => {
      const { parameters } = context;
      if (!parameters?.route) return storyFn(context);
      return (
        <MemoryRouter initialEntries={[parameters.route]}>
          <RouteChangeWatcher />
          {storyFn(context)}
        </MemoryRouter>
      );
    }
  })
);
