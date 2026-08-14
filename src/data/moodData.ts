import type { MoodTrendPoint } from "@/components/MoodTrends/MoodTrend.types";
import { MOODS } from "@/constants/mood";
import type { MoodEntry, MoodOutlook, MoodType } from "@/types/mood";
import { formatLocalDate } from "@/utils/date";
import { getRandomMoodOutlook } from "@/utils/mood";

export const weeklyMoodData: MoodTrendPoint[] = [
  { label: "Week 1", score: 2.6 },
  { label: "Week 2", score: 2.1 },
  { label: "Week 3", score: 2.0 },
  { label: "Week 4", score: 2.7 },
];

export const monthlyMoodData: MoodTrendPoint[] = [
  { label: "Mar", score: 1.9 },
  { label: "Apr", score: 2.2 },
  { label: "May", score: 1.6 },
  { label: "Jun", score: 1.4 },
  { label: "Jul", score: 1.3 },
  { label: "Aug", score: 1.6 },
];
const mockMoods: Record<MoodOutlook, MoodType[]> = {
  positive: [
    "neutral",
    "neutral",
    "happy",
    "neutral",
    "happy",
    "happy",
    "happy",
  ],
  neutral: ["sad", "happy", "neutral", "neutral", "neutral", "sad", "happy"],
  negative: ["neutral", "neutral", "sad", "sad", "sad", "sad", "sad"],
};
const outlooks: MoodOutlook[] = ["positive", "neutral", "negative"];

export const createInitialMoodData = (): MoodEntry[] => {
  const outlook = getRandomMoodOutlook(outlooks);
  const moods = mockMoods[outlook];
  const today = new Date();

  return moods.map((mood, index) => {
    const date = new Date(today);

    date.setDate(today.getDate() - (moods.length - 1 - index));

    return {
      date: formatLocalDate(date),
      mood,
      score: MOODS[mood].score,
    };
  });
};
