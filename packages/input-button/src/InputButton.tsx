import { ButtonShape } from '@tablecheck/tablekit-button';
import { getIcon } from '@tablecheck/tablekit-icon';
import { InputSize } from '@tablecheck/tablekit-input';
import { forwardRef } from 'react';

import { IS_CLICKED_ATTR } from './constants';
import {
  HiddenInput,
  ButtonLabel,
  ButtonDisplay,
  TextWrapper,
  SelectedIcon
} from './styled';
import { InputButtonProps } from './types';

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

export const InputButton = forwardRef<HTMLInputElement, InputButtonProps>(
  (props: InputButtonProps, ref) => {
    const {
      className,
      isDisabled,
      isRequired,
      isChecked,
      name,
      id,
      onChange,
      value,
      children,
      type = 'checkbox',
      size = InputSize.Regular,
      shape = ButtonShape.Rounded,
      ...inputProps
    } = props;

    return (
      <ButtonLabel
        className={className}
        data-disabled={isDisabled}
        htmlFor={id}
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
      >
        <HiddenInput
          {...inputProps}
          id={id}
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
          type={type}
          fieldSize={size}
          shape={shape}
        />
        <ButtonDisplay shape={shape} fieldSize={size}>
          <SelectedIcon icon={getIcon('confirm')} />
          <TextWrapper data-text={children}>{children}</TextWrapper>
        </ButtonDisplay>
      </ButtonLabel>
    );
  }
);
