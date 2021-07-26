import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';
import { useState } from 'react';

import { Gallery } from '../index';

const array = Array.from({ length: 5 });
const images = array.map((o, i) => ({
  large: `https://loremflickr.com/g/1980/1020/food?random=${i}`,
  medium: `https://loremflickr.com/g/1024/768/food?random=${i}`,
  small: `https://loremflickr.com/g/640/480/food?random=${i}`,
  caption: 'Food'
}));

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Gallery images={images} isOpen={isOpen} onClose={() => setIsOpen(false)} />
  );
};

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-gallery Gallery', () => {
  test('should be possible to render', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper).not.toBeUndefined();
  });
});
