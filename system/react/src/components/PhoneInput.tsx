import { Close } from '@carbon/icons-react';
import { css} from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';

import { Input, InputWithIcons } from './Input';

export const classlessSelector = 'input[type="tel"]';
export const classySelector = '.phone-input';

export const baseStyles = css``;

// export const Flag = styled.span<{ country: string }>`
//   display: inline-block;
//   width: 20px;
//   height: 15px;
//   box-shadow: 0px 0px 1px 0px #888;
//   background-image: url(${getSrcPath(flagImage)});
//   background-repeat: no-repeat;

//   ${getStyle};

//   @media only screen and (-webkit-min-device-pixel-ratio: 2),
//     only screen and (min--moz-device-pixel-ratio: 2),
//     only screen and (-o-min-device-pixel-ratio: 2 / 1),
//     only screen and (min-device-pixel-ratio: 2),
//     only screen and (min-resolution: 192dpi),
//     only screen and (min-resolution: 2dppx) {
//     background-image: url(${getSrcPath(flagImage2x)});
//     background-size: 5630px 15px;
//   }
// `;

export interface Props {
  displayFlag?: boolean;
}

export const PhoneInput = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & Props
>(({displayFlag, ...props}, ref) => (
  <InputWithIcons {...props} ref={ref}>
    {displayFlag && }
    <Input placeholder="09000789" type="tel" />
    <Close size={16} />
  </InputWithIcons>
));
