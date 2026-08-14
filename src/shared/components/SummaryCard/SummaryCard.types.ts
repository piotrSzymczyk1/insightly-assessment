import type { MoodOutlook } from "@/types/mood";

export interface SummaryCardProps {
  icon: string;
  label: string;
  value: string | number;
  mood?: MoodOutlook | null;
}
