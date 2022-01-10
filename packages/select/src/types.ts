import { ButtonProps } from '@tablecheck/tablekit-button';
import { InputSize } from '@tablecheck/tablekit-input';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { Props, OptionTypeBase, GroupTypeBase } from 'react-select';

export interface SelectProps<
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends Props<OptionType, IsMulti, GroupType> {
  /* Icon is before to the input */
  iconBefore?: JSX.Element;

  /** Is the select in an error/invalid state */
  isInvalid?: boolean;

  /** is the select in a success state */
  isSuccess?: boolean;

  /** is the select in a warning state */
  isWarning?: boolean;

  /** Sets whether the field should be constrained to the width of its trigger */
  shouldFitContainer?: boolean;

  /** If true, does not change the dropdown icon wrt validity */
  shouldNotChangeDropdownIcon?: boolean;

  /** Determines the height of the input field */
  size?: MediaQuery<InputSize>;
}

export type ButtonDropdownPropsType = SelectProps & {
  buttonProps: ButtonProps;
  menuIsOpen: boolean;
  onMenuClose: () => void;
  onMenuOpen: () => void;
};
