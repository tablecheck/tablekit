import { mount } from '@tablecheck/tablekit-enzyme';
import { MemoryRouter } from 'react-router-dom';

import {
  defaultNavigationLists,
  defaultActionButtons,
  defaultSocialLinks,
  defaultPolicyRows
} from '../demoContent';
import { Footer } from '../index';

beforeEach(() => {
  global.console.error = jest.fn();
});

describe('@tablecheck/tablekit-footer Footer', () => {
  test('should be possible to render', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Footer
          navigationLists={defaultNavigationLists}
          actionButtons={defaultActionButtons}
          socialLinks={defaultSocialLinks}
          policyRows={defaultPolicyRows}
        />
      </MemoryRouter>
    );
    expect(wrapper).not.toBeUndefined();
  });
});
