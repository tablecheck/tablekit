import { COLORS } from '@tablecheck/tablekit-theme';

export const cities = [
  { label: 'Adelaide', value: 'adelaide' },
  { label: 'Brisbane', value: 'brisbane' },
  { label: 'Canberra', value: 'canberra' },
  { label: 'Darwin', value: 'darwin' },
  { label: 'Hobart', value: 'hobart' },
  { label: 'Melbourne', value: 'melbourne' },
  { label: 'Perth', value: 'perth' },
  { label: 'Sydney', value: 'sydney' }
];

export const colorOptions = [
  { value: COLORS.AQUA.L4, label: 'Ocean' },
  { value: COLORS.BLUE.L5, label: 'Blue', disabled: true },
  { value: COLORS.PURPLE.L5, label: 'Purple' },
  { value: COLORS.RED.L5, label: 'Red' },
  { value: COLORS.YELLOW.L1, label: 'Orange' },
  { value: COLORS.YELLOW.L4, label: 'Yellow' },
  { value: COLORS.GREEN.L5, label: 'Green' },
  { value: COLORS.GREEN.L2, label: 'Forest' },
  { value: COLORS.GRAY.L3, label: 'Slate' },
  { value: COLORS.GRAY.L8, label: 'Silver' }
].map((option) => ({
  ...option,
  color: option.value
}));
