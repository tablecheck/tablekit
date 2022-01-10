import { Button } from '@tablecheck/tablekit-button';
import { useEffect, useRef } from 'react';
import { ControlProps, GroupTypeBase } from 'react-select';

import { Select } from './Select';
import { ButtonDropdownPropsType as PropsType } from './types';

const ControlComponent = ({
  selectProps,
  innerRef,
  menuIsOpen
}: ControlProps<
  { label: string; value: string },
  false,
  GroupTypeBase<{ label: string; value: string }>
>): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>();
  const { buttonProps } = selectProps;

  const handleClickOutside = (e: MouseEvent) => {
    if (
      buttonRef.current &&
      e.target &&
      buttonRef.current.contains(e.target as unknown as Node)
    ) {
      // inside click
      return;
    }
    // outside click
    if (selectProps.onMenuClose) {
      selectProps.onMenuClose();
    }
  };

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuIsOpen]);

  return (
    <Button
      {...buttonProps}
      ref={(element: HTMLButtonElement) => {
        buttonRef.current = element;
        if (typeof innerRef === 'function') innerRef(element);
      }}
      onClick={() => {
        if (selectProps.menuIsOpen && selectProps.onMenuClose) {
          selectProps.onMenuClose();
        } else if (!selectProps.menuIsOpen && selectProps.onMenuOpen) {
          selectProps.onMenuOpen();
        }
      }}
    />
  );
};

export const ButtonDropdown = (props: PropsType): JSX.Element => {
  const { components } = props;
  return (
    <Select
      {...props}
      components={{
        ...components,
        Control: ControlComponent
      }}
      isButtonDropDown
    />
  );
};
