import { mount } from '@tablecheck/tablekit-enzyme';

import { Tabs } from '../Tabs';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Tabs', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(
      <Tabs currentTab="" setCurrentTab={() => {}} tabs={[]} />
    );
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(
      mount(<Tabs currentTab="" setCurrentTab={() => {}} tabs={[]} />)
    ).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(
      mount(
        <Tabs
          currentTab=""
          setCurrentTab={() => {}}
          tabs={[]}
          className="test-class"
        />
      )
    ).toMatchSnapshot();
  });
});
