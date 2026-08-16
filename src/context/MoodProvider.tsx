import { createInitialMoodData } from "@/data/moodData";
import type { MoodEntry, MoodStatusType } from "@/types/mood";
import { formatLocalDate } from "@/utils/date";
import { useState, type PropsWithChildren } from "react";
import { MoodContext } from "./MoodContext";
import { MOODS } from "@/constants/mood";

export const MoodProvider = ({ children }: PropsWithChildren) => {
  const [moodData, setMoodData] = useState<MoodEntry[]>(createInitialMoodData);

  const saveMood = (status: MoodStatusType) => {
    const today = formatLocalDate(new Date());

    setMoodData((currentMoodData) =>
      currentMoodData.map((entry) =>
        entry.date === today
          ? {
              ...entry,
              status,
              score: MOODS[status].score,
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
