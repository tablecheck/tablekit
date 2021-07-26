import { mount } from '@tablecheck/tablekit-enzyme';
import '@tablecheck/tablekit-free-icon-config';

import { PasswordField } from '../index';
import { ScoreLevel } from '../types';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-password-field PasswordField', () => {
  test('should be possible to render', () => {
    const wrapper = mount(
      <PasswordField
        i18nMessages={{
          [ScoreLevel.Danger]: 'Danger!',
          [ScoreLevel.Success]: 'Success!',
          [ScoreLevel.Warning]: 'Almost there...'
        }}
      />
    );
    expect(wrapper).not.toBeUndefined();
  });
});
