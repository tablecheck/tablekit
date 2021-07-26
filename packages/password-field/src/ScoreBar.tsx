import { useTheme } from '@emotion/react';
import { Line } from 'rc-progress';

import {
  ValidationMessage,
  ValidationMessageWithoutBar,
  Wrapper
} from './styled/ScoreBar';
import { Score, ScoreBarProps, ScoreLevel } from './types';

export const VALID_SCORE = 3;

const validateScore = (
  scoreValue: ScoreBarProps['scoreValue'],
  hasValue: ScoreBarProps['hasValue'],
  useInvalidMessage: ScoreBarProps['hasValue']
): Score => {
  const score: Score = {
    level: ScoreLevel.Danger,
    progressPercent: 0
  };
  if (!hasValue) return score;

  if (scoreValue < VALID_SCORE) {
    score.level = ScoreLevel.Danger;
    score.progressPercent = 25;
  } else if (scoreValue === VALID_SCORE) {
    score.level = ScoreLevel.Warning;
    score.progressPercent = 50;
  } else if (scoreValue > VALID_SCORE) {
    score.level = ScoreLevel.Success;
    score.progressPercent = 100;
  }

  if (useInvalidMessage) {
    score.level = ScoreLevel.Danger;
  }

  return score;
};

export const ScoreBar = (props: ScoreBarProps): JSX.Element => {
  const {
    scoreValue,
    shouldHideScore,
    invalidKey,
    hasValue,
    i18nMessages,
    shouldFitContainer,
    width
  } = props;
  const theme = useTheme();
  const score = validateScore(scoreValue, hasValue, !!invalidKey);

  if (shouldHideScore) {
    return (
      <ValidationMessageWithoutBar scoreColor="danger">
        {invalidKey ? i18nMessages[invalidKey] : null}
      </ValidationMessageWithoutBar>
    );
  }

  return (
    <Wrapper
      percent={score.progressPercent}
      shouldFitContainer={shouldFitContainer}
      width={width}
    >
      <Line
        strokeColor={theme.colors[score.level]}
        percent={score.progressPercent}
        strokeWidth={3}
        trailWidth={3}
        strokeLinecap="square"
      />
      {hasValue && (
        <ValidationMessage scoreColor={score.level}>
          {invalidKey ? i18nMessages[invalidKey] : i18nMessages[score.level]}
        </ValidationMessage>
      )}
    </Wrapper>
  );
};
