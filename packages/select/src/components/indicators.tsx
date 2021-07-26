import { useTheme } from '@emotion/react';
import {
  Icon,
  DangerIcon,
  SuccessIcon,
  WarningIcon,
  getIcon
} from '@tablecheck/tablekit-icon';
import { Spinner } from '@tablecheck/tablekit-spinner';
import {
  components,
  IndicatorProps,
  OptionTypeBase,
  GroupTypeBase
} from 'react-select';

// indicators
export const ClearIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
): JSX.Element => (
  <components.ClearIndicator {...props}>
    <Icon icon={getIcon('close')} />
  </components.ClearIndicator>
);
export const DropdownIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    <Icon icon={getIcon('chevronDown')} />
  </components.DropdownIndicator>
);

export const SuccessIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    <SuccessIcon />
  </components.DropdownIndicator>
);

export const WarningIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    <WarningIcon />
  </components.DropdownIndicator>
);

export const ErrorIndicator = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: IndicatorProps<OptionType, IsMulti, GroupType>
): JSX.Element => (
  <components.DropdownIndicator {...props}>
    <DangerIcon />
  </components.DropdownIndicator>
);

export const LoadingIndicator = (): JSX.Element => {
  const theme = useTheme();
  return <Spinner color={theme.colors.secondary} />;
};
