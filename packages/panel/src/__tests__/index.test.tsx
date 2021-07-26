import { mount } from '@tablecheck/tablekit-enzyme';

import { Panel } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Panel', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Panel isOpen togglePanel={() => {}} />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Panel isOpen togglePanel={() => {}} />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(<Panel isOpen togglePanel={() => {}} className="test-class" />)
    ).toMatchSnapshot();
  });
});
