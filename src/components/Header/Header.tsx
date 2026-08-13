import { useThemeContext } from "../../context/hooks/useThemeContext";
import styles from "./Header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className={styles.header}>
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
