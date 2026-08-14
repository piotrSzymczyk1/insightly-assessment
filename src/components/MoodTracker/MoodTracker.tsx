import { useState, type SubmitEvent } from "react";
import { useMoodContext } from "@/context/hooks/useMoodContext";
import type { MoodType } from "@/types/mood";
import { Widget } from "@/shared/components/Widget/Widget";
import styles from "./MoodTracker.module.css";
import { MOODS } from "@/constants/mood";

export const MoodTracker = () => {
  const { saveMood } = useMoodContext();

  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedMood) {
      return;
    }

    saveMood(selectedMood);
    setSelectedMood(null);
  };

  return (
    <Widget className={styles.mood_tracker}>
      <h2 className={styles.title}>Mood Tracker</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>How are you feeling today?</legend>

          <div className={styles.options}>
            {(Object.keys(MOODS) as MoodType[]).map((mood) => {
              const option = MOODS[mood];

              return (
                <label className={styles.option} key={mood}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="mood"
                    value={mood}
                    checked={selectedMood === mood}
                    onChange={() => setSelectedMood(mood)}
                  />

                  <span className={styles.option_content}>
                    <span className={styles.icon} aria-hidden="true">
                      {option.icon}
                    </span>

                    <span>{option.label}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <button
          className={styles.submit}
          type="submit"
          disabled={!selectedMood}
        >
          Save mood
        </button>
      </form>
    </Widget>
  );
};
