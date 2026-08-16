import type { MoodTrendPoint } from "@/components/MoodTrends/MoodTrend.types";
import { MOODS } from "@/constants/mood";
import type { MoodEntry, MoodStatusType } from "@/types/mood";
import { formatLocalDate } from "@/utils/date";
import { getRandomMoodTrend } from "@/utils/mood";

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
const mockMoods: Record<MoodStatusType, MoodStatusType[]> = {
  positive: [
    "neutral",
    "neutral",
    "positive",
    "neutral",
    "positive",
    "positive",
    "positive",
  ],
  neutral: [
    "negative",
    "positive",
    "neutral",
    "neutral",
    "neutral",
    "negative",
    "positive",
  ],
  negative: [
    "neutral",
    "neutral",
    "negative",
    "negative",
    "negative",
    "negative",
    "negative",
  ],
};
const trends: MoodStatusType[] = ["positive", "neutral", "negative"];

export const createInitialMoodData = (): MoodEntry[] => {
  const trend = getRandomMoodTrend(trends);
  const moods = mockMoods[trend];
  const today = new Date();

  return moods.map((status, index) => {
    const date = new Date(today);

    date.setDate(today.getDate() - (moods.length - 1 - index));

    return {
      date: formatLocalDate(date),
      status,
      score: MOODS[status].score,
    };
  });
};
