import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Spinner,
  spinnerThemeNamespace,
  SpinnerSize
} from '@tablecheck/tablekit-spinner';
import { MediaQuery } from '@tablecheck/tablekit-utils';

import { ButtonSize } from '../types';

type PropsType = {
  size?: MediaQuery<ButtonSize>;
};

const ButtonLoadingWrapper = styled.div`
  margin-top: 2px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const spinnerTheme = {
  [spinnerThemeNamespace]: {
    fillColor: 'currentColor'
  }
};

function composeSpinnerSize(buttonSize?: ButtonSize) {
  if (buttonSize === ButtonSize.Large) return SpinnerSize.Large;
  return SpinnerSize.Regular;
}

export const LoadingSpinner = ({
  size: buttonSize
}: PropsType): JSX.Element => {
  let spinnerSize;
  if (typeof buttonSize === 'object') {
    spinnerSize = Object.keys(buttonSize).reduce(
      (result, breakpoint) => ({
        ...result,
        [breakpoint]: composeSpinnerSize(buttonSize[breakpoint])
      }),
      {}
    );
  } else {
    spinnerSize = composeSpinnerSize(buttonSize);
  }

  return (
    <ThemeProvider theme={spinnerTheme}>
      <ButtonLoadingWrapper>
        <Spinner size={spinnerSize} />
      </ButtonLoadingWrapper>
    </ThemeProvider>
  );
};
