import { createContext, useState, type PropsWithChildren } from "react";

import { createInitialMoodData } from "../data/moodData";
import type { MoodEntry, MoodType } from "../types/mood";
import type { MoodContextValue } from "./MoodContext.types";

export const MoodContext = createContext<MoodContextValue | undefined>(
  undefined,
);

export const MoodProvider = ({ children }: PropsWithChildren) => {
  const [moodData, _setMoodData] = useState<MoodEntry[]>(createInitialMoodData);

  const saveMood = (mood: MoodType) => {
    // TODO: to be implemented after mood form is created
    console.log(mood);
  };

  return (
    <MoodContext.Provider value={{ moodData, saveMood }}>
      {children}
    </MoodContext.Provider>
  );
};
