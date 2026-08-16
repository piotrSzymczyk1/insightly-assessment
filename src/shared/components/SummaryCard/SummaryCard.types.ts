import type { MoodStatusType } from "@/types/mood";

export interface SummaryCardProps {
  icon: string;
  label: string;
  value: string | number;
  mood?: MoodStatusType | null;
}
