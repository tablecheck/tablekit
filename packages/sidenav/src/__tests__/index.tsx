import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';
import { HTMLAttributes } from 'react';

import { SideNav, SideNavProvider } from '../index';
import { SideNavProviderProps } from '../types';

beforeEach(() => {
  global.console.error = jest.fn();
});

const SideBar = (
  props: Omit<SideNavProviderProps, 'children'> & HTMLAttributes<HTMLDivElement>
) => (
  <SideNavProvider {...props}>
    <SideNav {...props} />
  </SideNavProvider>
);

describe('Sidenav', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<SideBar />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<SideBar />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<SideBar className="test-class" />)).toMatchSnapshot();
  });
});
