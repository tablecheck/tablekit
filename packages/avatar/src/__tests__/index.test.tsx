import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { Avatar } from '../Avatar';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Avatar', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Avatar />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Avatar />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Avatar className="test-class" />)).toMatchSnapshot();
  });
});
