import { MOOD_OUTLOOK_MESSAGES } from "@/constants/mood";
import { useMoodContext } from "@/context/hooks/useMoodContext";
import { getMoodOutlook } from "@/utils/mood";
import { Widget } from "@/shared/components/Widget/Widget";
import styles from "./MoodAnalysis.module.css";

export const MoodAnalysis = () => {
  const { moodData } = useMoodContext();
  const outlook = getMoodOutlook(moodData);

  return (
    <Widget className={styles.analysis}>
      <h2 className={styles.title}>Mood Insight</h2>
      <p className={styles.message}>{MOOD_OUTLOOK_MESSAGES[outlook]}</p>
    </Widget>
  );
};
