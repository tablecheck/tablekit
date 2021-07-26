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

  describe('isCompleting prop', () => {
    test('should add a spinner container when not set', () => {
      const wrapper = mount(<Spinner />);
      expect(wrapper.find(SpinnerContainer)).toHaveLength(1);
    });

    test('should remove the spinner container when set to true', () => {
      const wrapper = mount(<Spinner isCompleting />);
      expect(wrapper.find(SpinnerContainer)).toHaveLength(0);
    });
  });

  // there are issues with making the tests work with react-spring
  // see https://github.com/react-spring/react-spring/issues/680
  describe.skip('onComplete prop', () => {
    test('should be called after isCompleting prop is set', () => {
      const spy = jest.fn();
      const wrapper = mount(<Spinner delay={0} onComplete={spy} />);
      wrapper.setProps({ isCompleting: true });

      wrapper.update();
      jest.runAllTimers();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('should not be called if isCompleting is not set', () => {
      const spy = jest.fn();
      const wrapper = mount(<Spinner delay={0} onComplete={spy} />);
      const transitionContainerNode = wrapper
        .find(SpinnerContainer)
        .getDOMNode();

      transitionContainerNode.dispatchEvent(new Event('animationend'));

      expect(spy).not.toHaveBeenCalled();
    });
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
