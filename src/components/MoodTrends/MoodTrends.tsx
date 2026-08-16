import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useMoodContext } from "@/context/hooks/useMoodContext";
import { Widget } from "@/shared/components/Widget/Widget";
import styles from "./MoodTrends.module.css";
import { formatShortDate } from "@/utils/date";
import type { MoodTrendPoint, MoodTrendViewType } from "./MoodTrend.types";
import { useState } from "react";
import { monthlyMoodData, weeklyMoodData } from "@/data/moodData";
import { MoodTrendView } from "@/constants/mood";
import { getMoodTrend } from "@/utils/mood";

export const MoodTrends = () => {
  const { moodData } = useMoodContext();
  const [view, setView] = useState<MoodTrendViewType>(MoodTrendView.Daily);
  const dailyMoodData: MoodTrendPoint[] = moodData.map(({ date, score }) => ({
    label: formatShortDate(date),
    score,
  }));
  const trendData = {
    [MoodTrendView.Daily]: dailyMoodData,
    [MoodTrendView.Weekly]: weeklyMoodData,
    [MoodTrendView.Monthly]: monthlyMoodData,
  };
  const displayedData = trendData[view];
  const moodTrend = getMoodTrend(displayedData);
  const lineColor = `var(--mood-${moodTrend})`;
  return (
    <Widget className={styles.trends}>
      <div className={styles.header}>
        <h2 className={styles.title}>Mood Trends</h2>
        <select
          className={styles.select}
          value={view}
          onChange={(event) => setView(event.target.value as MoodTrendViewType)}
        >
          <option value={MoodTrendView.Daily}>Daily</option>
          <option value={MoodTrendView.Weekly}>Weekly</option>
          <option value={MoodTrendView.Monthly}>Monthly</option>
        </select>
      </div>
      <div className={styles.chart}>
        <LineChart
          responsive
          style={{
            width: "100%",
            height: "100%",
          }}
          data={displayedData}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" />
          <YAxis domain={[1, 3]} ticks={[1, 1.5, 2, 2.5, 3]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke={lineColor}
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </Widget>
  );
};
