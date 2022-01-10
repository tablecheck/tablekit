import { Spacing } from '@tablecheck/tablekit-theme';
import flushable, { FlushableOperation } from 'flushable';

let pendingHide: FlushableOperation;

export const showTooltip = (
  fn: (arg0: boolean) => void,
  defaultDelay: number
): FlushableOperation['cancel'] => {
  const isHidePending = pendingHide && pendingHide.pending();
  if (isHidePending) {
    pendingHide.flush();
  }
  const pendingShow = flushable(
    () => fn(isHidePending),
    isHidePending ? 0 : defaultDelay
  );
  return pendingShow.cancel;
};

export const hideTooltip = (
  fn: (arg0: boolean) => void,
  defaultDelay: number
): FlushableOperation['cancel'] => {
  pendingHide = flushable((flushed) => fn(flushed), defaultDelay);
  return pendingHide.cancel;
};

export const defaultPopperModifiers = [
  {
    name: 'offset',
    options: { offset: [0, parseInt(Spacing.L1, 10)] }
  }
];
