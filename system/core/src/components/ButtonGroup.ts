import { css } from '../utils';

export const className = 'button-group';

export interface Props {
  'data-size'?: 'small' | 'medium' | 'large';
}

export type DefaultedProps = Props;

export const configurableDefaultProps = {
  'data-size': 'controlSize'
};

export const fullStyles = css`
  position: relative;
  display: flex;
  flex-flow: row wrap;

  & > * {
    position: relative;
    display: flex;
    gap: var(--spacing-l2);
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    color: var(--tk-button-color);
    background: var(--tk-button-background-color);
    border: 1px solid var(--tk-button-border-color);
    font-weight: 400;

    --tk-button-color: var(--text-subtle);
    --tk-button-background-color: var(--surface-low);
    --tk-button-border-color: var(--border);

    &[data-pseudo='hover'],
    &:hover {
      --tk-button-background-color: var(--surface-low-hover);
    }

    &[data-pseudo='focus'],
    &:focus,
    &:focus-visible {
      outline: none;
      --tk-button-background-color: var(--surface);
      &:after {
        content: '';
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0 0 0 2px var(--focus);
      }
    }
    &:focus:not(:focus-visible):after {
      box-shadow: none !important;
    }

    &[data-pseudo='active'],
    &:active {
      --tk-button-background-color: var(--surface-active);
    }

    &[data-selected='true'] {
      --tk-button-color: var(--brand-primary-text);
      --tk-button-background-color: var(--brand-primary);
      --tk-button-border-color: var(--brand-primary);
      z-index: 1;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius-small);
      border-bottom-left-radius: var(--border-radius-small);
      --tk-button-box-shadow: inset 0 0 0 1px var(--tk-button-border-color);

      &[data-pseudo='focus'],
      &:focus-visible {
        &:after {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
      }
    }

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:last-child {
      border-top-right-radius: var(--border-radius-small);
      border-bottom-right-radius: var(--border-radius-small);

      &[data-pseudo='focus'],
      &:focus-visible {
        &:after {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }
    }
  }

  &[data-size='medium'] > *,
  &:not([data-size]) > * {
    padding: 9px 11px;
    font-size: 16px;
    line-height: 20px;
  }

  &[data-size='small'] > * {
    padding: 7px;
    font-size: 14px;
    line-height: 16px;
  }

  &[data-size='large'] > * {
    padding: 13px 15px;
    font-size: 16px;
    line-height: 20px;
  }
`;
