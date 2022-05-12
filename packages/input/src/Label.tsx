import { ReactNode, MouseEvent, KeyboardEvent } from 'react';

import {
  InputLabelWrapper,
  InputLabelInner,
  RequiredIndicator
} from './styled/label';

type PropsType = {
  /** any children to render, displayed underneath the label */
  children?: ReactNode;

  /** the labels control element */
  htmlFor?: string;

  /** show a style indicating that the label is for a required field */
  isRequired?: boolean;

  /** the label text to display, note that the label's direct parent is a span so passing in a block element such as a div might throw warnings */
  label: string | ReactNode;

  /** onclick handler */
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
};

export const Label = ({
  children,
  htmlFor,
  isRequired,
  label,
  onClick
}: PropsType): JSX.Element => (
  <InputLabelWrapper htmlFor={htmlFor}>
    <InputLabelInner>
      <span
        role="presentation"
        onClick={onClick}
        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) =>
          event.key === 'Enter' && onClick ? onClick(event) : true
        }
      >
        {label}
      </span>
      {isRequired ? (
        <RequiredIndicator role="presentation">*</RequiredIndicator>
      ) : null}
    </InputLabelInner>
    {children}
  </InputLabelWrapper>
);
