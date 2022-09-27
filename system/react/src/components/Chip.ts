import styled, { CSSObject } from '@emotion/styled';

export const classySelector = '.chip';

export const stateStylesObjects: Record<
  'focus' | 'selected' | 'active' | 'hover' | 'disabled',
  CSSObject
> = {
  active: {
    color: 'var(--text)',
    background: 'var(--surface-active)',
    border: '2px solid var(--border)'
  },
  focus: {
    color: 'var(--text)',
    background: 'var(--surface)',
    border: '2px solid var(--border)',
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: '-6px',
      bottom: '-6px',
      left: '-6px',
      right: '-6px',
      borderRadius: 'var(--spacing-l8)',
      border: '2px solid var(--focus, hsla(219, 78.5%, 52.5%, 1))'
    }
  },
  selected: {
    color: 'var(--text)',
    background: 'var(--surface)',
    border: '2px solid var(--secondary)'
  },
  hover: {
    color: 'var(--text)',
    background: 'var(--surface-hover)',
    border: '2px solid var(--border)'
  },
  disabled: {
    color: 'var(--text-disabled)',
    background: 'var(--disabled)',
    border: '2px solid var(--border)'
  }
};

export const baseStylesObject: CSSObject = {
  position: 'relative',
  width: 'max-content',
  font: 'var(--label)',
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: 'var(--spacing-l1)',
  alignItems: 'center',
  padding: '12px 16px',
  borderRadius: 'var(--spacing-l8)',
  border: '2px solid var(--border)',
  transition: 'all 300ms ease-in-out'
};

// eslint-disable-next-line @emotion/syntax-preference
export const Chip = styled.span<{ 'data-selected'?: boolean }>({
  ...baseStylesObject,
  '&:active': stateStylesObjects.active,
  '&:focus': stateStylesObjects.focus,
  '&:hover': stateStylesObjects.hover,
  '&[data-disabled=true]': stateStylesObjects.disabled,
  '&[data-selected=true]': stateStylesObjects.selected
});
