import { OUTLOOK_THRESHOLD } from "../constants/mood";
import type {
  MoodEntry,
  MoodOutlook,
  MoodScore,
  MoodType,
} from "../types/mood";

export const scoreToMood: Record<MoodScore, MoodType> = {
  1: "sad",
  2: "neutral",
  3: "happy",
};
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
    return "happy";
  }

  if (score < 1.5) {
    return "sad";
  }

  return "neutral";
};
export const getMoodIcon = (score: number | null): string => {
  const mood = getMoodLevel(score);

  switch (mood) {
    case "happy":
      return "🙂";

    case "neutral":
      return "😐";

    case "sad":
      return "🙁";

    default:
      return "—";
  }
};
export const getMoodOutlook = (moodData: MoodEntry[]): MoodOutlook => {
  if (moodData.length < 2) {
    return "neutral";
  }
  const midpoint = Math.floor(moodData.length / 2);

  const firstHalf = moodData.slice(0, midpoint);
  const secondHalf = moodData.slice(midpoint);

  const getAverage = (entries: MoodEntry[]) =>
    entries.reduce((acc, value) => acc + value.score, 0) / entries.length;

  const firstAverage = getAverage(firstHalf);
  const secondAverage = getAverage(secondHalf);
  const difference = secondAverage - firstAverage;

  if (difference >= OUTLOOK_THRESHOLD) {
    return "positive";
  }

  if (difference <= -OUTLOOK_THRESHOLD) {
    return "negative";
  }

  return "neutral";
};
