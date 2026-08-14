import type { MoodTrendView } from "@/constants/mood";

export interface MoodTrendPoint {
  label: string;
  score: number;
}
export type MoodTrendViewType =
  (typeof MoodTrendView)[keyof typeof MoodTrendView];
