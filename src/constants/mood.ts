import type { MoodOutlook } from "../types/mood";

export const MOOD_OUTLOOK_MESSAGES: Record<MoodOutlook, string> = {
  positive: "Your mood has been improving over the past few days!",
  neutral: "Your mood has been varying lately. Try finding balance!",
  negative: "It seems like you've been feeling a bit down. Hang in there!",
};
export const OUTLOOK_THRESHOLD = 0.25;
