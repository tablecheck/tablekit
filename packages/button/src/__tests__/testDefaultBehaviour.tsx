import { mount } from '@tablecheck/tablekit-enzyme';

import { Button, AnchorButton } from '../Button';

// TODO this needs to be split into AnchorButton, Button and probably ComponentButton

describe('@tablecheck/tablekit-button - default-behaviour', () => {
  test('button should have type="button" by default', () => {
    expect(
      mount(<Button />)
        .find('button')
        .props().type
    ).toBe('button');
  });

  test('should render button if there is no href property', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  test('should render link if href property is set', () => {
    const wrapper = mount(<AnchorButton href="test" />);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(0);
  });

  test('should render a button when the element is disabled and has href property', () => {
    const wrapper = mount(<AnchorButton isDisabled href="test" />);
    expect(wrapper.find('StyledLink')).toHaveLength(1);
    // expect(wrapper.find('a')).toHaveLength(0);
  });

  test("should not render span when the button is disabled, but doesn't have href", () => {
    const wrapper = mount(<Button isDisabled />);
    expect(wrapper.find('StyledSpan')).toHaveLength(0);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  test('should render icon if the prop iconBefore is set', () => {
    const Icon = <div id="icon" />;
    const wrapper = mount(<AnchorButton href="test" iconBefore={Icon} />);
    expect(wrapper.find('#icon')).toHaveLength(1);
  });

  test('should render iconBefore before children', () => {
    const Icon = <div id="icon">icon</div>;
    const wrapper = mount(
      <AnchorButton href="test" iconBefore={Icon}>
        button
      </AnchorButton>
    );
    expect(wrapper.text()).toBe('iconbutton');
  });

  test('should render icon if the prop iconAfter is set', () => {
    const Icon = <div id="icon" />;
    const wrapper = mount(<AnchorButton href="test" iconAfter={Icon} />);
    expect(wrapper.find('#icon')).toHaveLength(1);
  });

  test('should render iconAfter after children', () => {
    const Icon = <div id="icon">icon</div>;
    const wrapper = mount(
      <AnchorButton href="test" iconAfter={Icon}>
        button
      </AnchorButton>
    );
    expect(wrapper.text()).toBe('buttonicon');
  });

  test('should render button with full container width', () => {
    const wrapper = mount(<Button shouldFitContainer />);
    expect(wrapper.find('ButtonWrapper').prop('fit')).toBe(true);
  });

  test('should render button without full container width', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.find('ButtonWrapper').prop('fit')).toBe(false);
  });

  test('should be able to render both of the icons', () => {
    const Icon1 = <div id="icon1">icon1</div>;
    const Icon2 = <div id="icon2">icon2</div>;
    const wrapper = mount(
      <AnchorButton href="test" iconBefore={Icon1} iconAfter={Icon2}>
        button
      </AnchorButton>
    );
    expect(wrapper.find('#icon1')).toHaveLength(1);
    expect(wrapper.find('#icon2')).toHaveLength(1);
    expect(wrapper.text()).toBe('icon1buttonicon2');
  });

  test('should call onClick handler when link is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <AnchorButton href="test" onClick={spy}>
        button
      </AnchorButton>
    );
    wrapper.find('a').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should call onClick handler when button is clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(<Button onClick={spy}>button</Button>);
    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should render tabIndex attribute when the tabIndex property is set', () => {
    let wrapper = mount(<Button tabIndex={0}>button</Button>);
    expect(wrapper.find('button').is('[tabIndex=0]')).toBe(true);
    wrapper = mount(
      <AnchorButton href="#" tabIndex={0}>
        link
      </AnchorButton>
    );
    expect(wrapper.find('a').is('[tabIndex=0]')).toBe(true);
    wrapper = mount(
      <Button tabIndex={0} isDisabled>
        span
      </Button>
    );
    expect(wrapper.find('button').is('[tabIndex=0]')).toBe(true);
  });

  describe('isLoading', () => {
    test('should render the loading spinner when isLoading is true', () => {
      const wrapper = mount(<Button isLoading>Some text</Button>);
      expect(wrapper.find('Spinner')).toHaveLength(1);
    });
    test('should not render the loading spinner when isLoading is false', () => {
      const wrapper = mount(<Button>Some text</Button>);
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });
    test('should set the opacity of the text to 0 when isLoading is true', () => {
      const wrapper = mount(<Button isLoading>Some text</Button>);
      expect(wrapper.find('ButtonContent').find('span')).toMatchSnapshot();
    });

    const Icon = () => <span className="icon" />;

    test('should set the iconBefore opacity to 0 when isLoading', () => {
      const wrapper = mount(
        <Button isLoading iconBefore={<Icon />}>
          Some text
        </Button>
      );
      expect(wrapper.find('IconWrapper').find('span')).toMatchSnapshot();
    });
    test('should set the iconAfter opacity to 0 when isLoading', () => {
      const wrapper = mount(
        <Button isLoading iconAfter={<Icon />}>
          Some text
        </Button>
      );
      expect(wrapper.find('IconWrapper').find('span')).toMatchSnapshot();
    });
    test('should set the opacity of the text to undefined when isLoading is false', () => {
      const wrapper = mount(<Button>Some text</Button>);
      expect(wrapper.find('ButtonContent').find('span')).toMatchSnapshot();
    });
  });

  test('should set accessibility attributes', () => {
    expect(mount(<Button />).find('button[aria-haspopup]')).toHaveLength(0);
    expect(mount(<Button />).find('button[aria-expanded]')).toHaveLength(0);
    expect(mount(<Button />).find('button[aria-controls]')).toHaveLength(0);
    expect(mount(<Button />).find('button[id]')).toHaveLength(0);
    expect(
      mount(<Button aria-haspopup />).find('button[aria-haspopup=true]')
    ).toHaveLength(1);
    expect(
      mount(<Button aria-expanded />).find('button[aria-expanded=true]')
    ).toHaveLength(1);
    expect(
      mount(<Button aria-controls="test" />).find(
        'button[aria-controls="test"]'
      )
    ).toHaveLength(1);
    expect(mount(<Button id="test" />).find('button[id="test"]')).toHaveLength(
      1
    );
  });
});
