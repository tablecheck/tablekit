import { ordered } from '@tablecheck/locales';
import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { LanguageSelector } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
});

describe('@tablecheck/tablekit-language-selector LanguageSelector', () => {
  test('should be possible to render', () => {
    const wrapper = mount(
      <LanguageSelector
        locales={ordered}
        currentLanguage="en"
        renderTrigger={() => null}
        onChangeLanguage={() => {}}
      />
    );
    expect(wrapper).not.toBeUndefined();
  });
});
