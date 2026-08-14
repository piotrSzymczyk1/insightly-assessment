import type { MoodLevel, MoodOutlookConst, MOODS } from "@/constants/mood";

export type MoodType = (typeof MoodLevel)[keyof typeof MoodLevel];

export type MoodScore = (typeof MOODS)[MoodType]["score"];

export interface MoodEntry {
  date: string;
  mood: MoodType;
  score: MoodScore;
}
export interface MoodScoreEntry {
  score: number;
}
export interface MockMood {
  mood: MoodType;
  score: MoodScore;
}

export type MoodOutlook =
  (typeof MoodOutlookConst)[keyof typeof MoodOutlookConst];
