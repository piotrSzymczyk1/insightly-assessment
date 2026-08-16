import type { MoodEntry, MoodStatusType } from "../types/mood";

export interface MoodContextValue {
  moodData: MoodEntry[];
  saveMood: (mood: MoodStatusType) => void;
}
