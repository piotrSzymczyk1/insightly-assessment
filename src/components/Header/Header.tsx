import { useThemeContext } from "@/context/hooks/useThemeContext";
import styles from "./Header.module.css";
import { useMoodContext } from "@/context/hooks/useMoodContext";
import { formatLocalDate } from "@/utils/date";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { moodData } = useMoodContext();

  const today = formatLocalDate(new Date());

  const todaysMood =
    moodData.find((entry) => entry.date === today)?.mood ?? "neutral";
  return (
    <header className={styles.header} data-mood={todaysMood}>
      <div>
        <h1 className={styles.title}>Insightly</h1>
        <p className={styles.subtitle}>Your daily mood and activity insights</p>
      </div>

      <button
        className={styles.themeToggle}
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </header>
  );
};
