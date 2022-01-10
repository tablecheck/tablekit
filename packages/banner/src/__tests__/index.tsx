import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { Banner } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Banner', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Banner message="Test" />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Banner message="Test" />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(<Banner className="test-class" message="Test" />)
    ).toMatchSnapshot();
  });
});
