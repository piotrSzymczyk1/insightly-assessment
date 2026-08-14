import { Header } from "./components/Header/Header";
import { DailyInsightsSummary } from "./components/DailyInsightsSummary/DailyInsightsSummary";
import { MoodAnalysis } from "./components/MoodAnalysis/MoodAnalysis";
import { useThemeContext } from "./context/hooks/useThemeContext";
import { MoodTracker } from "./components/MoodTracker/MoodTracker";
import { MoodTrends } from "./components/MoodTrends/MoodTrends";
import styles from "./App.module.css";

function App() {
  const { theme } = useThemeContext();
  return (
    <div className={styles.app} data-theme={theme}>
      <div className={styles.container}>
        <Header />

        <main className={styles.dashboard}>
          <DailyInsightsSummary />
          <MoodAnalysis />
          <MoodTrends />
          <MoodTracker />
        </main>
      </div>
    </div>
  );
}

export default App;
