export type MoodScore = 1 | 2 | 3;

export type MoodStatusType = "positive" | "neutral" | "negative";

export interface MoodEntry {
  date: string;
  status: MoodStatusType;
  score: MoodScore;
}
export interface MoodScoreEntry {
  score: number;
}
