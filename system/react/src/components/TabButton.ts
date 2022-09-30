import styled from '@emotion/styled';

export const classySelector = '.tab-button';

export const TabButton = styled.button<{
  role?: 'tab';
  'aria-selected'?: boolean;
  'aria-controls'?: string;
}>`
  padding: var(--spacing-l3) var(--spacing-l4);
  position: relative;
  text-decoration: none !important;
  color: var(--text);
  font-weight: 500;
  --underline-height: 4px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    height: var(--underline-height);
    left: 0;
    right: 0;
    background: var(--text);
    opacity: 0;
    transform: scale(0.6);
    transform-origin: bottom center;
    transition: all 100ms ease-in-out;
  }
  &:hover:after {
    transition-duration: 250ms;
    opacity: 0.6;
    transform: scale(0.9);
  }
  &:active:after {
    opacity: 1;
    transform: scale(0.97);
  }
  &[aria-selected='true']:after {
    opacity: 1;
    transform: scale(1);
  }
`;
