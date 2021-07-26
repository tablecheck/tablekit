import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';
import { margin } from '@tablecheck/tablekit-utils';

import { ItemGroupProps } from '../types';

export const ItemGroupContainer = styled.div<Pick<ItemGroupProps, 'minWidth'>>`
  display: flex;
  flex-direction: column;
  min-width: ${({ minWidth }) => minWidth || '1px'};
`;

export const TitleContainer = styled.div`
  margin: ${Spacing.L2} ${Spacing.L2};
`;

export const TitleText = styled.p<
  Pick<ItemGroupProps, 'isUppercase' | 'headingStyles'>
>`
  ${({ isUppercase }) => (isUppercase ? 'text-transform:  uppercase' : '')};
  font-weight: 600;
  ${Typography.Body2};
  /* Required for children to truncate */
  min-width: 0;
  ${({ headingStyles }) => headingStyles};
`;

export const ItemGroupContent = styled.div<
  Pick<ItemGroupProps, 'orientation' | 'hasIndent' | 'shouldWrap'>
>`
  display: flex;
  ${(props) => {
    const { orientation, hasIndent, shouldWrap } = props;
    const isHorizontal = orientation === 'horizontal';
    const flexDirection = isHorizontal ? 'row' : 'column';
    const wrapIndent = parseInt(Spacing.L2, 10) / 2;

    if (shouldWrap) {
      return css`
        flex-direction: ${flexDirection};
        flex-wrap: wrap;
        margin: ${hasIndent ? `-${wrapIndent}px` : ''};
        & > * {
          margin: ${hasIndent ? `${wrapIndent}px` : ''};
        }
      `;
    }
    if (hasIndent) {
      const lastChildMargin = isHorizontal
        ? { right: Spacing.L2 }
        : { bottom: Spacing.L2 };
      return css`
        flex-direction: ${flexDirection};
        & > *:not(:last-child) {
          ${margin(lastChildMargin)(props)}
        }
      `;
    }
    return css`
      flex-direction: ${flexDirection};
    `;
  }}
`;
