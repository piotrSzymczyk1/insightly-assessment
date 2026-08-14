import { useState } from "react";
import { calculateMoodScore, getMoodIcon, getMoodOutlook } from "@/utils/mood";
import { SummaryCard } from "@/shared/components/SummaryCard/SummaryCard";
import styles from "./DailyInsightsSummary.module.css";
import { useMoodContext } from "@/context/hooks/useMoodContext";

const createTasksCompleted = () => Math.floor(Math.random() * 11);

export const DailyInsightsSummary = () => {
  const { moodData } = useMoodContext();

  const [tasksCompleted] = useState(createTasksCompleted);

  const moodScore = calculateMoodScore(moodData);
  const moodOutlook = getMoodOutlook(moodData);
  const moodIcon = getMoodIcon(moodScore);
  return (
    <section className={styles.summary}>
      <SummaryCard
        icon="✓"
        label="Tasks Completed"
        value={tasksCompleted}
        mood={moodOutlook}
      />
      <SummaryCard
        icon={moodIcon}
        label="Mood Score"
        value={moodScore !== null ? moodScore.toFixed(1) : "—"}
        mood={moodOutlook}
      />
    </section>
  );
};
