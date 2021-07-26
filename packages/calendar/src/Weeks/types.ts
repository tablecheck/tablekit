export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export enum DayState {
  Default = 'default',
  Disabled = 'disabled',
  Selected = 'selected',
  SelectionStart = 'selection-start',
  SelectionEnd = 'selection-end',
  Outside = 'outside',
  Inbetween = 'inbetween'
}
