import { mount } from '@tablecheck/tablekit-enzyme';

import { AnchorButton, ComponentButton } from '../Button';
import { Button } from '../index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Component = ({ customProp }: { customProp?: number }) => null;

function mountAndFindElement(
  componentToMount: JSX.Element,
  renderedElement = false
) {
  const component = mount(componentToMount);
  if (renderedElement) {
    return component.find('ButtonWrapper').parent();
  }
  return component.find('StyledButton');
}

describe('@tablecheck/tablekit-button - getButtonProps', () => {
  test('should pass through all props to a custom component', () => {
    const wrapper = mount(
      <ComponentButton customProp={1} component={Component} />
    );
    const button = wrapper.find('Component');
    expect(button.prop('customProp')).toBe(1);
  });

  test('should add appearance props', () => {
    const button = mountAndFindElement(<Button />);

    expect(Object.keys(button.props())).toEqual(
      expect.arrayContaining(['appearance', 'disabled', 'size', 'fit'])
    );
  });

  test('should pass data- props to component', () => {
    const button = mountAndFindElement(<Button data-testid="test_button" />);
    expect(button.prop('data-testid')).toEqual('test_button');
  });

  test('should pass aria- props to component', () => {
    const button = mountAndFindElement(<Button aria-hidden="false" />);
    expect(button.prop('aria-hidden')).toEqual('false');
  });

  test('should pass interaction handler functions directly from the component', () => {
    const onBlur = () => {};
    const onFocus = () => {};
    const onMouseDown = () => {};
    const onMouseEnter = () => {};
    const onMouseLeave = () => {};
    const onMouseUp = () => {};

    const button = mountAndFindElement(
      <Button
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
      />
    );

    expect(button.prop('onBlur')).toBe(onBlur);
    expect(button.prop('onFocus')).toBe(onFocus);
    expect(button.prop('onMouseDown')).toBe(onMouseDown);
    expect(button.prop('onMouseEnter')).toBe(onMouseEnter);
    expect(button.prop('onMouseLeave')).toBe(onMouseLeave);
    expect(button.prop('onMouseUp')).toBe(onMouseUp);
  });

  test('should pass the onClick handler from props', () => {
    const onClick = () => {};
    const button = mountAndFindElement(<Button onClick={onClick} />);

    expect(button.prop('onClick')).toEqual(expect.anything());
  });

  test('should add appearance, size, disabled, fit and type props to a button', () => {
    const button = mountAndFindElement(<AnchorButton />, true);

    expect(Object.keys(button.props())).toEqual(
      expect.arrayContaining(['appearance', 'size', 'disabled', 'fit', 'type'])
    );

    const button2 = mountAndFindElement(<AnchorButton href="#" />, true);

    expect(Object.keys(button2.props())).toEqual(
      expect.arrayContaining([
        'appearance',
        'size',
        'disabled',
        'fit',
        'type',
        'href'
      ])
    );
  });

  test('should add href and target props to a link', () => {
    const button = mountAndFindElement(<AnchorButton href="#" />, true);
    expect(Object.keys(button.props())).toEqual(
      expect.arrayContaining(['href'])
    );

    const button2 = mountAndFindElement(
      <AnchorButton href="#" isDisabled />,
      true
    );

    expect(Object.keys(button2.props())).not.toEqual(
      expect.arrayContaining(['href', 'target'])
    );
  });
});
