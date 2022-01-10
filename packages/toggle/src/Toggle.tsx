import styled from '@emotion/styled';
import { Icon, getIcon } from '@tablecheck/tablekit-icon';
import { Size } from '@tablecheck/tablekit-theme';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

import { Handle } from './styled/Handle';
import { CheckedIconWrapper, UncheckedIconWrapper } from './styled/IconWrapper';
import { Inner } from './styled/Inner';
import { Input } from './styled/Input';
import { Label, LabelText } from './styled/Label';
import { Slide } from './styled/Slide';
import { ToggleProps } from './types';

const MinusIcon = styled(Icon)`
  transform: rotate(90deg);
`;

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className = '',
      isChecked,
      defaultChecked,
      isDisabled = false,
      label = '',
      name = '',
      value = '',
      type = 'empty',
      ...restProps
    }: ToggleProps,
    ref
  ): JSX.Element => {
    const internalInputRef = React.useRef<HTMLInputElement | null>();
    const id = restProps.id || uuid();

    const iconMap = {
      empty: [null, null],
      confirm: [
        <Icon icon={getIcon('confirm')} />,
        <Icon icon={getIcon('close')} />
      ],
      power: [
        <Icon icon={getIcon('power')} size={Size.Small} />,
        <MinusIcon icon={getIcon('minus')} />
      ]
    };

    return (
      <Label className={className} htmlFor={id} data-disabled={isDisabled}>
        <Input
          {...restProps}
          ref={(inputRef) => {
            if (ref && typeof ref === 'function') {
              ref(inputRef);
            } else if (ref) {
              ref.current = inputRef;
            }
            if (internalInputRef.current === inputRef) return;
            internalInputRef.current = inputRef;
            if (inputRef && (isChecked || defaultChecked)) {
              // set initial checked value
              inputRef.checked = true;
            }
          }}
          checked={isChecked}
          defaultChecked={defaultChecked}
          disabled={isDisabled}
          id={id}
          name={name}
          type="checkbox"
          value={value}
          data-label={label}
        />
        <Slide>
          <Inner>
            <CheckedIconWrapper>{iconMap[type][1]}</CheckedIconWrapper>
            <UncheckedIconWrapper>{iconMap[type][0]}</UncheckedIconWrapper>
            <Handle />
          </Inner>
        </Slide>
        <LabelText>{label}</LabelText>
      </Label>
    );
  }
);
