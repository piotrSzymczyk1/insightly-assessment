import type { MoodEntry, MoodOutlook, MoodScore } from "../types/mood";
import { formatLocalDate } from "../utils/date";
import { getRandomMoodOutlook, scoreToMood } from "../utils/mood";

const mockMoodScores: Record<MoodOutlook, MoodScore[]> = {
  positive: [2, 2, 3, 3, 3, 3, 3],
  neutral: [1, 3, 2, 2, 2, 1, 3],
  negative: [2, 2, 1, 1, 1, 1, 1],
};
const outlooks: MoodOutlook[] = ["positive", "neutral", "negative"];

export const createInitialMoodData = (): MoodEntry[] => {
  const outlook = getRandomMoodOutlook(outlooks);
  const scores = mockMoodScores[outlook];
  const today = new Date();

  return scores.map((score, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (scores.length - 1 - index));
    return {
      date: formatLocalDate(date),
      mood: scoreToMood[score],
      score,
    };
  });
};
