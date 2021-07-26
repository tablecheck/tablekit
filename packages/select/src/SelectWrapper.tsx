import { Label, InputMessage } from '@tablecheck/tablekit-input';
import { cloneElement, ComponentType } from 'react';

type WrapperPropsType = {
  children: JSX.Element;
  className?: string;
  id: string;
  isInvalid?: boolean;
  isMessageHidden?: boolean;
  isRequired?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  label?: string;
  message?: string;
};

export const SelectWrapper: ComponentType<WrapperPropsType> = ({
  children,
  className,
  isRequired,
  isInvalid,
  isMessageHidden,
  isWarning,
  isSuccess,
  label,
  id,
  message
}: WrapperPropsType) => (
  <div className={className}>
    {label !== undefined ? (
      <Label
        htmlFor={`react-select-${id}--input`}
        isRequired={isRequired}
        label={label || ''}
      />
    ) : null}
    {cloneElement(children, {
      instanceId: id,
      isInvalid,
      isWarning,
      isSuccess
    })}

    {!isMessageHidden && <InputMessage>{message}</InputMessage>}
  </div>
);
