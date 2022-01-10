import { mount } from '@tablecheck/tablekit-enzyme';

import { TopNav } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Topnav', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<TopNav />);
    expect(wrapper).not.toBeUndefined();
  });
});
