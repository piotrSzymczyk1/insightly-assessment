import type { MoodEntry, MoodType } from "../types/mood";

export interface MoodContextValue {
  moodData: MoodEntry[];
  saveMood: (mood: MoodType) => void;
}
