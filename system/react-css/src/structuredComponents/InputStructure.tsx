import { InputAlert, Props as InputAlertProps } from './InputAlert';

interface Props {
  name: string;
  input: React.ReactNode;
  label: React.ReactNode;
  labelAppend?: React.ReactNode;
  description?: React.ReactNode;
  alert?: InputAlertProps;
  className?: string;
}

export function InputStructure({
  input,
  name,
  label,
  description,
  alert,
  labelAppend,
  className
}: Props): JSX.Element {
  return (
    <div className={`${className || ''} input-structure`}>
      {label || labelAppend ? (
        <div className="label-row">
          <label htmlFor={name}>{label}</label>
          <small>{labelAppend}</small>
        </div>
      ) : null}
      {description ? <aside>{description}</aside> : null}
      {input}
      {alert ? <InputAlert {...alert} /> : null}
    </div>
  );
}
