import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { Toggle } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1)
}));

describe('Toggle', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Toggle isChecked />);
    expect(wrapper).not.toBeUndefined();
  });
});
