import { ButtonGroupContainer, ItemContainer } from './styled';
import { ButtonGroupPropsType } from './types';

export const ButtonGroup = ({
  items = [],
  width = '100%',
  className,
  values = [],
  onChange,
  isMulti = false,
  isInvalid = false,
  isValueRequired = false,
  ...restProps
}: ButtonGroupPropsType): JSX.Element => (
  <ButtonGroupContainer
    {...restProps}
    width={width}
    className={className}
    isInvalid={isInvalid}
  >
    {items.map(({ label, value, iconBefore = null, iconAfter = null }) => {
      const isSelected = values.indexOf(value) !== -1;
      return (
        <ItemContainer
          aria-selected={isSelected}
          data-value={value}
          key={value}
          elemBefore={iconBefore}
          elemAfter={iconAfter}
          isSelected={isSelected}
          onClick={() => {
            let newValues = [];
            if (isMulti) {
              if (isSelected) {
                newValues = values.filter((val) => value !== val);
              } else {
                newValues = [...values, value];
              }
            } else {
              newValues = isSelected ? [] : [value];
            }
            if (isValueRequired && newValues.length === 0) {
              return;
            }
            onChange(newValues);
          }}
        >
          {label}
        </ItemContainer>
      );
    })}
  </ButtonGroupContainer>
);
