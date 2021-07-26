import { css, SerializedStyles, Theme } from '@emotion/react';

export function getLinkStyles({ theme }: { theme: Theme }): SerializedStyles {
  return css`
    color: ${theme.colors.primary};
    text-decoration: none;
    position: relative;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 0.1em;
    transition: background-size 150ms ease-in-out;

    :hover,
    :focus {
      background-size: 100% 0.1em;
    }

    :focus {
      outline: none;
    }

    :visited {
      color: ${theme.colors.secondary};
    }
  `;
}
