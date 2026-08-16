import type { MoodStatusType } from "@/types/mood";

export const MOOD_TREND_MESSAGES: Record<MoodStatusType, string> = {
  positive: "Your mood has been improving over the past few days!",
  neutral: "Your mood has been varying lately. Try finding balance!",
  negative: "It seems like you've been feeling a bit down. Hang in there!",
};
export const TREND_THRESHOLD = 0.25;
export const MOODS = {
  positive: {
    score: 3,
    label: "Happy",
    icon: "🙂",
  },
  neutral: {
    score: 2,
    label: "Neutral",
    icon: "😐",
  },
  negative: {
    score: 1,
    label: "Sad",
    icon: "🙁",
  },
} as const;

export const MoodStatus = {
  Positive: "positive",
  Neutral: "neutral",
  Negative: "negative",
} as const;

export const MoodTrendView = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
