import { css } from '@emotion/react';

export const element = 'a';
export const selectors = ['a.link', 'a:not([class])'];
export const className = 'link';

export interface Props {
  href?: string | undefined;
}

export const baseStyles = css`
  color: var(--internal-link);
  text-decoration: none;
  &:not(:any-link) {
    --internal-link: var(--link-disabled);
  }
  &:link {
    --internal-link: var(--link);
    &:hover,
    &:active,
    &[data-pseudo='hover'] {
      text-decoration: underline;
      --internal-link: var(--link-hover);
    }
    &:visited,
    &[data-pseudo='visited'] {
      --internal-link: var(--link-visited);
    }
    &:focus:not(:focus-visible),
    &:focus-visible,
    &[data-pseudo='focus'] {
      outline: none;
      --internal-link: var(--link-hover);
      border-radius: 2px;
      box-shadow: 0 0 0 2px var(--link-hover);
    }
  }
`;
