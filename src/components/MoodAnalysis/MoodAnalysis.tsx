import { MOOD_TREND_MESSAGES } from "@/constants/mood";
import { useMoodContext } from "@/context/hooks/useMoodContext";
import { Widget } from "@/shared/components/Widget/Widget";
import styles from "./MoodAnalysis.module.css";
import { getMoodTrend } from "@/utils/mood";

export const MoodAnalysis = () => {
  const { moodData } = useMoodContext();
  const trend = getMoodTrend(moodData);

  return (
    <Widget className={styles.analysis}>
      <h2 className={styles.title}>Mood Insight</h2>
      <p className={styles.message}>{MOOD_TREND_MESSAGES[trend]}</p>
    </Widget>
  );
};
