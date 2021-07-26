import { mount } from '@tablecheck/tablekit-enzyme';

import { Alert } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Alert', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Alert />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Alert />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Alert className="test-class" />)).toMatchSnapshot();
  });
});
