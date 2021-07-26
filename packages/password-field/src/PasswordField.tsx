import { forwardRef, useState, useCallback } from 'react';

import { PasswordFieldStateless } from './PasswordFieldStateless';
import { StatefullProps } from './types';

type PasswordFieldProps = StatefullProps & {
  /** Function that is called whenever the state of the input field changes. It will
   be called with input value and metadata */
  onChangeValue?: (value: string, metadata: { invalidKey?: string }) => void;
};

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (props: PasswordFieldProps, ref) => {
    const {
      shouldHideScore = false,
      onChangeValue,
      validationFunc,
      calculateScore,
      minLength,
      normalLength,
      ...other
    } = props;
    const [invalidKey, setInvalidKey] = useState<string>();
    const [shouldShowPassword, setShowPassword] = useState(false);
    const [isTouched, setTouched] = useState(false);
    const [score, setScore] = useState(0);
    const [val, setVal] = useState('');

    const updateScore = useCallback(
      (value: string) => {
        if (shouldHideScore || !calculateScore) return null;
        const newScore = calculateScore(value, minLength, normalLength);
        setScore(newScore);
        return null;
      },
      [calculateScore, shouldHideScore]
    );

    const onChange = useCallback(
      (e: React.SyntheticEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        updateScore(value);
        setVal(value);
        setTouched(true);

        let invKey = '';
        if (validationFunc) {
          invKey = validationFunc(value) || '';
          setInvalidKey(invKey);
        }

        if (onChangeValue) onChangeValue(value, { invalidKey: invKey });
      },
      [validationFunc, updateScore, onChangeValue]
    );

    return (
      <PasswordFieldStateless
        {...other}
        shouldHideScore={shouldHideScore}
        invalidKey={invalidKey}
        type={shouldShowPassword ? 'text' : 'password'}
        ref={ref}
        shouldShowPassword={shouldShowPassword}
        score={score}
        isTouched={isTouched}
        toggleShowPassword={() => setShowPassword(!shouldShowPassword)}
        value={val}
        onChange={onChange}
      />
    );
  }
);
