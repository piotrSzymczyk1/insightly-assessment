export type MoodType = "happy" | "neutral" | "sad";

export type MoodScore = 1 | 2 | 3;

export interface MoodEntry {
  date: string;
  mood: MoodType;
  score: MoodScore;
}
export interface MockMood {
  mood: MoodType;
  score: MoodScore;
}
export type MoodOutlook = "positive" | "neutral" | "negative";
