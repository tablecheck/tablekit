import { mount } from '@tablecheck/tablekit-enzyme';

import { Badge } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('Badge', () => {
  test('should be possible to create a component', () => {
    const wrapper = mount(<Badge value={0} />);
    expect(wrapper).not.toBeUndefined();
  });

  test('should correctly apply styling', () => {
    expect(mount(<Badge value={0} />)).toMatchSnapshot();
  });

  test('should allow passing of custom className', () => {
    expect(mount(<Badge className="test-class" value={0} />)).toMatchSnapshot();
  });

  test('should allow passing of custom children', () => {
    expect(
      mount(
        <Badge>
          <p>foo</p>
        </Badge>
      )
    ).toMatchSnapshot();
  });
});
