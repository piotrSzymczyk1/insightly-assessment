import type { MoodOutlook } from "@/types/mood";

export const MOOD_OUTLOOK_MESSAGES: Record<MoodOutlook, string> = {
  positive: "Your mood has been improving over the past few days!",
  neutral: "Your mood has been varying lately. Try finding balance!",
  negative: "It seems like you've been feeling a bit down. Hang in there!",
};
export const OUTLOOK_THRESHOLD = 0.25;
export const MOODS = {
  happy: {
    score: 3,
    label: "Happy",
    icon: "🙂",
  },
  neutral: {
    score: 2,
    label: "Neutral",
    icon: "😐",
  },
  sad: {
    score: 1,
    label: "Sad",
    icon: "🙁",
  },
} as const;

export const MoodOutlookConst = {
  Positive: "positive",
  Neutral: "neutral",
  Negative: "negative",
} as const;

export const MoodLevel = {
  Happy: "happy",
  Neutral: "neutral",
  Sad: "sad",
} as const;

export const MoodTrendView = {
  Daily: "daily",
  Weekly: "weekly",
  Monthly: "monthly",
} as const;
