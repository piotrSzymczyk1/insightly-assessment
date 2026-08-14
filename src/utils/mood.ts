import {
  MoodLevel,
  MoodOutlookConst,
  MOODS,
  OUTLOOK_THRESHOLD,
} from "@/constants/mood";
import type {
  MoodEntry,
  MoodOutlook,
  MoodScoreEntry,
  MoodType,
} from "@/types/mood";

export const calculateMoodScore = (moodData: MoodEntry[]): number | null => {
  if (moodData.length === 0) {
    return null;
  }

  const total = moodData.reduce((acc, value) => acc + value.score, 0);

  return total / moodData.length;
};
export const getRandomMoodOutlook = (outlooks: MoodOutlook[]): MoodOutlook => {
  const randomIndex = Math.floor(Math.random() * outlooks.length);

  return outlooks[randomIndex];
};
export const getMoodLevel = (score: number | null): MoodType | null => {
  if (score === null) {
    return null;
  }

  if (score >= 2.5) {
    return MoodLevel.Happy;
  }

  if (score < 1.5) {
    return MoodLevel.Sad;
  }

  return MoodLevel.Neutral;
};
export const getMoodIcon = (score: number | null): string => {
  const mood = getMoodLevel(score);

  return mood ? MOODS[mood].icon : "—";
};
export const getMoodOutlook = (moodData: MoodScoreEntry[]): MoodOutlook => {
  if (moodData.length < 2) {
    return MoodOutlookConst.Neutral;
  }
  const midpoint = Math.floor(moodData.length / 2);

  const firstHalf = moodData.slice(0, midpoint);
  const secondHalf = moodData.slice(midpoint);

  const getAverage = (entries: MoodScoreEntry[]) =>
    entries.reduce((acc, value) => acc + value.score, 0) / entries.length;

  const firstAverage = getAverage(firstHalf);
  const secondAverage = getAverage(secondHalf);

  const difference = secondAverage - firstAverage;

  if (difference >= OUTLOOK_THRESHOLD) {
    return MoodOutlookConst.Positive;
  }

  if (difference <= -OUTLOOK_THRESHOLD) {
    return MoodOutlookConst.Negative;
  }

  return MoodOutlookConst.Neutral;
};
