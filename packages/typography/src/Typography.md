### Examples

Import the base typography styles into a project as global css:

```tsx static
import { Global, css } from '@emotion/react';
import {
  desktopTypographyStyles,
  mobileTypographyStyles,
  commonTypographyStyles
} from '@tablecheck/tablekit-typography';

<Global
  styles={css`
    ${commonTypographyStyles};
    ${mobileTypographyStyles};

    @media (min-width: 1024px) {
      ${desktopTypographyStyles};
    }
  `}
/>;
```

Additionally, if a Heading needs specific styles, like the `Headline`, use the following approach:

```tsx static
import {
  TypographyHeadlineDesktop,
  TypographyHeadlineMobile
} from '@tablecheck/tablekit-typography';

const CustomDesktopHeadline = styled.h1`
  ${TypographyHeadlineDesktop.Headline};
`;

const CustomMobileHeading = styled.h1`
  ${TypographyHeadlineMobile.Headline};
`;
``;
```
