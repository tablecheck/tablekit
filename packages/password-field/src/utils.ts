import { I18nMessageFlag } from './types';

const minLength = 6;
const normalLength = 10;

export const validationFunc = (value: string): void | I18nMessageFlag => {
  if (!value) {
    return I18nMessageFlag.Required;
  }
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/i.test(value)) {
    return I18nMessageFlag.InvalidFormat;
  }
  return undefined;
};

export const calculateScore = (
  value: string,
  min: number = minLength,
  normal: number = normalLength
): number => {
  let score = 0;
  if (value.length >= min && value.length <= normal) {
    score = 3;
  } else if (value.length > normal) {
    score = 4;
  }
  return score;
};
