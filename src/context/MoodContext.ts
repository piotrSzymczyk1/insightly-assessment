import { createContext } from "react";
import type { MoodContextValue } from "./MoodContext.types";

export const MoodContext = createContext<MoodContextValue | undefined>(
  undefined,
);
