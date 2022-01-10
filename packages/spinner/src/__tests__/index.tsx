import { mount } from '@tablecheck/tablekit-enzyme';

import { SpinnerContainer } from '../components/styledContainer';
import { Spinner } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Spinner', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should add a spinner container when not set', () => {
    const wrapper = mount(<Spinner />);
    expect(wrapper.find(SpinnerContainer)).toHaveLength(1);
  });

  test('should be styled', () => {
    expect(mount(<Spinner />).find('.emotion-1')).toBeDefined();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(<Spinner className="test-class" />).find('.test-class')
    ).toBeDefined();
  });
});
