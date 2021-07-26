import { forwardRef } from 'react';

import {
  RadioInputDisplay,
  RadioInput,
  RadioLabel,
  RadioText,
  IS_CLICKED_ATTR
} from './styled';
import { RadioProps } from './types';

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
 * As radio buttons can quite often be used in very large amounts this is a
 * reasonable trade off against being a complete React way.
 */
let isKeyboardInteraction = false;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref): JSX.Element => {
    const {
      isChecked,
      isDisabled,
      isRequired,
      name,
      onChange,
      value,
      children,
      ...inputProps
    } = props;

    return (
      <RadioLabel
        isDisabled={isDisabled}
        onClick={(
          event:
            | React.MouseEvent<HTMLInputElement>
            | React.MouseEvent<HTMLLabelElement>
        ) => {
          if (isKeyboardInteraction) return;
          event.currentTarget.dataset[IS_CLICKED_ATTR] = 'true';
        }}
        onKeyDown={() => {
          isKeyboardInteraction = true;
        }}
        onMouseDown={() => {
          isKeyboardInteraction = false;
        }}
      >
        <RadioInput
          {...inputProps}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
            delete (event.currentTarget.parentNode as HTMLElement).dataset[
              IS_CLICKED_ATTR
            ];
          }}
          checked={isChecked}
          disabled={isDisabled}
          name={name}
          onChange={onChange}
          required={isRequired}
          type="radio"
          value={value}
          ref={ref}
        />
        <RadioInputDisplay />
        <RadioText>{children}</RadioText>
      </RadioLabel>
    );
  }
);
