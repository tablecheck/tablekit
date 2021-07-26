import { SerializedStyles } from '@emotion/react';

import { Appearance } from '../../types';

import { disabledVariant } from './disabledVariant';
import { disabledVerticalVariant } from './disabledVerticalVariant';
import { inverseVariant } from './inverseVariant';
import { outlineVariant } from './outlineVariant';
import { borderWidth as borderWidthImport, VariantProps } from './shared';
import { solidVariant } from './solidVariant';
import { subtleOutlineVariant } from './subtleOutlineVariant';
import { subtleVariant } from './subtleVariant';
import { verticalVariant } from './verticalVariant';

export const borderWidth = borderWidthImport;

export const defaultVariants: {
  [key in Appearance]: (props: VariantProps) => SerializedStyles;
} = {
  [Appearance.Disabled]: disabledVariant,
  [Appearance.Subtle]: subtleVariant,
  [Appearance.Solid]: solidVariant,
  [Appearance.Outline]: outlineVariant,
  [Appearance.Inverse]: inverseVariant,
  [Appearance.SubtleOutline]: subtleOutlineVariant,
  [Appearance.DisabledVertical]: disabledVerticalVariant,
  [Appearance.Vertical]: verticalVariant
};
