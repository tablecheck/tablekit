import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { Tag } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Tag', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Tag />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Tag />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Tag className="test-class" />)).toMatchSnapshot();
  });
});
