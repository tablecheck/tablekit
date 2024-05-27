import { css } from '../utils';

export const className = 'scroll-shadow';

export interface Props {
  /**
   * Which axis to apply overflow: auto on.
   */
  'data-overflow': 'x' | 'y';
}

export const fullStyles = css`
  --tk-scroll-shadow-background: var(--surface);
  background-repeat: no-repeat;
  background-color: var(--tk-scroll-shadow-background);
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
  &[data-overflow='y'] {
    overflow-y: auto;
    background-image: /* Shadow covers */ linear-gradient(
        var(--tk-scroll-shadow-background) 30%,
        var(--tk-scroll-shadow-background)
      ),
      linear-gradient(
        var(--tk-scroll-shadow-background),
        var(--tk-scroll-shadow-background) 70%
      ),
      /* Shadows */
        radial-gradient(
          farthest-side at 0% 0,
          var(--border-transparent),
          rgba(0, 0, 0, 0)
        ),
      radial-gradient(
        farthest-side at 0% 100%,
        var(--border-transparent),
        rgba(0, 0, 0, 0)
      );
    background-position: 0 0, 0 100%, 0 0, 0 100%;
    background-size: 100% 40px, 100% 40px, 200% 14px, 200% 14px;
  }
  &[data-overflow='x'] {
    overflow-x: auto;
    background-image: /* Shadow covers */ linear-gradient(
        var(--tk-scroll-shadow-background) 30%,
        var(--tk-scroll-shadow-background)
      ),
      linear-gradient(
        var(--tk-scroll-shadow-background),
        var(--tk-scroll-shadow-background) 70%
      ),
      /* Shadows */
        radial-gradient(
          farthest-side at 0% 0%,
          var(--border-transparent),
          rgba(0, 0, 0, 0)
        ),
      radial-gradient(
        farthest-side at 100% 0%,
        var(--border-transparent),
        rgba(0, 0, 0, 0)
      );
    background-position: 0 0, 100% 0, 0 0, 100% 0;
    background-size: 40px 100%, 40px 100%, 14px 200%, 14px 200%;
  }
`;
