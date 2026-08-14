import { createContext, useState, type PropsWithChildren } from "react";
import { createInitialMoodData } from "@/data/moodData";
import type { MoodEntry, MoodType } from "@/types/mood";
import type { MoodContextValue } from "./MoodContext.types";
import { formatLocalDate } from "@/utils/date";
import { MOODS } from "@/constants/mood";

export const MoodContext = createContext<MoodContextValue | undefined>(
  undefined,
);

export const MoodProvider = ({ children }: PropsWithChildren) => {
  const [moodData, setMoodData] = useState<MoodEntry[]>(createInitialMoodData);

  const saveMood = (mood: MoodType) => {
    const today = formatLocalDate(new Date());

    setMoodData((currentMoodData) =>
      currentMoodData.map((entry) =>
        entry.date === today
          ? {
              ...entry,
              mood,
              score: MOODS[mood].score,
            }
          : entry,
      ),
    );
  };

  return (
    <MoodContext.Provider value={{ moodData, saveMood }}>
      {children}
    </MoodContext.Provider>
  );
};
