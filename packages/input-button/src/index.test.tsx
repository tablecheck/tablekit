import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { InputButton } from './index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-input-button', () => {
  test('should be possible to render', () => {
    const wrapper = mount(<InputButton id="test1" />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<InputButton id="test2" />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(<InputButton id="test3" className="test-class" />)
    ).toMatchSnapshot();
  });
});
