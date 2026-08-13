import { Header } from "./components/Header/Header";
import { Widget } from "./components/Widget/Widget";
import styles from "./App.module.css";
import { DailyInsightsSummary } from "./components/DailyInsightsSummary/DailyInsightsSummary";
import { MoodAnalysis } from "./components/MoodAnalysis/MoodAnalysis";
import { useThemeContext } from "./context/hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();
  return (
    <div className={styles.app} data-theme={theme}>
      <div className={styles.container}>
        <Header />

        <main className={styles.dashboard}>
          <DailyInsightsSummary />
          <MoodAnalysis />
          <Widget className={styles.trends}>
            <h2>Mood Trends</h2>
            <p>Chart.</p>
          </Widget>

          <Widget className={styles.moodform}>
            <h2>Mood Tracker</h2>
            <p>Mood form.</p>
          </Widget>
        </main>
      </div>
    </div>
  );
}

export default App;
