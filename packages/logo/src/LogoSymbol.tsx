import styled from '@emotion/styled';
import { COLORS } from '@tablecheck/tablekit-theme';

type PropsType = {
  className?: string;
};

const SvgSymbolBase = ({ className }: PropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 58.3 58.4"
    className={className}
  >
    <g transform="translate(0 3)">
      <path
        fill="currentColor"
        d="M0 37.7c1.5 3.9 3.9 7.5 7 10.7 3.1 3.1 6.8 5.5 10.7 7L28.1 45c-4.5-.2-8.8-2.1-12.2-5.5s-5.2-7.8-5.5-12.2L0 37.7"
      />
      <path
        fill="currentColor"
        d="M58.3 37.7c-1.5 3.9-3.9 7.5-7 10.7-3.1 3.1-6.8 5.5-10.7 7L30.2 45c4.5-.2 8.8-2.1 12.2-5.5s5.2-7.8 5.5-12.2l10.4 10.4"
      />
      <path
        fill="currentColor"
        d="M40.6-3c3.9 1.5 7.5 3.9 10.7 7 3.1 3.1 5.5 6.8 7 10.7L47.9 25.2c-.2-4.5-2.1-8.8-5.5-12.2s-7.8-5.2-12.2-5.5l1.7-1.7L40.6-3"
      />
      <path
        fill="currentColor"
        d="M17.7-3C13.8-1.5 10.2.9 7 4c-3.1 3.1-5.5 6.8-7 10.7l10.4 10.5c.2-4.5 2.1-8.8 5.5-12.2s7.8-5.2 12.2-5.5L17.7-3"
      />
    </g>
  </svg>
);

export const LogoSymbol = styled(SvgSymbolBase)<{
  size: string | undefined;
  isDarkTheme?: boolean;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  color: ${({ isDarkTheme, theme }) => {
    const isDark =
      typeof isDarkTheme === 'undefined' ? theme?.isDark : isDarkTheme;
    return isDark ? 'white' : COLORS.PURPLE.L5;
  }};
`;
