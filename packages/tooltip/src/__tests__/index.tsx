import { mount } from '@tablecheck/tablekit-enzyme';

import { Tooltip } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

const testContent = <div>Test</div>;

describe('Tooltip', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(
      <Tooltip content={testContent}>
        {(setTargetRef) => <div ref={setTargetRef}>Target</div>}
      </Tooltip>
    );
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(
      mount(
        <Tooltip content={testContent}>
          {(setTargetRef) => <div ref={setTargetRef}>Target</div>}
        </Tooltip>
      )
    ).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(
        <Tooltip content={testContent} className="test-class">
          {(setTargetRef) => <div ref={setTargetRef}>Target</div>}
        </Tooltip>
      )
    ).toMatchSnapshot();
  });
});
