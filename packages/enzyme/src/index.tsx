import { Theme } from '@emotion/react';
import { ThemeProvider } from '@tablecheck/tablekit-theme';
import {
  mount as enzymeMount,
  shallow as enzymeShallow,
  render as enzymeRender,
  ReactWrapper,
  MountRendererProps,
  ShallowRendererProps,
  ShallowWrapper
} from 'enzyme';
import { Component, ReactElement } from 'react';

export function mount<C extends Component, P = C['props'], S = C['state']>(
  node: ReactElement<P>,
  options?: MountRendererProps
): ReactWrapper<P, S, C>;
export function mount<P>(
  node: ReactElement<P>,
  options?: MountRendererProps
): ReactWrapper<P, unknown>;
export function mount<P, S>(
  node: ReactElement<P>,
  options?: MountRendererProps
): ReactWrapper<P, S> {
  return enzymeMount(<ThemeProvider>{node}</ThemeProvider>, options);
}

export function mountWithTheme<
  C extends Component,
  P = C['props'],
  S = C['state']
>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: MountRendererProps
): ReactWrapper<P, S, C>;
export function mountWithTheme<P>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: MountRendererProps
): ReactWrapper<P, unknown>;
export function mountWithTheme<P, S>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: MountRendererProps
): ReactWrapper<P, S> {
  return enzymeMount(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  );
}

export function shallow<C extends Component, P = C['props'], S = C['state']>(
  node: ReactElement<P>,
  options?: ShallowRendererProps
): ShallowWrapper<P, S, C>;
export function shallow<P>(
  node: ReactElement<P>,
  options?: ShallowRendererProps
): ShallowWrapper<P, unknown>;
export function shallow<P, S>(
  node: ReactElement<P>,
  options?: ShallowRendererProps
): ShallowWrapper<P, S> {
  return enzymeShallow(<ThemeProvider>{node}</ThemeProvider>, options);
}

export function shallowWithTheme<
  C extends Component,
  P = C['props'],
  S = C['state']
>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: ShallowRendererProps
): ShallowWrapper<P, S, C>;
export function shallowWithTheme<P>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: ShallowRendererProps
): ShallowWrapper<P, unknown>;
export function shallowWithTheme<P, S>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: ShallowRendererProps
): ShallowWrapper<P, S> {
  return enzymeShallow(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function render<P, S>(
  node: ReactElement<P>,
  options?: unknown
): cheerio.Cheerio {
  return enzymeRender(<ThemeProvider>{node}</ThemeProvider>, options);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function renderWithTheme<P, S>(
  node: ReactElement<P>,
  theme: Partial<Theme>,
  options?: unknown
): cheerio.Cheerio {
  return enzymeRender(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  );
}

// Global mock reduces potential problems in snapshot testing
// eslint disables need to be there for compiled code to not throw jest errors
jest.mock('@tablecheck/tablekit-icon', () =>
  // eslint-disable-next-line prefer-object-spread
  Object.assign({}, jest.requireActual('@tablecheck/tablekit-icon'), {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Icon: ({ icon }: { icon?: { iconName?: string } }) =>
      icon && icon.iconName ? `icon-${icon.iconName}` : 'icon-UNKNOWN'
  })
);
