import { css } from '@emotion/react';
import { CSSObject } from '@emotion/styled';

export interface TypographyType extends CSSObject {
  fontSize: string;
  lineHeight: string;
  fontWeight?: number;
}

export enum TypographyHeadlineSize {
  Headline = 'Headline',
  Heading1 = 'Heading1'
}

export enum TypographySize {
  Heading2 = 'Heading2',
  Heading3 = 'Heading3',
  Heading4 = 'Heading4',
  Body1 = 'Body1',
  Body2 = 'Body2',
  Label1 = 'Label1',
  Label2 = 'Label2'
}

export const TypographyHeadlineDesktop: {
  [key in TypographyHeadlineSize]: TypographyType;
} = {
  Headline: {
    fontSize: '54px',
    lineHeight: '64px',
    letterSpacing: '-0.01em',
    fontWeight: 700
  },
  Heading1: {
    fontSize: '36px',
    lineHeight: '48px',
    letterSpacing: '-0.01em',
    fontWeight: 600
  }
};

export const TypographyHeadlineMobile: {
  [key in TypographyHeadlineSize]: TypographyType;
} = {
  Headline: {
    fontSize: '44px',
    lineHeight: '52px',
    fontWeight: 700,
    letterSpacing: '-0.01em'
  },
  Heading1: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: 600,
    letterSpacing: '-0.01em'
  }
};

export const Typography: {
  [key in TypographySize]: TypographyType;
} = {
  Heading2: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400
  },
  Heading3: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600
  },
  Heading4: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600
  },
  Body1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400
  },
  Body2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400
  },
  Label1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600
  },
  Label2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600
  }
};

export const desktopTypographyStyles = css`
  h1 {
    ${TypographyHeadlineDesktop.Heading1};
  }
`;

export const mobileTypographyStyles = css`
  h1 {
    ${TypographyHeadlineMobile.Heading1};
  }
`;

export const commonTypographyStyles = css`
  h2 {
    ${Typography.Heading2};
  }
  h3 {
    ${Typography.Heading3};
  }
  h4 {
    ${Typography.Heading4};
  }
  body,
  p {
    ${Typography.Body1};
  }
  small {
    ${Typography.Body2};
  }
  label {
    ${Typography.Label1};
  }
`;
