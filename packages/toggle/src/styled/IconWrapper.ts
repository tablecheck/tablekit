import styled from '@emotion/styled';
import { COLORS, Spacing } from '@tablecheck/tablekit-theme';

export const CheckedIconWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${Spacing.L2};
  color: white;
  > svg {
    height: ${Spacing.L4};
    width: ${Spacing.L4} !important;
  }
`;

export const UncheckedIconWrapper = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${Spacing.L2};
  color: ${COLORS.GRAY.L7};
  > svg {
    height: ${Spacing.L4};
    width: ${Spacing.L4} !important;
  }
`;
