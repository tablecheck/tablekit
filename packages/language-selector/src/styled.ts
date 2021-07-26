import styled from '@emotion/styled';
import {
  InlineDialog,
  InlineDialogProps
} from '@tablecheck/tablekit-inline-dialog';
import { Item } from '@tablecheck/tablekit-item';
import { Spacing } from '@tablecheck/tablekit-theme';
import { Typography } from '@tablecheck/tablekit-typography';

// bit hacky, but this get's us pass the un-genericized InlineDialog
// the props passed as generic to styled component definition are correct
// the two generic args tend to conflict with each other
export const InlineDialogWrapper = styled(InlineDialog as unknown as 'div')<
  InlineDialogProps<HTMLButtonElement>
>`
  height: 100%;
  width: 72px;

  > span {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  ${Typography.Body2};
`;

export const ItemSubtitle = styled.span`
  margin-left: ${Spacing.L1};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const LangItem = styled(Item)<{ itemWidth: string; itemHeight: string }>`
  width: ${({ itemWidth }) => itemWidth};
  height: ${({ itemHeight }) => itemHeight};
`;

export const ButtonWrapper = styled.div`
  text-align: ${({ theme: { isRtl } }) => (isRtl ? 'left' : 'right')};
  padding: ${Spacing.L3};
`;

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
`;
