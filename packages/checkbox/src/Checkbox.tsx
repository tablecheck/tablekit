import { forwardRef } from 'react';

import { IS_CLICKED_ATTR } from './constants';
import {
  CheckboxInput,
  InputDisplay,
  CheckboxLabel,
  RequiredIndicator
} from './styled';
import { CheckboxProps } from './types';

/*
 * Note about the usage of JS "classList" in this component.
 *
 * As this component should be essentially stateless and we can handle all the
 * styling via the pseudo-styles of :hover :active etc there is one edge case
 * that requires some extra javascript work. This case is in the styling of :focus.
 * In the browser :focus will be active if you focus via keyboard or mouse/touch.
 * There is a proposal to add :focus-visible that will replace this logic.
 *
 * So to avoid both the extra renders from state updates and the extra work
 * @emotion would need to change the stylesheets+classes from these state updates
 * we are simply using a basic class restrict when :focus styling is applied.
 *
 * As checkboxes can quite often be used in very large amounts this is a
 * reasonable trade off against being a complete React way.
 */
let isKeyboardInteraction = false;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      className,
      isDisabled,
      isInvalid,
      isRequired,
      isChecked,
      name,
      onChange,
      value,
      children,
      ...inputProps
    } = props;

    return (
      <CheckboxLabel
        className={className}
        onClick={(event) => {
          if (isKeyboardInteraction) return;
          event.currentTarget.dataset[IS_CLICKED_ATTR] = 'true';
        }}
        onKeyDown={() => {
          isKeyboardInteraction = true;
        }}
        onMouseDown={() => {
          isKeyboardInteraction = false;
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
      >
        <CheckboxInput
          {...inputProps}
          onBlur={(event) => {
            delete (event.currentTarget.parentNode as HTMLElement).dataset[
              IS_CLICKED_ATTR
            ];
          }}
          disabled={isDisabled}
          required={isRequired}
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          checked={isChecked}
          type="checkbox"
        />
        <InputDisplay isInvalid={isInvalid}>
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 10 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline className="checkbox-checkmark" points="1 3 4 6 9 1" />
          </svg>
        </InputDisplay>
        <p>{children}</p>
        {isRequired ? (
          <RequiredIndicator role="presentation">*</RequiredIndicator>
        ) : null}
      </CheckboxLabel>
    );
  }
);
