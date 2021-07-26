import { mount } from '@tablecheck/tablekit-enzyme';

import { InlineDialog } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Inline Dialog', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(
      <InlineDialog
        renderTrigger={({ onClick, isOpen, ref }) => (
          <button type="button" ref={ref} onClick={onClick}>
            {isOpen ? 'open' : 'close'}
          </button>
        )}
      >
        test
      </InlineDialog>
    );
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(
      mount(
        <InlineDialog
          renderTrigger={({ onClick, isOpen, ref }) => (
            <button type="button" ref={ref} onClick={onClick}>
              {isOpen ? 'open' : 'close'}
            </button>
          )}
        >
          test
        </InlineDialog>
      )
    ).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(
        <InlineDialog
          className="test-class"
          renderTrigger={({ onClick, isOpen, ref }) => (
            <button type="button" ref={ref} onClick={onClick}>
              {isOpen ? 'open' : 'close'}
            </button>
          )}
        >
          test
        </InlineDialog>
      )
    ).toMatchSnapshot();
  });
});
