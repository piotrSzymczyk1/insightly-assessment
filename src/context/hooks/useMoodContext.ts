import { useContext } from "react";
import { MoodContext } from "../MoodContext";

export const useMoodContext = () => {
  const context = useContext(MoodContext);

  if (!context) {
    throw new Error("useMood must be used within a MoodProvider");
  }

  return context;
};
