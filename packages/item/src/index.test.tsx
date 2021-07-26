import { mount } from '@tablecheck/tablekit-enzyme';

import { Item } from './index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Item', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Item />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Item />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Item className="test-class" />)).toMatchSnapshot();
  });
});
