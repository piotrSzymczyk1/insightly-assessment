import { MOODS, MoodStatus, TREND_THRESHOLD } from "@/constants/mood";
import type { MoodEntry, MoodScoreEntry, MoodStatusType } from "@/types/mood";

export const calculateMoodScore = (moodData: MoodEntry[]): number | null => {
  if (moodData.length === 0) {
    return null;
  }

  const total = moodData.reduce((acc, value) => acc + value.score, 0);

  return total / moodData.length;
};
export const getRandomMoodTrend = (
  trends: MoodStatusType[],
): MoodStatusType => {
  const randomIndex = Math.floor(Math.random() * trends.length);

  return trends[randomIndex];
};
export const getMoodStatus = (score: number | null): MoodStatusType | null => {
  if (score === null) {
    return null;
  }

  if (score >= 2.5) {
    return MoodStatus.Positive;
  }

  if (score < 1.5) {
    return MoodStatus.Negative;
  }

  return MoodStatus.Neutral;
};
export const getMoodIcon = (score: number | null): string => {
  const status = getMoodStatus(score);

  return status ? MOODS[status].icon : "—";
};
export const getMoodTrend = (moodData: MoodScoreEntry[]): MoodStatusType => {
  if (moodData.length < 2) {
    return MoodStatus.Neutral;
  }
  const midpoint = Math.floor(moodData.length / 2);

  const firstHalf = moodData.slice(0, midpoint);
  const secondHalf = moodData.slice(midpoint);

  const getAverage = (entries: MoodScoreEntry[]) =>
    entries.reduce((acc, value) => acc + value.score, 0) / entries.length;

  const firstAverage = getAverage(firstHalf);
  const secondAverage = getAverage(secondHalf);

  const difference = secondAverage - firstAverage;

  if (difference >= TREND_THRESHOLD) {
    return MoodStatus.Positive;
  }

  if (difference <= -TREND_THRESHOLD) {
    return MoodStatus.Negative;
  }

  return MoodStatus.Neutral;
};
