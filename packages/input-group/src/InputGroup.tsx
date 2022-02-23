import { Size } from '@tablecheck/tablekit-theme';
import { MediaQuery } from '@tablecheck/tablekit-utils';
import { forwardRef } from 'react';

import { InputGroupOuter } from './styled';
import { InputShape } from './types';

export type InputGroupProps = {
  className?: string;
  children: React.ReactElement[];
  size?: MediaQuery<Size>;
  shape?: InputShape;
};

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, children }: InputGroupProps, ref): JSX.Element => (
    <InputGroupOuter className={className} ref={ref}>
      {children}
    </InputGroupOuter>
  )
);
