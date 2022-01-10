import { mount } from '@tablecheck/tablekit-enzyme';

import { Logo } from './index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-logo Logo', () => {
  test('should be possible to render', () => {
    const wrapper = mount(<Logo />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Logo />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Logo className="test-class" />)).toMatchSnapshot();
  });
});
